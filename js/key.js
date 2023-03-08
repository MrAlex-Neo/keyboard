function addSymbol() {
  let btn = event.target
  let sym = btn.innerHTML
  let userText = document.getElementById('userText')
  userText.innerHTML += sym 
}
function clear() {
  let btnClear = event.target
  let userText = document.getElementById('userText')
  btnClear = userText.innerHTML.slice(0, -1) //replace(/.$/, '')
  userText.innerHTML = btnClear
}

let keys = document.querySelectorAll('.keyboard .but')
let keyClear = document.querySelectorAll('.keyboard .clear')
let userText = document.getElementById('userText')

keys.forEach( btn => {
  btn.addEventListener('click', addSymbol)
})
keyClear.forEach( btnClear => {
  btnClear.addEventListener('click', clear)
})

let isCapsLockOn = false;
document.getElementById('capslock').addEventListener('click', function() {
  isCapsLockOn = !isCapsLockOn;
  let keys = document.querySelectorAll('.but');
  keys.forEach(function(key) {
      
      let keyText = key.textContent;
      if (isCapsLockOn) {
          key.textContent = keyText.toUpperCase();
      } else {
          key.textContent = keyText.toLowerCase();
      }
  });
});

