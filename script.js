//get the slider text
const sliderText  =  document.getElementById('slider-text');
//get the slider element
const slider      =  document.getElementById('range-btn');
//get the clear button
const clearBtn    =  document.getElementById('clear-btn');
//get the rainbow button
const rainbowBtn  =  document.getElementById('rainbow-btn');
//get the eraser button
const eraserBtn   =  document.getElementById('eraser-btn');
//get the color button
const colorBtn    =  document.getElementById('color-btn');
//get the color picker element
const colorPicker =  document.getElementById('pick-color');
//get the grid div
const container   =   document.querySelector('#container');
//get the grid squares
const squares     =   document.querySelectorAll('.grid-square');


//default background-color on hover
colorBtn.style.backgroundColor    = "#9A8C98"
//default grid size 16x16
let gridSize=16;

let rainbowMode =    false;
let eraserMode  =    false;
let colorMode   =    true; 

//generate Grid
function createGrid(){
    //generate grid elements
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-square");
        newDiv.addEventListener("mouseover", changeColor);
        newDiv.style.width = 100 / gridSize + "%";
        container.appendChild(newDiv);
        
    }
}

//change background color on hover
function changeColor(e) {
    if(rainbowMode){
            hoverColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    }
    if(eraserMode){
            hoverColor = 'white';
    }
    if(colorMode){
           hoverColor = colorPicker.value;          
    }    
    //change square color
    e.target.style.backgroundColor = hoverColor;
}


//update slider text
slider.addEventListener('input', function(e){
    gridSize                =   e.target.value;
    sliderText.textContent  =   gridSize + " x " + gridSize;
    clearGrid(e);
    return gridSize;
});


function clearGrid(e){
    //empty grid container
    container.innerHTML = '';
    //generate again grid content
    createGrid(gridSize);
}

//clear grid when clear button is clicked
clearBtn.addEventListener('click', clearGrid);


rainbowBtn.addEventListener("click", function () {
    rainbowMode =    true;
    eraserMode  =    false;
    colorMode   =    false;
    colorBtn.style.backgroundColor   = "#F2E9E4"
    eraserBtn.style.backgroundColor  = "#F2E9E4"
    rainbowBtn.style.backgroundColor = "#9A8C98"
});

eraserBtn.addEventListener("click", function () {
    rainbowMode =   false;
    eraserMode  =   true;
    colorMode   =   false;
    colorBtn.style.backgroundColor   = "#F2E9E4"
    eraserBtn.style.backgroundColor  = "#9A8C98"            
    rainbowBtn.style.backgroundColor = "#F2E9E4"
});

colorBtn.addEventListener("click", function () {    
    rainbowMode =    false;
    eraserMode  =    false;
    colorMode   =    true;
    colorBtn.style.backgroundColor    = "#9A8C98"
    eraserBtn.style.backgroundColor   = "#F2E9E4"
    rainbowBtn.style.backgroundColor  = "#F2E9E4"
});

createGrid();



