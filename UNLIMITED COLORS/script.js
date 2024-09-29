//generate the random hex color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;
const startChangingColor=function(){
    if(!intervalId){ //good practice
        intervalId=setInterval(changeRGBColor,1000);
    }
    function changeRGBColor(){
        document.body.style.backgroundColor=randomColor(); //as it is needed only here, so defined here
    }
};
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null //good practice
};

document.querySelector("#start")
        .addEventListener('click',startChangingColor);

document.querySelector("#stop")
        .addEventListener('click',stopChangingColor);
