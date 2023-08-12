var binaryRain = document.querySelector(".binary-rain");

function createBinary() {
    var binaryElement = document.createElement("span");
    binaryElement.className = "binary";
    binaryElement.innerText = Math.round(Math.random());
    binaryElement.style.left = Math.random() * 100 + "vw";
    binaryElement.style.top = "-10px"; 
    binaryRain.appendChild(binaryElement);

    setTimeout(function () {
        binaryElement.remove();
    }, 4000);
}

function startRain() {
    setInterval(createBinary, 150);
}
