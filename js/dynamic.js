/* ============ Reusable Components ============ */
const components = ['accordion', 'announcement', 'location-finder', 'slider', 'tabs'];

components.forEach(component => {
  if (document.querySelectorAll(`.${component}`).length) {
    import(`./${component}-min.js`);
  }
});

/* ============ Templates ============ */
const templates = ['home', 'default', 'full-width'];

templates.forEach(template => {
  if (document.querySelector('body').classList.contains(`${template}`)) {
    import(`./${template}-min.js`);
  }
});