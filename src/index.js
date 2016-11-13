var five = require("johnny-five"),
    board = new five.Board(); // dev/ttyACM

board.on("ready", function() {
  var btn = new five.Button(2);
  var piezo = new five.Piezo(8);

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

  // Create an Led on pin 13
  var led = new five.Led(5);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();

  this.repl.inject({
    btn: btn
  });

});