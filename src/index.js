var five = require("johnny-five"),
    board = new five.Board(); // dev/ttyACM

board.on("ready", function() {
  var btn = new five.Button(2);
  var piezo = new five.Piezo(8);
  var led = new five.Led(5);
  var servo = new five.Servo({
    pin: 10,
    range: [45, 135],
    startAt: 120
  });

  servo.sweep();

//   var servo = new five.Servo.Continuous(10);
// // Set the horn to 90degrees
//   servo.to(90);
//
// // Angle change takes 500ms to complete
//   servo.to(90, 500);

  /*
   // var temperature =new five.Thermometer({
   //   pin: 4, //"A5",
   //   //toCelsius: function(raw) { // optional
   // 	//return (raw / sensivity) + offset;
   //   //}
   // });

   // temperature.on("data", function() {
   //   console.log("celsius: %d", this.C);
   //   console.log("fahrenheit: %d", this.F);
   //   console.log("kelvin: %d", this.K);
   // });

   /!*new five.Thermometer({
	  controller: "LM35",
	  pin: "A0"
   });*!/

   */

  // this.loop(1, function() {
  //   if (sound.value > 400) {
  //     led.on();
  //   }
  //   led.off();
  // });

  // Strobe the pin on/off, defaults to 100ms phases
  //led.strobe();

  // this.wait(3000, function () {
  // led.off();
  // });

  btn.on("press", function () {
    console.log('pressed');
    // Plays the same song with a string representation
    piezo.play({
      // song is composed by a string of notes
      // a default beat is set, and the default octave is used
      // any invalid note is read as "no note"
      song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
      beats: 1 / 4,
      tempo: 100
    });
  });

  this.repl.inject({
    btn: btn
  });
});
