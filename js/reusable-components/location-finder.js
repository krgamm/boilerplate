const LOCATION_FINDER = {
  init: function() {
    this.initMap();
    this.locationSearch();
  },

  initMap: function() {
    const locationEls = document.querySelectorAll('.location');
    const mapEl = document.querySelector('#map');
  
    function getLocations() {
      const locations = [];
  
      if (locationEls) {
        locationEls.forEach(function(el, locIndex) {
          const addressText = el.getAttribute("data-location-address");
          const lat = parseFloat(el.getAttribute("data-location-latitude"));
          const lng = parseFloat(el.getAttribute("data-location-longitude"));
          el.setAttribute('data-location-marker', locIndex);
          const titleText = el.getAttribute("data-location-title");
  
          const address = `
            <p class="info-window__p">
              ${addressText}
            </p>
          `;
  
          const title = `
            <h4 class="info-window__title">
              ${titleText}
            </h4>
          `;
  
          const location = {
            address,
            lat,
            lng,
            title
          };
  
          locations.push(location);
        });
      }
  
      return locations;
    }
  
    function pinSymbol(fillColor, strokeColor) {
      return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: fillColor,
          fillOpacity: 1,
          scale: 1,
          strokeColor: strokeColor,
          strokeWeight: 2
     };
    }
  
    function createMap() {
      if (mapEl) {
        const bounds = new google.maps.LatLngBounds();
        const locations = getLocations();
        const markers = [];
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
        const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-black');
  
        // Set intial center and styles
        const map = new google.maps.Map(mapEl, {
          center: {
            lat: locations[0].lat,
            lng: locations[0].lng
          },
          styles: [
            {
              elementType: "labels",
              featureType: "poi",
              stylers: [{ visibility: "off" }]
            }
          ],
          zoom: 14
        });
  
        const infowindow = new google.maps.InfoWindow({
          maxWidth: 350
        });
  
        locations.forEach(function(location) {
          const {
            address,
            lat,
            lng,
            title
          } = location;
  
          const marker = new google.maps.Marker({
            icon: pinSymbol(primaryColor, secondaryColor),
            map: map,
            position: {
              lat: lat,
              lng: lng
            }
          });
  
          bounds.extend(marker.position);
  
          marker.addListener('click', function() {
            map.setCenter(marker.getPosition());
            infowindow.setContent(`
              ${title}
              ${address}
            `);
            infowindow.open(map, marker);
          });
  
          markers.push(marker);
        });
  
        // On location click, activate map marker
        if (locationEls) {
          locationEls.forEach(function(el) {
            el.addEventListener('click', function() {
              const marker = el.getAttribute("data-location-marker");
              google.maps.event.trigger(markers[marker], 'click');
            })
          });
        }
  
        // Make sure all the points fit on load
        map.fitBounds(bounds);
        map.panToBounds(bounds);
      }
    }
  
    createMap();
  
  },

  locationSearch: function() {
    const input = document.querySelector('.location-finder__search-input');
    const locationsWrapper = document.querySelector('.locations');
    const locations = document.querySelectorAll('.location');
  
    // Slice Node List to be an Array //
    const locationsList = [].slice.call(locations);
  
    function handleKeyup(e) {
      // Set a Regular Expression (regex) to be global and case insensitive (gi) //
      const match = new RegExp(`${e.target.value}`, 'gi');
      // let results = locationsList.filter(location => match.test(location.dataset.locationTitle));
      let results = locationsList.filter(location => match.test(location.innerText));
      locationsWrapper.innerHTML = '';
      results.forEach(function(result) {
        locationsWrapper.appendChild(result)
      });
    }
  
    if (input) {
      input.addEventListener('keyup', handleKeyup);
    }
  }
}

LOCATION_FINDER.init();