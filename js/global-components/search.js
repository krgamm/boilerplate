const SEARCH = {
  init: function() {
    this.handleSearchToggle();
    this.submitSearch();
  },

  // toggle search
  handleSearchToggle: function() {
    const activeModifier = '--active';
    const panelClass = 'search-panel';
    const triggerClass = 'search-trigger';
    const dismissClass = 'search-panel__dismiss'
    const inputClass = 'search-panel__input';
  
    const panel = document.querySelector(`.${panelClass}`);
    const trigger = document.querySelector(`.${triggerClass}`);
    const dismiss = document.querySelector(`.${dismissClass}`);
    const input = document.querySelector(`.${inputClass}`);
  
    function openSearch() {
      panel.classList.add(`${panelClass}${activeModifier}`);
      trigger.classList.add(`${triggerClass}${activeModifier}`);
      input.focus();
    }
  
    function closeSearch() {
      panel.classList.remove(`${panelClass}${activeModifier}`);
      trigger.classList.remove(`${triggerClass}${activeModifier}`);
    }
  
    function onClick() {
      (trigger.classList.contains(`${triggerClass}${activeModifier}`))
        ? closeSearch()
        : openSearch();
    }
  
    if (panel && trigger) {
      trigger.addEventListener('click', onClick);
    }

    if (dismiss) {
      dismiss.addEventListener('click', closeSearch);
    }
  },

  // submit search
  submitSearch: function() {
    const inputClass = 'search-panel__input';

    const buttons = document.querySelectorAll('.search-panel__button');
    const inputs = document.querySelectorAll(`.${inputClass}`);
  
    function handleSubmit(input) {
      window.location.href = `/SearchResults.aspx?s=${input.value}`;
    }
  
    function handleClick(e) {
      e.preventDefault();
      const input = this.parentNode.querySelector(`.${inputClass}`);
      handleSubmit(input);
    }
  
    function handleKeydown(e) {
      if (e.which == 13) {
        e.preventDefault();
        const input = this;
        handleSubmit(input);
      }
    }
  
    if (buttons.length) {
      buttons.forEach(function (button) {
        button.addEventListener('click', handleClick);
      });
    }
  
    if (inputs.length) {
      inputs.forEach(function (input) {
        input.addEventListener('keydown', handleKeydown);
      });
    }
  }

}

SEARCH.init();