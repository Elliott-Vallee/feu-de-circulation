basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
