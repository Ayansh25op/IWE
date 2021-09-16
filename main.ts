let isSwitched = false
let force = 0
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
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Calling Suit")
})
input.onButtonPressed(Button.B, function () {
    if (isSwitched) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    isSwitched = force > 100
})
