var fc=document.getElementById('firstcity'),
    sn=document.getElementById('second-nav'),
    myjd=document.getElementById('myjd'),
    myjdHide=document.getElementById('myjd-details'),
    cwIcon=document.getElementById('cw-icon'),
    cwDetails=document.getElementById('cw-details');



// fc.onmouseover = function(){
//   sn.style.display='block';
// }

// fc.onmouseover = function () {
//   alert(111)
// }

hover(fc, show(sn), hide(sn))
hover(myjd, show(myjdHide), hide(myjdHide))
hover(cwIcon, show(cwDetails), hide(cwDetails))

// fc.addEventListener('mouseenter', function () {
//   sn.style.display='block';
// })
// fc.addEventListener('mouseleave',function(){
//   sn.style.display='none';
// })
// myjd.addEventListener('mouseenter',function(){
//   myjdHide.style.display='block';
// })
// myjd.addEventListener('mouseleave',function(){
//   myjdHide.style.display='none';
// })
// cwIcon.addEventListener('mouseenter',function(){
//   cwDetails.style.display='block';
// })
// cwIcon.addEventListener('mouseleave',function(){
//   cwDetails.style.display='none';
// })

/**
 * hover  
 * @param { 需要绑定hover函数的元素 } el 
 * @param { 鼠标移入的函数 } enter 
 * @param { 鼠标移出的函数 } leave 
 */
function hover (el, enter, leave) {
  el.addEventListener('mouseenter', enter)
  el.addEventListener('mouseleave', leave)
}

/**
 * 展示元素
 * @param {*} el 
 */

function show (el) {
  return function () {
    el.style.display = 'block'
  }
}

function hide (el) {
  return function () {
    el.style.display = 'none'
  }
}