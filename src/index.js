import cascadingStyleSheets from './style.js';
cascadingStyleSheets.add('../assets/reset.css');
cascadingStyleSheets.add('../assets/style.css');

import {landingPage, contactPage, menuPage} from './pages.js';


const parent = document.querySelector('div#content');

landingPage.render(parent);