const pressedKey = document.getElementById('pressed-key');
const keyCode = document.getElementById('key-code');

const history = [];

document.addEventListener('keydown', (event) => {
    pressedKey.textContent = event.key;
    keyCode.textContent = event.keyCode;

    if (event.ctrlKey && (event.key === 'c' || event.key === 'C')) {
        alert('Ctrl + C Pressed');
    }
    if (event.ctrlKey && (event.key === 'z' || event.key === 'Z')) {
        alert('Ctrl + Z Pressed');
    }
     
     
});