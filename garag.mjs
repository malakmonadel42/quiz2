class Garage{
    sensor;
    carPlateNumber;
    constructor(){
        this.sensor=false;
        this.carPlateNumber=null;
    }
    eneterGarage(carPlateNumber){
        if (!this.sensor){
            this.sensor=true;
           this.carPlateNumber=carPlateNumber;
           console.log(`car with {carplateNumber}plat number can park here`) 
           
        }
        else{
            console.log(`there is car already parked here`)
           
        }

    }
    exitGarage (carPlateNumber){
        if (!this.sensor){
            console.log(`The garage is Empty`)
            this.sensor=false;
            this.carPlateNumber=null;
        }
        else {
            console.log(`Car with {carPlateNumber} plat number is leaving the garage”`)
        }
    }
}
export default Garage;