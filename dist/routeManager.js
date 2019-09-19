class RouteManager {
   

    async getDataFromDB() {
        let cities = await $.get('/cities')
        this.cityData = cities
        console.log("getDataFromDB...get/cities", cities)
    }

    async getCityData(cityName) {
        let newCity = await $.get(`/city/${cityName}`)
        this.cityData.push(newCity)
        console.log("this.cityData:", this.cityData)
        return newCity
    }

} 