var audio = $("#audio")[0]
var init = false

audio.volume = .6

function start() {
    if (init) return
    else init = true
    
    var rythm = new Rythm()
    rythm.addRythm('silentimg', 'image-shadow', 0, 10)
    rythm.addRythm('title', 'text-shadow', 0, 10)
    rythm.addRythm('text', 'text-shadow', 0, 10)
    rythm.addRythm('motd', 'text-shadow', 0, 10)
    rythm.connectExternalAudioElement(audio)
    rythm.start()
}

setInterval(() => {
    audio.play()
    .then(() => {
        start()
        $(container_init).css("visibility", "hidden")
        $(container_main).css("visibility", "visible")
    })
    .catch(err => {})
}, 50)
