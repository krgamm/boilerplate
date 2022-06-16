const SIDECAR = {
  init: function() {
    this.toggleSidecar();
    this.addSidecarExpands();
    this.toggleSidecarExpands();
  },
    
  // toggle sidecar
  toggleSidecar: function() {
    const activeModifier = '--active';
    const panelClass = 'sidecar';
    const triggerClass = 'hamburger';

    const panel = document.querySelector(`.${panelClass}`);
    const trigger = document.querySelector(`.${triggerClass}`);

    function openPanel() {
      panel.classList.add(`${panelClass}${activeModifier}`);
      trigger.classList.add(`${triggerClass}${activeModifier}`);
    }

    function closePanel() {
      panel.classList.remove(`${panelClass}${activeModifier}`);
      trigger.classList.remove(`${triggerClass}${activeModifier}`);
    }

    function onClick() {
      (trigger.classList.contains(`${triggerClass}${activeModifier}`))
        ? closePanel()
        : openPanel();
    }

    if (panel && trigger) {
      trigger.addEventListener('click', onClick);
    }
  },

  // add nested level expand buttons
  addSidecarExpands: function() {
    const items = document.querySelectorAll('.sidecar-nav li');
  
    if (items.length) {
      items.forEach(function(item) {
        const menu = item.querySelector('ul');
        if (menu) {
          item.classList.add('has-children');
          const link = item.querySelector('a');
          let expand = document.createElement('button');
          expand.classList.add('sidecar__expand');
          expand.setAttribute('aria-label', 'Toggle Menu');
          expand.setAttribute('title', 'Toggle Menu');
          expand.setAttribute('type', 'button');
          link.parentNode.insertBefore(expand, link.nextSibling);
        }
      });
    }
  },

  // toggle expand buttons
  toggleSidecarExpands: function() {
    const activeClass = 'active';
    const activeModifier = '--active';
    const expandClass = 'sidecar__expand';

    const expands = document.querySelectorAll(`.${expandClass}`);

    function collapseMenu(expand, panel) {
      expand.classList.remove(`${expandClass}${activeModifier}`);
      panel.style.height = panel.offsetHeight + 'px';
      setTimeout(() => { panel.style.height = '0px' }, 0);
      let transitionDuration = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration-m').replace('s', '');
      transitionDuration = parseFloat(transitionDuration) * 1000;
      setTimeout(() => {
        panel.classList.remove(`${activeClass}`);  
      }, transitionDuration);
    }

    function expandMenu(expand, panel) {
      expand.classList.add(`${expandClass}${activeModifier}`);
      panel.classList.add(`${activeClass}`);
      panel.style.height = 'auto';
      let panelHeight = panel.offsetHeight + 'px';
      panel.style.height = '0px';
      setTimeout(() => { panel.style.height = panelHeight }, 0);
      let transitionDuration = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration-m').replace('s', '');
      transitionDuration = parseFloat(transitionDuration) * 1000;
      setTimeout(() => { panel.style.height = 'auto' }, transitionDuration);
    }

    function onClick() {
      const expand = this;
      const panel = expand.parentNode.querySelector('ul');
      (expand.classList.contains(`${expandClass}${activeModifier}`))
        ? collapseMenu(expand, panel)
        : expandMenu(expand, panel);
    }

    if (expands.length) {
      expands.forEach(function (expand) {
        expand.addEventListener('click', onClick);
      });
    }
  }
}

SIDECAR.init();