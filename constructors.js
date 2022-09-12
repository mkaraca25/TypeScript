//Class
var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi X: ".concat(this.location.x, " ,taxi y: ").concat(this.location.y, " dan X: ").concat(point.x, " ,taxi y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 4, y: 7 });
;
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
var taxi_2 = new Taxi({ x: 4, y: 8 }, "Red");
