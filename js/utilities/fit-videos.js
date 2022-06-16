// Wrap videos to their aspect ratio to make them responsive
  
const players = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];

const fitVids = document.querySelectorAll(players.join(','));

if (fitVids.length) {

  for (let i=0; i<fitVids.length; i++) {

    // Get Video Information
    const fitVid = fitVids[i];
    const width = fitVid.getAttribute('width');
    const height = fitVid.getAttribute('height');
    const aspectRatio = height/width;
    const parentDiv = fitVid.parentNode;

    // Wrap it in a DIV
    const div = document.createElement('div');
    div.className = 'fitVids-wrapper';
    div.style.paddingBottom = aspectRatio * 100 + "%";
    parentDiv.insertBefore( div, fitVid );
    fitVid.remove();
    div.appendChild( fitVid );

    // Clear height/width from fitVid
    fitVid.removeAttribute('height')
    fitVid.removeAttribute('width');
  }
}