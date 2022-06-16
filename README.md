# Speak Elements: Starter Files for Sitewrench Websites

---

## The Front-end Details

### Favicons
* Favicons can be created and added as documented here - https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df

### Template Files
* Templates are written using Liquid syntax and include global components from the /templates/includes/global-components folder.
* By default templates include markup using flex-col classes (the 12-column responsive flex layout), but you may modify or replace with alternatives such as CSS grid as necessary.

### Partial files
* Liquid partials in /templates/includes are organized into global and reusable components. Template use global components, whereas reusable components are for matrices (this is for convention's sake).

### Fonts
* The fonts in this starter kit are Google Fonts—Montserrat and Source Serif. They are imported in /templates/includes/global-components/_head.liquid and can be changed there. You'll need to update /css/abtrasts/_variables.scss to the correct font families.

### CSS
* CSS should be minified and bundled, going from /css/master.scss to /css/master.css
* The site's colors and other sitewide variables are defined in /css/abstracts/_variables.scss
* Initial font sizes are setup using clamp, but feel free to modify if static values are more appropriate. Here's a good place to go to learn more - https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/ To get the preferred value, this is a super helpful tool - https://royalfig.github.io/fluid-typography-calculator/

### JS
* There are two main JS files that are loaded by default, global.js and dynamic.js
    * global.js imports sitewide modules and should be bundled and minified to /js/min/global-min.js
    * dynamic.js uses conditional dynamic imports to only include scripts when necessary and therefore should NOT be bundled, but does look for minified versions or modules in the /js/min folder.
* Some third party resources may come from npm, so be sure to run 'npm install' when first cloning a repo.

## The Build Process

### Getting Started
* Use these files as a starting point; additions, subtractions, and modifications are expected. The goal is merely to provide a good framework with commonly used tools from the onset.

### Want to Remove a Component, or Start From Scratch?
* Remove (or comment out) anything you don't want to include from /css/master.scss and /js/global.js and /js/dynamic.js

### Third Party Resources
* Tiny Slider is included in the starter files because of its common use, but others may be added as required by the project.