var fc=document.getElementById('firstcity'),
    sn=document.getElementById('second-nav'),
    myjd=document.getElementById('myjd'),
    myjdHide=document.getElementById('myjd-hide'),
    cwIcon=document.getElementById('cw-icon'),
    cwDetails=document.getElementById('cw-details');



// fc.onmouseover = function(){
//   sn.style.display='block';
// }

// fc.onmouseover = function () {
//   alert(111)
// }
fc.addEventListener('mouseenter', function () {
  sn.style.display='block';
})
fc.addEventListener('mouseleave',function(){
  sn.style.display='none';
})
myjd.addEventListener('mouseenter',function(){
  myjdHide.style.display='block';
})
myjd.addEventListener('mouseleave',function(){
  myjdHide.style.display='none';
})
cwIcon.addEventListener('mouseenter',function(){
  cwDetails.style.display='block';
})
cwIcon.addEventListener('mouseleave',function(){
  cwDetails.style.display='none';
})