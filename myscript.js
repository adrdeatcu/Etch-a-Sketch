let container =  document.getElementById("container");
let popupButton = document.getElementById("popupButton")
let colorModeButton =document.getElementById("colorModeButton");
let divContainer = document.getElementById("container");
let colorMode = document.getElementById("colorMode");
let blackModeButton = document.getElementById("blackModeButton");

let currentMode = "black";
colorMode.textContent=`Current color mode: ${currentMode}`;


popupButton.addEventListener("click", enterGridSize);
colorModeButton.addEventListener("click", colorModeOn);
blackModeButton.addEventListener("click", blackModeOn);

function getRandomColor()
{
    let colorValues = [];
    for(i=0;i<=2;i++)
    {
        let randomValue=Math.floor(Math.random() * 256);
        colorValues[i]=randomValue;
    }
    let randomColor= `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}`;
    return randomColor;
}

function color(div)
{
    div.addEventListener("mouseenter", function(){
        if(currentMode=="black")
        {
            div.style.backgroundColor= "black";
        }else if(currentMode=="color"){
            div.style.backgroundColor= getRandomColor();
        }
    })
}


for(let i=1;i<=256;i++)
{
    let div=document.createElement("div");
    div.classList.add("square");
    color(div);
    container.appendChild(div);
}

function gridCreation(value)
{

    container.innerHTML="";
    for(let i=1;i<=value*value;i++)
    {
        let div=document.createElement("div");
        div.classList.add("square");
        div.style.flex=`0 0 ${100/value}%`;
        color(div);
        container.appendChild(div);
    }
    

}

function enterGridSize()
{
    let popupMessage= Number(prompt("Enter the grid size(max 64)"));
    while(popupMessage>=65)
    {
        popupMessage=Number(prompt("Enter the grid size(max 64)"));
    }
    gridCreation(popupMessage);
    
    
}

function colorModeOn()
{
    currentMode="color";
    colorMode.textContent=`Current color mode: ${currentMode}`;

}

function blackModeOn()
{
    currentMode="black";
    colorMode.textContent=`Current color mode: ${currentMode}`;
}



