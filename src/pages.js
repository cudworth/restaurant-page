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
        home_link.addEventListener('click', () => homePage.render(content_container));


        const menu_link = _createElement(nav_bar, 'a', {class: 'navlink'});
        menu_link.textContent = 'Menu';
        menu_link.addEventListener('click', () => menuPage.render(content_container));

        const contact_link = _createElement(nav_bar, 'a', {class: 'navlink'});
        contact_link.textContent = 'Contact';
        contact_link.addEventListener('click', () => contactPage.render(content_container));

        const content_container = _createElement(root, 'div', {id:'container'});

        return content_container;
    };
    return {render};
})();

const homePage = (function(){
    const render = function(parent){
        parent.innerHTML = '';
        const txt = _createElement(parent, 'p', {class:'about'});
        txt.textContent = lorem+lorem+lorem+lorem+lorem+lorem;
    };
    return {render};
})();


const contactPage = (function(){
    const render = function(parent){
        parent.innerHTML = '';

        const contact = [
            'The Fig Leaf Cafe',
            '1 Main Street, Seattle, WA',
            '867-5309',
            'johndoe@figleafcafe.com',
        ];

        contact.forEach((line) => _createElement(parent,'p',{class:'contactinfo'}).textContent = line);

    };
    return {render};
})();


const menuPage = (function(){
    const render = function(parent){
        parent.innerHTML = '';
        const cheezewhiz = _menuItem('Cheese Platter', 'Generous portion of mozarella cheese slices with a side spread of CheezeWiz', '$3.50');
        const spaghettios = _menuItem('')
        const breakfastcereal = _menuItem('Breakfast Option', 'A freshly poured bowl of Fruit Loops with whole milk made from happy cows in Wisconsin', '$4.95');
        const pulledpork = _menuItem('BBQ Platter','3-1/2lbs of protein-free pulled pork with a side of lentil fries','$22.00');
        cheezewhiz.render(parent);
        spaghettios.render(parent);
        breakfastcereal.render(parent);
        pulledpork.render(parent);
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


const _menuItem = function(name, desc, price){

    const render = function(parent){
        const menu_item = _createElement(parent, 'div', {class:'menuitem'});
        _createElement(menu_item, 'h1',{}).textContent = name;
        _createElement(menu_item, 'p',{}).textContent = desc;
        _createElement(menu_item, 'p',{}).textContent = price;
    }
    return {render}
}


export {
    template,
    homePage,
    contactPage,
    menuPage,
};
