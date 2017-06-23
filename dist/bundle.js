/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var show=__webpack_require__(1)
var craousel=__webpack_require__(2)
var cd=__webpack_require__(3) 


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*轮播图部分*/
 var datas=[
   {imgSrc:"https://img14.360buyimg.com/da/jfs/t6514/57/994670127/93125/8cc2ac60/59489141Nc1371577.jpg",targetSrc:"https://sale.jd.com/act/bRpVoEakNHSL3.html?cpdad=1DLSUE"},
   {imgSrc:"https://img12.360buyimg.com/da/jfs/t5182/69/462910155/142359/66551a05/58ffffd8N892ce4a8.jpg",targetSrc:"https://b.jd.com/?cpdad=1DLSUE"},
   {imgSrc:"https://img1.360buyimg.com/da/jfs/t6610/335/974053984/95494/dde12c9/59489cdcNd2b08eab.jpg",targetSrc:"https://sale.jd.com/act/iklG3xhS1LRcQqNJ.html?cpdad=1DLSUE"},
   {imgSrc:"https://img14.360buyimg.com/da/jfs/t6241/21/1117010927/79787/80aa18f7/594b4a05Nf22b6a69.jpg",targetSrc:"https://sale.jd.com/act/En5eVSGc2sY.html?cpdad=1DLSUE"},
   {imgSrc:"https://img20.360buyimg.com/da/jfs/t4249/102/1331521120/224199/40dcb547/58c0b221N5acfd3c6.jpg",targetSrc:"https://sale.jd.com/act/jPbZs6QhNV.html?cpdad=1DLSUE"},
   {imgSrc:"https://img20.360buyimg.com/da/jfs/t6238/225/1004241398/246780/78f40ead/5948939cNd071ad5b.jpg",targetSrc:"https://sale.jd.com/act/MilSjr34UQRJgL.html?cpdad=1DLSUE"},
   {imgSrc:"https://img30.360buyimg.com/da/jfs/t5737/359/4107602500/106897/df76ef3/5947615eN83c325f6.jpg",targetSrc:"https://sale.jd.com/act/71ISHzodWKqB.html?cpdad=1DLSUE"},
   {imgSrc:"https://m.360buyimg.com/babel/jfs/t5731/277/4248688555/126193/309e92cf/5949e5f1Nc59e87dd.jpg",targetSrc:"https://sale.jd.com/act/MNoUAr4uzJBYlCy.html"}
 ];
 var lists=document.getElementById('slide-lists');
 var dots=document.getElementById('dots').getElementsByTagName('i');

 for(var i=0,len=datas.length;i<len;i++){
   var li=document.createElement('li');
   if(i==0){
     li.style.display='block';
     dots[i].className='active';
   }else{
     li.style.display='none';
     dots[i].className='';
   }
   li.innerHTML='<a href="'+datas[i].targetSrc+'">'+'<img src="'+datas[i].imgSrc+'">'+'</a>';
   lists.appendChild(li);
 }

 var main=document.getElementById('slide-main');
 var imgs=lists.getElementsByTagName('li');
 var index=0;
 for(var i=0;i<dots.length;i++){
   dots[i].index=i;
   dots[i].onmouseenter=function(){
     index=this.index;
     for(j=0;j<dots.length;j++){
       dots[j].className='';
       imgs[j].style.display='none';
     }
     this.className='active';
     imgs[this.index].style.display='block';
   }
 }

 var timer=null;
 function autoPlay(){
   timer=setInterval(function(){
     index++;
     if(index>=dots.length){
       index=0;
     }else{
      dots[index].onmouseenter();
     }
   },1000)
 }
 autoPlay();
main.onmouseenter=function(){
  clearInterval(timer);
}
main.onmouseleave=function(){
  autoPlay();
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

//商城限时购倒计时
function FreshTime(){
	var endtime=new Date("2017/6/26,12:00:00"),
		nowtime=new Date(),
		lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000),
		//d=parseInt(lefttime/(60*60*24)),
		h=parseInt(lefttime/(60*60)),
		m=parseInt((lefttime/60)%60),
		//console.log(m);
		s=parseInt(lefttime%60);
		hours=document.getElementById('hours'),
		minutes=document.getElementById('minutes'),
		seconds=document.getElementById('seconds'),
		settime=document.getElementById('settime');
	if(h<10){
		hours.innerHTML="0"+h;
	}else{
		hours.innerHTML=h;
	}
	if(m<10){
		minutes.innerHTML="0"+m;
	}else{
		minutes.innerHTML=m;
	}
	if(s<10){
		seconds.innerHTML="0"+s;
	}else{
		seconds.innerHTML=s;
	}
	if(lefttime<=0){
		settime.innerHTML="活动已结束";
		clearInterval(sh);
	}
}
FreshTime();
var sh;
sh=setInterval(FreshTime,500);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map