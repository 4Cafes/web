let message = {
    messages: [
        "https://www.youtube.com/@4cafes   ",
        "we aint going to be paid ",
        "fuck the skids who sell products ",
        "lil_batmain ",
        "i dont fucking miss ever ",
        "cafes.lol cafes.lol cafes.lol ",
        "everybody else is skidded ",
        "cafes > pasters ",
        "cafes -> Brain ",
        "making kids rage ",
        "loaded cafes.lol - kick skids out NOW ",
        "botched but works ",

    ],
    up: true,
    index: 0,
    count: 0,
    start: function() {
        message.interval = setInterval(() => {
            if (message.count == message.messages[message.index].length) {
                message.up = false
                clearInterval(message.interval)
                setTimeout(message.start, 750)
            } else if (message.count == 1) {
                message.up = true
                message.index = message.index == message.messages.length -1 ? 0 : ++message.index
            }

            message.count = message.up ? ++message.count : --message.count
            $(motd).text(message.messages[message.index].slice(0, message.count))
        }, 75);
    }
}

message.start()
