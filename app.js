const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.append(container);
const grid = document.createElement("div");
grid.classList.add("grid");
container.append(grid);
const form = document.createElement("form");
form.classList.add("select-form");
container.append(form);
const selectLabel = document.createElement("label");
selectLabel.classList.add("select-label");
selectLabel.textContent = "Select a number to generate a sketch area:";
form.append(selectLabel);
const select = document.createElement("select");
select.classList.add("select");
form.append(select);
const submit = document.createElement("button");
submit.classList.add("select-submit")
submit.type = "submit";
submit.textContent = "Submit";
form.append(submit);

    let gridWidth = 900;
    let gridHeight = 500;

    Object.assign(grid.style,{
    width: `${gridWidth}px`,
    height: `${gridHeight}px`,
})

for (let i = 10; i <= 100; i++) {
    if(gridWidth % i === 0 && gridHeight % i === 0){
    const option = document.createElement("option");
    option.value = i; 
    option.textContent = i; 
    select.appendChild(option);
    }
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    grid.innerHTML = "";
    let userInput = Number(select.value);
    
    let squareSize = userInput;
    let gridCols = gridWidth / squareSize;
    let gridRows = gridHeight / squareSize;
    let area = gridCols * gridRows;

    Object.assign(grid.style,{
    width: `${gridWidth}px`,
    height: `${gridHeight}px`,
})

    for(let i = 1; i <= area; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = i;
    grid.append(square);

    Object.assign(square.style, {
        width: `${squareSize}px`,
        height: `${squareSize}px`,
    })

    let opacity = .1;
    
    square.addEventListener("mouseover", ()=>{
    opacity += .1;
    square.style.backgroundColor = "black";
    square.style.opacity = opacity;
})
}
});

