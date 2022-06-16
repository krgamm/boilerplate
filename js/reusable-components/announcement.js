const ANNOUNCEMENT = {
  init: function() {
    this.handleAnnouncement();
  },

  handleAnnouncement: function() {
    const announcementClass = 'announcement';
    const hiddenModifier = '--hide';
    const showModifier = '--show';
  
    const announcement = document.querySelector(`.${announcementClass}`);
    const closebutton = document.querySelector(`.announcement__close`);
  
    function setCookie(name, value, days = 7, path = "/") {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
    }
  
    function getCookie(name) {
      return document.cookie.split("; ").reduce((r, v) => {
        const parts = v.split("=");
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, "");
    }
  
    function hideAnnouncement() {
      announcement.classList.add(`${announcementClass}${hiddenModifier}`);
      announcement.classList.remove(`${announcementClass}${showModifier}`);
    }
  
    function showAnnouncement() {
      announcement.classList.add(`${announcementClass}${showModifier}`);
      announcement.classList.remove(`${announcementClass}${hiddenModifier}`);
    }
  
    function handleClose() {
      setCookie("hideAnnouncement", true, 1);
      hideAnnouncement();
    }
  
    // Close Announcement when close button is clicked
    if (announcement && closebutton) {
      closebutton.addEventListener('click', handleClose);
    }
  
    // Hide or show announcement on load based on cookie status
    let hideAnnouncementVal = getCookie("hideAnnouncement");

    if (announcement !== null) {
      if (hideAnnouncementVal === null || hideAnnouncementVal === false || hideAnnouncementVal === "") {
        showAnnouncement();
      } else {
        hideAnnouncement();
      }
    }
  }

}

ANNOUNCEMENT.init();
