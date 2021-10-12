enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        RadioConnection = 1
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(35)
    basic.pause(500)
    if (RadioConnection == 1) {
        basic.showString("Success!")
    } else {
        basic.showString("Failed")
    }
    RadioConnection = 0
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
    }
    basic.showString("CALLING SUIT")
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
    led.stopAnimation()
})
let force = 0
let isSwitched = false
let RadioConnection = 0
radio.setGroup(35)
RadioConnection = 0
soundExpression.giggle.playUntilDone()
basic.showIcon(IconNames.Chessboard)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    isSwitched = force > 100
})
