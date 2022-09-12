//Class
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi X: ".concat(point.x, ",taxi y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("bus X: ".concat(point.x, ",bus y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.currentLocation = { x: 2, y: 5 };
taxi_1.travelTo({ x: 1, y: 2 });
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 3, y: 4 });
taxi_2.currentLocation = { x: 4, y: 5 };
console.log(taxi_1.currentLocation.x, taxi_1.currentLocation.y);
