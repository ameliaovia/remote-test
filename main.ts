radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        forward()
    }
    if (receivedNumber == 2) {
        backward()
    }
    if (receivedNumber == 3) {
        stop()
    }
    if (receivedNumber == 4) {
        turn_left()
    }
    if (receivedNumber == 5) {
        turn_right()
    }
})
function turn_right () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function stop () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 0)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
function backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(5)
})
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function turn_left () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
basic.forever(function () {
    radio.setGroup(15)
})
