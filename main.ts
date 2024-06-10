radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.stringPlayable("C E C5 G A F F - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
radio.setGroup(1)
