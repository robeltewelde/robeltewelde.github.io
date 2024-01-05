const audio = document.getElementById("bir")

audio.addEventListener("ended", () => {
    audio.currentTime = 0
})

function play() {
    audio.play()
}

function pause() {
    audio.pause()
}
