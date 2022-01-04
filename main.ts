basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . # # . .
    . . . . .
    `)
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.forever(function () {
    basic.pause(2000)
})
