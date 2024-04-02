input.onButtonPressed(Button.A, function () {
    Microbit.DMotor(Microbit.enMotorcolor.red, Microbit.enMotorcolor.green)
    Microbit.MotorRun(Microbit.enMotors.M1, 40)
    Microbit.MotorRun(Microbit.enMotors.M4, -29)
    Microbit.Writemotorlocation(Microbit.enMotorcolor.red, 0, 90)
    Microbit.Writemotorlocation(Microbit.enMotorcolor.green, 0, 90)
})
basic.forever(function () {
	
})
