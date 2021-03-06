var five = require("johnny-five"),
  board = new five.Board();  // { port: "COM5" };

board.on("ready", function() {
  var btnRIGHT = new five.Button("A0"), // 0,
    // btnUP    = new five.Button("A1"), // 1,
    // btnDOWN  = new five.Button("A2"), // 2,
    // btnLEFT  = new five.Button("A3"), // 3,
    // btnSELECT= new five.Button("A4"), // 4,
    // btnNONE  = new five.Button("A5"), // 5;

    lcd = setupLCD(new five.LCD({
      // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
      pins: [8, 9, 4, 5, 6, 7],
      backlight: 10,
      rows: 2,
      cols: 20
      /*Options:
       bitMode: 4 or 8, defaults to 4
       lines: number of lines, defaults to 2
       dots: matrix dimensions, defaults to "5x8"*/
    }));

  bindLCDButton(btnRIGHT);

  this.wait(3000, function () {
    lcd.clear().cursor(0, 0).print("Hello master");
    lcd.print("!").cursor(1, 0).write(7).print("I :heart: :heart: :heart: you");
  });

  this.repl.inject({
    lcd: lcd
  });
});

function setupLCD(lcd) {
  // Tell the LCD you will use these characters:
  lcd.useChar("check");
  lcd.useChar("heart");
  lcd.useChar("duck");

  lcd.clear().print("Hello Board");

  return lcd;
}

function bindLCDButton(btn) {
  // btn.on("hold", function() {
  //   console.log('wait');
  // });

  btn.on("press", function () {
    console.log('pressed');
  });

  btn.on("release", function () {
    console.log('press and hold');
  });

  /*  new five.Buttons([ 2, 3, 4, 5 ]);
   new five.Buttons([ { pin: 2 }, { pin: 3 }, { pin: 4 }, { pin: 5 } ]);
   new five.Buttons([ button1, button2, button3 ]);  */
}

/*
  Pin	Function
  Analog 0	Button (select, up, right, down and left)
  Digital 4	DB4
  Digital 5	DB5
  Digital 6	DB6
  Digital 7	DB7
  Digital 8	RS (Data or Signal Display Selection)
  Digital 9	Enable
  Digital 10	Backlit Control

 #define btnRIGHT  0
 #define btnUP     1
 #define btnDOWN   2
 #define btnLEFT   3
 #define btnSELECT 4
 #define btnNONE   5
*/

