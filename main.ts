pins.digitalWritePin(DigitalPin.P1, 1)
basic.showIcon(IconNames.No)
basic.forever(function () {
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 500), music.PlaybackMode.LoopingInBackground)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(3800)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 500), music.PlaybackMode.LoopingInBackground)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.showIcon(IconNames.Yes)
    basic.pause(3250)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 500), music.PlaybackMode.UntilDone)
    basic.pause(7500)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    music.stopAllSounds()
})
