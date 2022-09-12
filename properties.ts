
import { Taxi } from './Taxi';

let taxi_1:Taxi =new Taxi({x:4,y:7}); ;
taxi_1.travelTo({x:1,y:2});
let currentLocation=taxi_1.location();
taxi_1.location={x:4,y:7}
console.log(taxi_1.currentLocation);
let taxi_2:Taxi =new Taxi({x:4,y:8},"Red"); 
