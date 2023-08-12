function createBinarydrop() {
    var binarydrop = document.createElement("img");
    binarydrop.className = "binarydrop";
    binarydrop.style.left = Math.random() * window.innerWidth + "px";

    var randomImage = Math.floor(Math.random() * 3) + 1;
    binarydrop.src = "./img/binary"+randomImage+".jpg";

    document.body.appendChild(binarydrop);

    setTimeout(function () {
        binarydrop.remove();
    }, 30000);
}

function startDrop() {
    setInterval(createBinarydrop, 2000);
}

startDrop();
