/** @format */
// enum Signal {
//   Red = 0,
//   Blue = 1,
//   Yellow = 2,
// }
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 3] = "Blue";
    Signal[Signal["Yellow"] = 4] = "Yellow";
})(Signal || (Signal = {}));
(function (Signal) {
    Signal[Signal["Green"] = 5] = "Green";
})(Signal || (Signal = {}));
var result;
// if (result === Signal.Yellow) {...}
// if (result === Signal['Yellow']) {...}
console.log(Signal.Green);
