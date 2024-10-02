let grid = document.querySelector(".paintBoxes");
let colors = ["#a83e32","#e3b600","#ebb400","#7bc406","#14f00c","#38f5c6","#38f5c6","#140054","#c51bd1","#ff0835","#ff0808"]
let count=1;

for(let j=1;j<=16;j++){
    let newRow = document.createElement("div");
    newRow.classList.add(`row_${j}`);
    newRow.style.cssText="display:flex;";
    grid.appendChild(newRow);    
    for(let i=0;i<16;i++){
        let rowSelector = document.querySelector(`.row_${j}`);
        let box = document.createElement("div");
        rowSelector.appendChild(box);
        rowSelector.lastChild.classList.add('paintBox');
        rowSelector.lastChild.id=`box_${count}`
        count++;
        rowSelector.lastChild.style.cssText = `
        width: 30px; 
        height: 30px; 
        `;
        let random_color = colors[Math.floor(Math.random() * colors.length)];
        rowSelector.lastChild.addEventListener("click",(e)=>{
            let row = document.querySelector(`#${e.target.id}`)
            row.style.backgroundColor= random_color;
        })
    }
}


grid.style.cssText = "width:auto; height: auto;";