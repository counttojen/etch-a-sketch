const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.prepend(container);

const grid = document.querySelector(".grid");
container.append(grid);

const form = document.createElement("form");
form.classList.add("input-form");

const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");
container.append(inputContainer);
inputContainer.append(form);

const inputText = document.createElement("label");
inputText.classList.add("input-label");
inputText.textContent = "Enter a number from 1 - 100 to generate grid. The higher the number, the more pixels:";
form.append(inputText);

const input = document.createElement("input");
input.classList.add("input");
form.append(input);

const submit = document.createElement("button");
submit.classList.add("form-submit");
submit.type = "submit";
form.append(submit);
submit.textContent = "submit";

let gridSize = 480;

Object.assign(grid.style, {
    height: gridSize + "px",
    width: gridSize + "px",
})

// function getRandomColor(){
//     let hexcode = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//     let randomHexcode = "#";
//     for(let i = 0; i < 6; i++){
//         let randomIndex = hexcode[Math.floor(Math.random() * hexcode.length)];
//         randomHexcode = randomHexcode + randomIndex;
        
        
        
//     }
//     return randomHexcode;
// }

if(userInput < 1 || userInput > 100)
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    grid.innerHTML = "";
    console.log(e);
    let userInput = input.value;
    console.log(userInput);
    let gridWidth = userInput;
    let area = gridWidth * gridWidth;
    let squareSize = gridSize / gridWidth;

    for(let i = 1; i <= area; i++){
    let opacity = 0;
    const square = document.createElement("div");
    grid.appendChild(square);
    square.classList.add("square");
    square.id = i;

    Object.assign(square.style, {
    height: squareSize + "px",
    width: squareSize + "px",
    
})  
    
    square.addEventListener("mouseover", ()=>{
    opacity = Math.min(opacity + .2, 1);
    // square.style.backgroundColor = getRandomColor();
    square.style.backgroundColor = "black";
    square.style.opacity = opacity;
})

}
})
 

    



    


    

    
    






