//get the clear button
const clearBtn = document.getElementById('clear-btn');
//get the grid div
const container = document.querySelector('#container');
//get the grid squares
const squares = document.querySelectorAll('.grid-square');
//get the color picker element
const colorPicker = document.getElementById('pick-color');
//default background-color on hover
let hoverColor="#22223B";
//default grid size 16x16
let size=16;

//clear grid when clear button is clicked
clearBtn.addEventListener('click', function(){
    //empty grid container
    container.innerHTML = '';
    //generate again grid content
    createGrid(size);
});



colorPicker.addEventListener('input', function(){
    hoverColor = colorPicker.value;
});

function changeColor(e) {
    e.target.style.backgroundColor = hoverColor;
}

function createGrid(){
    //generate grid elements
    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-square");
        newDiv.addEventListener("mouseover", changeColor);
        newDiv.style.width = 100 / size + "%";
        container.appendChild(newDiv);
        
    }
}

createGrid();



