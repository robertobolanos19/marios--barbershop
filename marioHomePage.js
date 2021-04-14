const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

const closeContactMenu = document.querySelector('#closeContactMenu');

const closeHomeMenu = document.querySelector('#closeHomeMenu');

const closeServicesMenu = document.querySelector('#closeServicesMenu');

const closeAboutMenu = document.querySelector('#closeAboutMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
closeContactMenu.addEventListener('click', close);
closeHomeMenu.addEventListener('click', close);
closeServicesMenu.addEventListener('click', close);
closeAboutMenu.addEventListener('click', close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}




