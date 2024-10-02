let grid = document.querySelector(".paintBoxes");
for(let j=1;j<=16;j++){

    for(let i=0;i<16;i++){
        let box = document.createElement("div");
        console.log("Hi");
        grid.appendChild(box);
        grid.lastChild.classList.add('paintBox', `row_${j}`);
        grid.lastChild.textContent="hi";
    }
}