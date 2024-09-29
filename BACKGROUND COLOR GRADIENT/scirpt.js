let button1=document.getElementById("button-1");
let button2=document.getElementById("button-2");
let copycode= document.querySelector(".copycode");

const getHexCode=()=>{
    let hexValues="0123456789abcdef";
    let colors="#";
    for(let i=0;i<6;i++)
        colors = colors + hexValues[Math.floor(Math.random()*16)];
        
    console.log(colors);
    return colors;
    
};
let rgb1= "#004773"
let rgb2= "#54d542"
const handleBuutton1=()=>{
     rgb1= getHexCode();
     button1.innerText=rgb1
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copycode.innerHTML=`backgound-image: linear-gradient(to right,${rgb1},${rgb2})`
};

const handleBuutton2=()=>{
     rgb2= getHexCode();
     button2.innerText=rgb2
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copycode.innerHTML=`backgound-image: linear-gradient(to right,${rgb1},${rgb2})`
};

button1.addEventListener("click",handleBuutton1);
button2.addEventListener("click",handleBuutton2);

copycode.addEventListener("click",()=>{
    navigator.clipboard.writeText(copycode.innerText);
    }
)