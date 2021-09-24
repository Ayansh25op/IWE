input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("SELF DESTRUCT IN 10 SECONDS")
})
input.onButtonPressed(Button.A, function () {
    soundExpression.spring.playUntilDone()
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Butterfly)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("CALLING SUIT")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Shield Activated")
    soundExpression.twinkle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.slide.playUntilDone()
    if (isSwitched) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.soaring.playUntilDone()
    basic.showString("Initiating Emergency Protocol ")
})
let force = 0
let isSwitched = false
soundExpression.giggle.playUntilDone()
basic.showIcon(IconNames.Chessboard)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    isSwitched = force > 100
})
