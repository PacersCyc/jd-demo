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