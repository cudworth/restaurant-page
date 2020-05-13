import cascadingStyleSheets from './style.js';
cascadingStyleSheets.add('../assets/reset.css');
cascadingStyleSheets.add('../assets/style.css');




const parent = document.querySelector('div#content');

parent.textContent = 'Hello world';

