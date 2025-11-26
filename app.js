const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.append(container);
const grid = document.createElement("div");
grid.classList.add("grid");
container.append(grid);
const form = document.createElement("form");
form.classList.add("input-form");
container.append(form);
const label = document.createElement("label");
label.classList.add("input-label");
label.textContent = "Enter a number from 1 - 100 to generate a sketch area:";
form.append(label);
const input = document.createElement("input");
input.classList.add("input-box");
form.append(input);
const submit = document.createElement("button");
submit.classList.add("input-submit");
submit.textContent = "Submit";
form.append(submit);

let gridHeight = 540;
let gridWidth = 900;


Object.assign(grid.style, {
    height: gridHeight + "px",
    width: gridWidth + "px",
})



function useUserInput(userInput){
    grid.innerHTML = "";
    let gridCols = userInput;
    let squareSize = Math.floor(gridWidth / gridCols);
    let gridRows = Math.floor(gridHeight / squareSize);
    let area = gridCols * gridRows;

    gridHeight = squareSize * gridRows;
    gridWidth = squareSize * gridCols;

    Object.assign(grid.style, {
        height: gridHeight + "px",
        width: gridWidth + "px",
        })

   

    for(let i = 1; i <= area; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = i;
        grid.append(square);


    Object.assign(square.style, {
        height: squareSize + "px",
         width: squareSize + "px",
    })

    let opacity = .1;
     function changeSquareColor(square){
        if(opacity < 1){
            opacity += .1;
        }
        
        Object.assign(square.style, {
        backgroundColor: "black",
        opacity: opacity,
    })
}
    
    square.addEventListener("mouseover", ()=>{
        changeSquareColor(square);
    });
   
}
}

function getUserInput(e){
    e.preventDefault();
    let userInput = Number(input.value);
    useUserInput(userInput);
}



form.addEventListener("submit", getUserInput);
