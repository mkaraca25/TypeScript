//Class

interface Point{
    x:number, y:number
}
interface Vehicle {
    currentLocation:Point;
    travelTo(point:Point):void;
}
class Taxi implements Vehicle{
    //..
    currentLocation:Point;
    travelTo(point:Point):void{
        console.log(`taxi X: ${point.x},taxi y: ${point.y} konumuna gidiyor`);
        
    }

}
class Bus implements Vehicle{
    //..
    currentLocation:Point;
    travelTo(point:Point):void{
        console.log(`bus X: ${point.x},bus y: ${point.y} konumuna gidiyor`);
        
    }
}
let taxi_1:Taxi =new Taxi() ;
taxi_1.currentLocation={x:2,y:5};
taxi_1.travelTo({x:1,y:2});
let taxi_2:Taxi =new Taxi() ;
taxi_2.travelTo({x:3,y:4});
taxi_2.currentLocation={x:4,y:5};
console.log(taxi_1.currentLocation.x,taxi_1.currentLocation.y);
