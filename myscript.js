let container =  document.getElementById("container");
let popupButton = document.getElementById("popupButton")

popupButton.addEventListener("click", enterGridSize);

for(let i=1;i<=256;i++)
{
    let div=document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseenter", function(){
        div.style.backgroundColor = "black";
    })
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
        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }
    

}

function enterGridSize()
{
    let popupMessage= Number(prompt("Enter the grid size(max 64)"));
    if(popupMessage>=65)
    {
        popupMessage=Number(prompt("Enter the grid size(max 64)"));
    }
    gridCreation(popupMessage);
    
    
}

