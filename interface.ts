//Interface
interface Point{
    x:number, y:number
}
interface Passenger{
    name:string;
    phone:string;
}
interface Vehicle {
    currentLocation:Point;
    travelTo(point:Point):void;
    getDistance(pointA:Point, pointB:Point):number;
    addPassenger(passenger,Passenger):void;
}

//taxi_1=>25 abc 25
//taxi_1.currentLocation
//taxi_1.travelTo()
//taxi_2=>25 abd 25
//taxi_2.currentLocation
//taxi_2.travelTo()