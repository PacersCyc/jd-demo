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
module.exports = FreshTime
// FreshTime();
var sh;
sh=setInterval(FreshTime,500);