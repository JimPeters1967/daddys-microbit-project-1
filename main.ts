input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showNumber(randint(1, 6))
})
