class RouteManager {
    constructor(){
        this.locations = []
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

        
    
      