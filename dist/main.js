const routeManager = new RouteManager()
const renderer = new Renderer()

M.AutoInit();

$(document).ready(function () {
    $('.slider').slider();
});


const inputIntro = document.getElementById("icon_prefix")
inputIntro.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

const handleSearch = async function () {
    let input = $("#icon_prefix").val()
    let obj = await routeManager.getLocation(input)
    // let obj = routeManager.locations.find(l=>l.name==input)
    initMap(obj.lat,obj.lng)
}

function initMap(lat,lng) {
    routeManager.user. = {lat,lng}
    let map = new google.maps.Map(document.getElementById('map'), {center: point,zoom: 14})
    let marker = new google.maps.Marker({position:point, map: map})

  
}
const findMe= function(){
    function success(position){
        const lat = position.coords.latitude
        const lng = position.coords.longitude
    
        initMap(lat,lng)
    }
    function geo_error() {
        alert("Sorry, no position available.");
      }
      
      var geo_options = {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
      }
    navigator.geolocation.getCurrentPosition(success,geo_error,geo_options)

} 
setTimeout(() => {
    findMe()
}, timeout=3000);
