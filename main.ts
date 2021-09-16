input.onButtonPressed(Button.A, function () {
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
    basic.showString("SELF DESTRUCT IN 10 SECONDS")
})
input.onButtonPressed(Button.B, function () {
    if (isSwitched) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let force = 0
let isSwitched = false
basic.showString("POWER ON!")
basic.showIcon(IconNames.Chessboard)
basic.clearScreen()
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    isSwitched = force > 100
})
