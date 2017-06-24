/**
 * 
 * @param { String } text 
 * @param { String } backgroundColor 
 */
function addSection (text, backgroundColor) {
  var div = document.createElement('div')
  div.className = 'child'
  div.innerHTML = text

  if (!backgroundColor) {
    div.style.backgroundColor = '#000'
  } else {
    div.style.backgroundColor = backgroundColor
  }
  
  document.body.appendChild(div)
}

module.exports = addSection