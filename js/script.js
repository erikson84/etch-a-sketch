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
    let oldColor = window.getComputedStyle(e.srcElement).backgroundColor;
    let oldRGB = parseRGB(oldColor);
    let newRGB = oldRGB.map(val => Math.round(+val - 25.5));
    this.style.backgroundColor = RGB(newRGB);
}

function reset(e) {
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(div => div.style.backgroundColor = 'rgb(255, 255, 255)');
}

function setGridSize(e) {
    let newSize = +prompt("Select a new grid size (must be less than 100)", 16);
    if (newSize > 100) {
        alert("Size is greater than 100! Please choose a smaller value.")
        return
    } else if (newSize == 0) {
        alert("Please choose a number between 1 and 100.");
        return
    } else if (isNaN(newSize)) {
        alert("Please enter a valid number between 1 and 100");
        return
    }
    drawGrid(newSize);
}

function parseRGB(rgb) {
    return rgb.match(/[0-9]+/g);
}

function RGB(num_array) {
    const corr_array = num_array.map(val => (val < 0) ? 0 : val);
    return `rgb(${corr_array[0]}, ${corr_array[1]}, ${corr_array[2]})`;
}