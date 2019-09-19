
const routeManager = new RouteManager()
const renderer = new Renderer()

//javascript (intro)
// const inputIntro = document.getElementById("city-input")
// inputIntro.addEventListener("keyup", function (event) {
    //     if (event.keyCode === 13) {
//         event.preventDefault()
//         document.getElementById("button").click()
//     }
// })
// navigator.geolocation.getCurrentPosition(success,error)

const handleSearch = async function(){
    let input = $(".location").val()
    await routeManager.getLocation(input)
}

