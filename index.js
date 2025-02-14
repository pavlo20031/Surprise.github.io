document.getElementById("startBtn").addEventListener("click", function() {
    const screamer = document.getElementById("screamer");
    const audio = document.getElementById("screamAudio");

    screamer.style.display = "block";
    audio.play();
});