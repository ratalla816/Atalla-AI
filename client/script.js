import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('chat-container');

// create the loading animation \\
let loadInterval; 

function loader(element) {
  element.textContent = '';
  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)
  
}

// Atalla AI types response one letter a time so it looks cool \\
function typeText(element, text) {
  let index = 0; 
  let interval = setInterval(() => {

    if(index < text.length) {
      element.innerHTML += text.charAt(index); 
      index++;
    
    } else {
      clearInterval(interval);
    }
  }, 20)
}

// create a unique ID for each response so it can be mapped over \\
function generateUniqueID() {
  const timestamp = Date.now();
  const randomNumber = Math.random(); 
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`; 
}
