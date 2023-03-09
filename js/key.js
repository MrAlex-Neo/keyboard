function addSymbol() {
  let btn = event.target
  let sym = btn.innerHTML
  let userText = document.getElementById('userText')
  userText.innerHTML += sym
}
function shifT() {
  let btn = event.target
  let sym = btn.innerHTML
  let userText = document.getElementById('userText')
  userText.innerHTML += sym.toUpperCase()
}

function shift() {
  let btn = event.target
  let sym = '';
  let userText = document.getElementById('userText')
  userText.innerHTML += sym += keys.forEach( btn => {
    btn.addEventListener('click', shifT)
  })
}

function clear() {
  let btnClear = event.target
  let userText = document.getElementById('userText')
  btnClear = userText.innerHTML.slice(0, -1) //replace(/.$/, '')
  userText.innerHTML = btnClear
}
function space() {
  let space = ' ';
  let userText = document.getElementById('userText')
  userText.innerHTML += space
}



let keys = document.querySelectorAll('.keyboard .but')
let keyClear = document.querySelectorAll('.keyboard .clear')
let userText = document.getElementById('userText')
let keySpace = document.querySelectorAll('.keyboard .space')
let keyShift = document.querySelectorAll('.keyboard .shift')



keys.forEach( btn => {
  btn.addEventListener('click', addSymbol)
})
keyClear.forEach( btnClear => {
  btnClear.addEventListener('click', clear)
})
keySpace.forEach( btnClear => {
  btnClear.addEventListener('click', space)
})
keyShift.forEach( btnClear => {
btnClear.addEventListener('click', shift)
})

let isCapsLockOn = document.getElementById('capslock').addEventListener('click', function() {
  isCapsLockOn = !isCapsLockOn;
  keys.forEach(function(key) {
      let keyText = key.textContent;
      if (isCapsLockOn) {
          key.textContent = keyText.toUpperCase();
      } else {
          key.textContent = keyText.toLowerCase();
      }
  });
});

// let shiftOn = document.getElementById('shift').addEventListener('click', function() {
//   keys.forEach(function(key) {
//       let keyText = key.textContent;
//       key.textContent = keyText.toUpperCase();
//   });
// },);
