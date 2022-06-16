const TABS = {
  init: function() {
    this.handleTabs();
  },

  handleTabs: function() {
    const activeModifier = '--active';
    const containerClass = 'tabs';
    const panelClass = 'tabs__panel';
    const triggerClass = 'tabs__menu-button';
  
    const containers = document.querySelectorAll(`.${containerClass}`);
    const triggers = document.querySelectorAll(`.${triggerClass}`);
  
    function activateTrigger(trigger) {
      trigger.classList.add(`${triggerClass}${activeModifier}`);
    }
  
    function deActivateTrigger(trigger) {
      trigger.classList.remove(`${triggerClass}${activeModifier}`);
    }
  
    function activateTabPanel(panel) {
      panel.classList.add(`${panelClass}${activeModifier}`);
    }
  
    function deActivateTabPanel(panel) {
      panel.classList.remove(`${panelClass}${activeModifier}`);
    }
  
    function deActivateAllTabs(container) {
      const panels = container.querySelectorAll(`.${panelClass}`);
      const triggers = container.querySelectorAll(`.${triggerClass}`);
      if (triggers.length) {
        triggers.forEach(function (trigger) {
          deActivateTrigger(trigger);
        });
      }
      if (panels.length) {
        panels.forEach(function (panel) {
          deActivateTabPanel(panel);
        });
      }
    }
  
    function activateFirstTab() {
      if (containers.length) {
        containers.forEach(function (tabContainer) {
          const panel = tabContainer.querySelector(`.${panelClass}`);
          const trigger = tabContainer.querySelector(`.${triggerClass}`);
          if (panel && trigger) {
            activateTabPanel(panel);
            activateTrigger(trigger);
          }
        });
      }
    }
  
    function onClick() {
      const trigger = this;
      const container = this.parentNode.parentNode;
      const dataTarget = trigger.getAttribute("data-tab-trigger");
      if (dataTarget) {
        const panel = document.querySelector(`[data-tab-panel="${dataTarget}"]`);
        if (container && panel && trigger) {
          if (trigger.classList.contains(`${triggerClass}${activeModifier}`)) {
            deActivateTabPanel(panel);
            deActivateTrigger(trigger);
          } else {
            deActivateAllTabs(container);
            activateTabPanel(panel);
            activateTrigger(trigger);
          }
        }
      }
    }
  
    // Activate first tab on load
    activateFirstTab();
  
    // Handle the click event on triggers
    if (triggers.length) {
      triggers.forEach(function (trigger) {
        trigger.addEventListener('click', onClick);
      });
    }
  }
}

TABS.init();