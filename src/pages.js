const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const template = (function(){
    const render = function(parent){
        const root = _createElement(parent, 'div', {id:'root'})

        const banner_img = _createElement(root, 'img', {id:'banner_img', src:'../assets/banner.png'});

        const header = _createElement(root, 'div',{id:'header'});

        const title = _createElement(header, 'div', {class: 'title'});
        title.textContent = 'The Fig Leaf Cafe';
      
        const icon = _createElement(header, 'img', {class:'icon', src:'../assets/noun_fig_1510215.svg'});

        const nav_bar = _createElement(header, 'nav', {id:'navbar'});

        const home_link = _createElement(nav_bar, 'a', {class: 'navlink'});
        home_link.textContent = 'Home';

        const menu_link = _createElement(nav_bar, 'a', {class: 'navlink'});
        menu_link.textContent = 'Menu';

        const contact_link = _createElement(nav_bar, 'a', {class: 'navlink'});
        contact_link.textContent = 'Contact';


        const content_container = _createElement(root, 'div', {id:'container'});

        return content_container;
    };
    return {render};
})();

const homePage = (function(){
    const render = function(parent){

        const txt = _createElement(parent, 'div', {class:'mytextbox', id:'homepage'});
        txt.textContent = lorem;

    };
    return {render};
})();


const contactPage = (function(){
    const render = function(parent){
        const contact = {
            Name: 'John Doe',
            Address: '1 Main Street, Seattle, WA',
            Phone: '867-5309',
            Email: 'johndoe@figleafcafe.com',
        };

    };
    return {render};
})();


const menuPage = (function(){
    const render = function(parent){

    };
    return {render};
})();

const _createElement = function(parent, type, attrs){
    const child = document.createElement(type);
    parent.append(child)
    Object.keys(attrs).forEach(key => {
        child.setAttribute(key.toString(), attrs[key])
    });
    return child;
}


export {
    template,
    homePage,
    contactPage,
    menuPage
};
