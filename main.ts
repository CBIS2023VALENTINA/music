input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        . # # . .
        # # # . .
        . # # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    if (true) {
        music.play(music.stringPlayable("C5 C5 C5 A B B B B ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (true) {
        music.play(music.stringPlayable("C C C E D D D D ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("C5 C5 B B A A G F ", 40), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.stringPlayable("C C D D E E F G ", 500), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.AB)) {
        music.rest(music.beat(BeatFraction.Whole))
    }
})
