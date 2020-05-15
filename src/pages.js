const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const landingPage = (function(){
    const render = function(parent){

        const nav_bar = _createElement(parent, 'nav', {class:'navbar'});

        const main_link = _createElement(nav_bar, 'a', {});
        main_link.textContent = 'Main';

        const menu_link = _createElement(nav_bar, 'a', {});
        menu_link.textContent = 'Menu';

        const contact_link = _createElement(nav_bar, 'a', {});
        contact_link.textContent = 'Contact us';


        const banner_img = _createElement(parent, 'img', {class:'banner', src:'../assets/banner.png'});
        
        const header = _createElement(parent, 'div', {class: 'title'})
        header.textContent = 'The Fig Leaf Cafe';

        const txt = _createElement(parent, 'div', {class:'mytextbox', id:'a420'});
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
    landingPage,
    contactPage,
    menuPage
};
