const main = document.querySelector(".grid");

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', reset);

const gridButton = document.querySelector("#setGridSize");
gridButton.addEventListener('click', setGridSize);


drawGrid();

function drawGrid(dim=16) {
    main.textContent = '';
    let pixelSize = 480/dim + 'px';
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            let pixel = document.createElement("div");
            pixel.id = 'pixel' + i + j;
            pixel.style.height = pixelSize;
            pixel.style.width = pixelSize;
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseenter', colorPixel);
            main.appendChild(pixel);
        }
    }
}

function colorPixel(e) {
    this.classList.add('pixelhover');
}

function reset(e) {
    pixels = document.querySelectorAll('.pixelhover')
    pixels.forEach(div => div.classList.remove("pixelhover"));
}

function setGridSize(e) {
    let newSize = +prompt("Select a new grid size (must be less than 100)", 16);
    if (newSize > 100) {
        alert("Size is greater than 100! Please choose a smaller value.")
        return
    }
    drawGrid(newSize);
}