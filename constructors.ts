//Class

interface Point{
    x:number, y:number
}
interface Vehicle {
    travelTo(point:Point):void;
}
class Taxi implements Vehicle{
    private color:string;
    currentLocation:Point;
    constructor (private location:Point,color?:string){
        this.color = color;
    }
    
    travelTo(point:Point):void{
        console.log(`taxi X: ${this.location.x} ,taxi y: ${this.location.y} dan X: ${point.x} ,taxi y: ${point.y} konumuna gidiyor`);
        
    }

}

let taxi_1:Taxi =new Taxi({x:4,y:7}); ;
taxi_1.travelTo({x:1,y:2});

console.log(taxi_1.currentLocation);
let taxi_2:Taxi =new Taxi({x:4,y:8},"Red"); 
