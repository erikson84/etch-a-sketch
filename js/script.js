const main = document.querySelector(".grid");

drawGrid();

function drawGrid(dim=16) {
    let pixelSize = 480/dim + 'px';
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            let pixel = document.createElement("div");
            pixel.id = 'pixel' + i + j;
            pixel.style.height = pixelSize;
            pixel.style.width = pixelSize;
            pixel.classList.add('pixel');
            main.appendChild(pixel);
        }
    }
}