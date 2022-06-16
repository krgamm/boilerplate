const SECONDARY_NAV = {
  init: function() {
    this.addSecondaryNavExpands();
    this.toggleSecondaryNavExpands();
  },

  // add nested level expand buttons
  addSecondaryNavExpands: function() {
    const items = document.querySelectorAll('.secondary-nav li');
  
    if (items.length) {
      items.forEach(function(item) {
        const menu = item.querySelector('ul');
        if (menu) {
          item.classList.add('has-children');
          const link = item.querySelector('a');
          let trigger = document.createElement('button');
          trigger.classList.add('secondary-nav__expand');
          trigger.setAttribute('aria-label', 'Toggle Menu');
          trigger.setAttribute('title', 'Toggle Menu');
          trigger.setAttribute('type', 'button');
          link.parentNode.insertBefore(trigger, link.nextSibling);
        }
      });
    }
  },

  // toggle expand buttons
  toggleSecondaryNavExpands: function() {
    const activeClass = 'active';
    const activeModifier = '--active';
    const expandClass = 'secondary-nav__expand';

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

SECONDARY_NAV.init();