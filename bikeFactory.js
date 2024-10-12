
var bikeFactory;
(function createBikeFactory(){
    var nextId = 0;
    var brand = "Cool Bikes";
    function getId(){
        return nextId++
    };
    bikeFactory = {
        bikes: [],
        createBike(type){
            var newBike = {
                type: type,
                distance: 0,
                brand: brand,
                id: getId()
            };
            this.bikes.push(newBike);
            return newBike
        }
        };
})();

var cyclist = {
    bike: {},
    log: [],
    rideBike: function(place, distance){
        if (!this.bike){
            console.log("Cyclist does not have a bike")
            return;
        };
        this.log.push({distance: distance, place: place});
        this.bike.distance += distance;
    }
}

var bike = bikeFactory.createBike('road');
bikeFactory.createBike('trail');
bikeFactory.createBike('road');
cyclist.bike = bike;
cyclist.rideBike("Around the block", 10);
cyclist.rideBike("Trail A", 14);
console.log('Cyclist data: ')
console.log(cyclist);
console.log("Bikes in the bike factory: ")
console.log(bikeFactory.bikes);