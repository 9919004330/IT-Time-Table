var mySong=document.getElementById("mySong");
var icon=document.getElementById("icon");
var pclass=document.querySelector('.p_class')
var v=document.querySelector('.v');
var rv=document.querySelector('.rv');
var s_selection=document.querySelector('.s_selection');
var song1=document.querySelector('.song1');
var song2=document.querySelector('.song2');
var song3=document.querySelector('.song3');
var song4=document.querySelector('.song4');
var allSongs=document.querySelectorAll('.song');
var sp1= document.querySelector('.sp1');
var sp2= document.querySelector('.sp2');
var sp3= document.querySelector('.sp3');
var sp4= document.querySelector('.sp4');
var allSp= document.querySelectorAll('.sp');

function pausing() {
    for (i=0;i<4;i++){
        allSongs[i].pause();
    }
}

function cuttinganimi() {
    for (i=0;i<4;i++){
        allSp[i].classList.remove('sstyle');
    }
}

var songIs=false;

var singerone=true;

sp1.addEventListener('click',function(){
    if(singerone){
        pausing();
        song1.play();
        cuttinganimi()
        sp1.classList.add('sstyle')
        singerone=false;
    }
    else{
        song1.pause();
        song1.currentTime = 0;
        singerone=true;
        sp1.classList.remove('sstyle')
    }
})

var singertwo=true;
sp2.addEventListener('click',function(){
    if(singertwo){
        pausing();
        song2.play();
        cuttinganimi();
        sp2.classList.add('sstyle');
        singertwo=false
    }
    else{
        song2.pause();
        song2.currentTime = 0;
        singertwo=true;
        sp2.classList.remove('sstyle')
    }
})

var singerthree=true;
sp3.addEventListener('click',function(){
    if(singerthree){
        pausing();
        song3.play();
        cuttinganimi()
        sp3.classList.add('sstyle')
        singerthree=false
    }
    else{
        song3.pause();
        song3.currentTime = 0;
        singerthree=true;
        sp3.classList.remove('sstyle')
    }
})

var singerfour=true;
sp4.addEventListener('click',function(){
    if(singerfour){
        pausing();
        song4.play();
        cuttinganimi()
        sp4.classList.add('sstyle')
        singerfour=false
    }
    else{
        song4.pause();
        song4.currentTime = 0;
        singerfour=true;
        sp4.classList.remove('sstyle')
    }
})



v.onclick=function(){
    s_selection.style.display='inherit';
    v.style.display='none';
    mySong.pause();
    icon.src="./play.png";
}
rv.onclick=function(){
    s_selection.style.display='none';
    v.style.display='inherit';
}

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
    }
    if(day==1 && hr>=01  && noon=='PM' ){
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
    }


    // day wed

    if(day==3 && hr>=08 && noon=='AM'){
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
    if(day==3 && hr>=01 && noon=='PM'){
        pclass.textContent='INT18R453'
    }
    if(day==3 && hr>=03 && noon=='PM'){
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
    if(day==4 && hr>=01 && noon=='PM'){
        pclass.textContent='INT18R272'
        pclass.onclick=()=>window.open(data.C272)
    }

    // day fri

    if(day==5 && hr>=08){
        pclass.textContent='INT18R453'

    }

    if(day==5 && hr>=10){
        pclass.textContent='INT18R272'
        pclass.onclick=()=>window.open(data.C272)
    }

    if(day==5 && hr>=01 && noon=='PM'  ){
        pclass.textContent='CSE18R371'
        pclass.onclick=()=>window.open(data.C371)
    }
    if(day==5 && hr>=02 && noon=='PM' ){
        pclass.textContent='INT18R452'
        pclass.onclick=()=>window.open(data.C452)
    }




    clock.textContent=hr+ ':'+min+':'+sec+ ' '+noon
})
