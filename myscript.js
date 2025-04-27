let container =  document.getElementById("container");

for(let i=1;i<=256;i++)
{
    let div=document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseenter", function(){
        div.style.backgroundColor = "black";
    })
    container.appendChild(div);
}


