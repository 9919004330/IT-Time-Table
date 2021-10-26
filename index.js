var mySong=document.getElementById("mySong");
var icon=document.getElementById("icon");
var pclass=document.querySelector('.p_class')


icon.onclick=function(){
    if(mySong.paused){
        mySong.play();
        icon.src="./pause.png";
    }else{
        mySong.pause();
        icon.src="./play.png";
    }
}

setInterval(function main(){
    var clock=document.querySelector('.clock')
    var time=new Date();
    var day=time.getDay();
    var hr=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();

    var noon='AM'
    if (hr>12){
        noon='PM'
        hr=hr-12
    }
    if(hr==0){
        hr=12;
    }
    if(hr<10){
        hr='0'+hr
    }
    if(min<10){
        min='0'+min
    }
    if(sec<10){
        sec='0'+sec
    }

    // day mon
    if(day==1 && hr>=08 && noon=='AM' ){
        pclass.textContent='CSE18R371'
        pclass.onclick=()=>window.open(data.C371)
    }
    if(day==1 && hr>=11 ){
        pclass.textContent='INT18R453'
        pclass.onclick=()=>window.open(data.C453)
    }
    if(day==1 && hr>=01 ){
        pclass.textContent='CSE18R371'
        pclass.onclick=()=>window.open(data.C371)
    }        



    // day tue

    if(day==2 && hr>=08 && noon=='AM' ){
        pclass.textContent='INT18R452'
        pclass.onclick=()=>window.open(data.C452)
    }
    if(day==2 && hr>=10 ){
        pclass.textContent='MEC18R449'
        pclass.onclick=()=>window.open(data.C449)
    }
    if(day==2 && hr>=01 &&  noon=='PM' ){
        pclass.textContent='INT18R453'
        pclass.onclick=()=>window.open(data.C453)
    }


    // day wed

    if(day==3 && hr>=08 && noon=='AM' ){
        pclass.textContent='CSE18R371'
        pclass.onclick=()=>window.open(data.C371)
    }
    if(day==3 && hr>=09 && min>50 ){
        pclass.textContent='INT18R452'
        pclass.onclick=()=>window.open(data.C452)
    }
    if(day==3 && hr>=10 ){
        pclass.textContent='INT18R452'
        pclass.onclick=()=>window.open(data.C452)
    }
    if(day==3 && hr>=11){
        pclass.textContent='CSE18R371'
        pclass.onclick=()=>window.open(data.C371)
    }
    if(day==3 && hr>=01){
        pclass.textContent='INT18R453'
        pclass.onclick=()=>window.open(data.C371)
    }
    if(day==3 && hr>=01){
        pclass.textContent='INT18R453'
        pclass.onclick=()=>window.open(data.C371)
    }
    if(day==3 && hr>=03){
        pclass.textContent='INT18R453'
        pclass.onclick=()=>window.open(data.C371)
    }

    // day thu

    if(day==4 && hr>=08 && noon=='AM' ){
        pclass.textContent='INT18R452'
        pclass.onclick=()=>window.open(data.C452)
    }
    
    if(day==4 && hr>=09 && min>50 ){
        pclass.textContent='INT18R272'
        pclass.onclick=()=>window.open(data.C272)
    }
    if(day==4 && hr>=10){
        pclass.textContent='INT18R272'
        pclass.onclick=()=>window.open(data.C272)
    }
    if(day==4 && hr>=10 && min>45){
        pclass.textContent='MEC18R449'
        pclass.onclick=()=>window.open(data.C449)
    }
    if(day==4 && hr>=11){
        pclass.textContent='MEC18R449'
        pclass.onclick=()=>window.open(data.C449)
    }
    if(day==4 && hr>=01){
        pclass.textContent='INT18R272'
        pclass.onclick=()=>window.open(data.C272)
    }

    // day fri

    if(day==5 && hr>=08){
        pclass.textContent='INT18R453'
        pclass.onclick=()=>window.open(data.C453)
    }

    if(day==5 && hr>=10){
        pclass.textContent='INT18R272'
        pclass.onclick=()=>window.open(data.C272)
    }

    if(day==5 && hr>=01 ){
        pclass.textContent='CSE18R371'
        pclass.onclick=()=>window.open(data.C371)
    }
    if(day==5 && hr>=02 ){
        pclass.textContent='INT18R452'
        pclass.onclick=()=>window.open(data.C452)
    }




    clock.textContent=hr+ ':'+min+':'+sec+ ' '+noon
})
