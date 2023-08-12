window.onload = function () {
    var progressBar = document.getElementById("progress-bar");
    var loadingText = document.getElementById("loading-text");
    var contentContainer = document.getElementById("content-container");
    var loadingcontainer = document.getElementById("loading-container");

    var progress = 0;
    var interval = setInterval(function () {
        progress += 1;
        progressBar.style.width = progress + "%";
        loadingText.textContent = "Now Loading " + progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            loadingText.textContent = "Loading Complete!";
            setTimeout(function () {
                contentContainer.style.display = "block";
                loadingcontainer.style.display = "none";
            }, 1000);
        }
    }, 50);
};
