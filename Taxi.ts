import { Point } from "./Point";
import { Vehicle } from "./Vehicle";

export class Taxi implements Vehicle{
    private color:string;
    currentLocation:Point;
    constructor (private _location:Point,color?:string){
        this.color = color;
    }
    
    travelTo(point:Point):void{
        console.log(`taxi X: ${this._location.x} ,taxi y: ${this._location.y} dan X: ${point.x} ,taxi y: ${point.y} konumuna gidiyor`);
        
    }
    get location(){
        return this._location;
    }
    set location(value:Point){
        if(value.x<0&&value.y<0){
            throw new Error("Koordinat bilgileri negatif olamaz.");
        }
        this._location = value;
    }

}