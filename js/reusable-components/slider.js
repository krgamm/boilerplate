import { tns } from "tiny-slider";

const SLIDER = {
  init: function() {
    this.initSlider();
  },

  initSlider: function() {
    const sliderClass = "slider__wrap";
    const navClass = "slider__nav";
    const sliderEl = document.querySelector(`.${sliderClass}`);
  
    // Initialize Slider
    if (sliderEl) {
      tns({
        autoplay: true,
        autoplayButtonOutput: false,
        container: `.${sliderClass}`,
        controls: false,
        nav: true,
        navContainer: `.${navClass}`
      });
    }
  }
}

SLIDER.init();