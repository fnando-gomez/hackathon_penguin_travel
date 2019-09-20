const routeManager = new RouteManager()
const renderer = new Renderer()
let user = {}


M.AutoInit()

$(document).ready(function () {
    $('.sidenav').sidenav()
})

const inputIntro = document.getElementById("icon_prefixI")
inputIntro.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("buttonI").click()
    }
})

const handleSearch = async function () {
    let input = $("#icon_prefixI").val()
    let obj = await routeManager.getLocation(input)
    initMap(obj.lat, obj.lng)
    renderer.renderImg('#images-template', '.container-imgs', obj)
    let travelers = await routeManager.getUserData()
    renderer.rTravelers('#travelers-template', '.container-trvs', travelers)
}

const logIn = function () {
function initMap(lat, lng) {
    let point = { lat, lng }
    let map = new google.maps.Map(document.getElementById('map'), { center: point, zoom: 14 })
    let marker = new google.maps.Marker({ position: point, map: map })

}

function initMap(lat, lng) {
    let point = { lat, lng }
    let map = new google.maps.Map(document.getElementById('map'), { center: point, zoom: 14 })
    let marker = new google.maps.Marker({ position: point, map: map })

}
const findMe = function () {
    function success(position) {
        routeManager.point.lat = position.coords.latitude
        routeManager.point.lng = position.coords.longitude

        initMap(routeManager.point.lat,routeManager.point.lng)
    }
    function geo_error() {
        alert("Sorry, no position available.");
    }

    var geo_options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    }
    navigator.geolocation.getCurrentPosition(success, geo_error, geo_options)

}
setTimeout(() => {
    findMe()
}, timeout = 1000);

