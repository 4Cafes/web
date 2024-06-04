let message = {
    messages: [
        "https://www.youtube.com/@silenthook11   ",
        "4ever hitting p on quarantine ",
        "Aftermath got shit on with V2 Update ",
        "#1 quarantine script since 2023 ",
        "Netac | Mav | treA ",
        "forever hitting 1000M shots ",
        "every other quarantine script is skidded ",
        "silenthook > pasters ",
        "Netac -> Brain ",
        "making kids rage ",
        "loaded silenthook11 - kick skids out NOW ",
        "CompilerError is Chinese ",

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
