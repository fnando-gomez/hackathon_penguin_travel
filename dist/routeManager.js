class RouteManager {
    constructor(){
        this.locations = []
    }
    
    initMap(lat,lng) {
        var location = {lat: lat, lng: lng};
        
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 12, center: location});
        
        var marker = new google.maps.Marker({position: location, map: map});
    }
    async getLocation(location){
        let data = await $.get(`location/${location}`)
        let validator = this.locations.find(l =>l.name==location.name)
        if(!validator){
            let newLoc = {...data}
            this.locations.push(newLoc)
            return newLoc
        }
    }
    
}

        
    
      