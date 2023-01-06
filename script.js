//get the grid div
const container = document.querySelector('#container');
const squares = document.querySelectorAll('.container');

function changeColor(e) {
    e.target.style.backgroundColor = "green";
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



