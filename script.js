hoverColor = "#5c5552"

//get the grid div
const container = document.querySelector('#container');

function changeColor(e) {
    e.target.style.backgroundColor = hoverColor;
}

function createDivs(size){
    //generate grid elements
    for(let i=0; i<size*size; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-square')
        newDiv.addEventListener('mouseover', changeColor);
        container.appendChild(newDiv);
        
    }
}

createDivs(16);



