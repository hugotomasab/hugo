input.onButtonPressed(Button.A, function () {
    basic.showString(" My name is Hugo")
    basic.showIcon(IconNames.StickFigure)
    basic.showString("I  am 7.5 years old")
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # # . .
        # . . . .
        # . # # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
})
