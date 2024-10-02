let grid = document.querySelector(".paintBoxes");
let colors = ["#a83e32","#e3b600","#ebb400","#7bc406","#14f00c","#38f5c6","#38f5c6","#140054","#c51bd1","#ff0835","#ff0808"]
let count=1;
let gridsize=16;
let rainbowModeFlag=0;
let colorModeFlag=0;
let eraserModeFlag=0;
let selectedColor="#000000";
let darkenOpacity=0.1;
let darkenCount=0;
let darkenModeFlag=0;
let gridwidth=700;
let width=Math.floor(gridwidth/gridsize);

let eraser =document.querySelector("#eraser");
eraser.addEventListener("click",()=>{
    eraserModeFlag=1;
    rainbowModeFlag=0;
    colorModeFlag=0;
    darkenModeFlag=0;
})

let rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click",(e)=>{
    colorModeFlag=0;
    eraserModeFlag=0;
    rainbowModeFlag=1;
    darkenModeFlag=0;
})

let colorPicker = document.querySelector("#favcolor");
let colorButton = document.querySelector("#colorButton");
colorButton.addEventListener("click",()=>{
    rainbowModeFlag=0;
    eraserModeFlag=0;
    colorModeFlag=1;
    darkenModeFlag=0;
})
colorPicker.addEventListener("input",(e)=>{
    rainbowModeFlag=0;
    eraserModeFlag=0;
    colorModeFlag=1;
    selectedColor=e.target.value;
    darkenModeFlag=0;
});

let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".paintBox");
    boxes.forEach(box => {
        box.style.backgroundColor = "#ffffff";
    });
});

let darken=document.querySelector("#darken");
darken.addEventListener("click",()=>{
    eraserModeFlag=0;
    colorModeFlag=0;
    rainbowModeFlag=0;
    darkenModeFlag=1;
    darkenOpacity=0.1;
    darkenCount=0;
})

let gridButton = document.querySelector("#grid");
gridButton.addEventListener("click",()=>{
    gridsize = prompt("Enter new Gridsize: ");
    while(gridsize>=100){
        gridsize = prompt("Please enter a gridsize<100: ");
    }
    width=Math.floor(gridwidth/gridsize);
    createGrid(gridsize);
    count=1;
})

function createGrid(gridsize){
    grid.innerHTML="";
    for(let j=1;j<=gridsize;j++){
    let newRow = document.createElement("div");
    newRow.classList.add(`row_${j}`);
    newRow.style.cssText="display:flex;";
    grid.appendChild(newRow);    
    for(let i=0;i<gridsize;i++){
        let rowSelector = document.querySelector(`.row_${j}`);
        let box = document.createElement("div");
        rowSelector.appendChild(box);
        rowSelector.lastChild.classList.add('paintBox');
        rowSelector.lastChild.id=`box_${count}`
        count++;
        rowSelector.lastChild.style.cssText = `
        width: ${width}px; 
        height: ${width}px; 
        border:solid 1px black;
        `   
        let random_color = colors[Math.floor(Math.random() * colors.length)];
        rowSelector.lastChild.addEventListener("mouseover",(e)=>{
            let row = document.querySelector(`#${e.target.id}`)
            if(rainbowModeFlag==1){
                row.style.backgroundColor= random_color;
                row.style.opacity=1;
            }
            else if(colorModeFlag==1){
                row.style.backgroundColor= selectedColor;
                row.style.opacity=1;
            }
            else if(eraserModeFlag==1){
                row.style.backgroundColor= "#ffffff";
                row.style.opacity=1;
            }
            else if(darkenModeFlag==1){
                console.log("inside darkenflag");
                if(darkenCount<10){
                    console.log("inside darkenCount If");
                    row.style.backgroundColor=selectedColor;
                    row.style.opacity=parseFloat(darkenOpacity);
                    darkenOpacity+=0.1;
                    darkenCount++;
                }
                else {
                    row.style.backgroundColor=selectedColor;
                    row.style.opacity=1;
                }
            }
        })
    }
    }
}

createGrid(gridsize);
