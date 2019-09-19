class RouteManager {
    constructor(){
        this.locations = []
    }
   
    async getLocation(location){
        let data = await $.get(`location/${location}`)
        let validator = this.locations.find(l =>l.name==location.name)
        if(!validator){
            let newLoc = {
                name: data.name,
                pic: data.ref
            }
            this.locations.push(newLoc)
        }
    }
} 

function initMap() {
    // The location of Uluru
    var location = {lat: 7.5303400, lng: -80.0269900};
    
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: location});
    
        // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: location, map: map});
  }
      