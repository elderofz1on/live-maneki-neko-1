input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 140)
        basic.pause(500)
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
        basic.pause(500)
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 60)
        basic.pause(500)
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
        basic.pause(500)
    }
})
hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
