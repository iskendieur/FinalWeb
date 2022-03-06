
function playMp() { 
  var audio = new Audio('audio/soundfx.mp3'); 
  audio.play(); 
}

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

const openPopUp= document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp= document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
                           e.preventDefault();
popUp.classList.add('active')})
                           closePopUp.addEventListener('click', () => {
                               popUp.classList.remove('active');
                           })

