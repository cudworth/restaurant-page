import cascadingStyleSheets from './style.js';
cascadingStyleSheets.add('../assets/reset.css');
cascadingStyleSheets.add('../assets/style.css');

import {template, homePage, contactPage, menuPage} from './pages.js';

const container = template.render(document.body);
homePage.render(container);