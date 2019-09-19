
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
navigator.geolocation.getCurrentPosition(success,error)

const loadPage = async function () {
    await routeManager.getDataFromDB()
    renderer.renderData('#city-template', '.container', routeManager.cityData)
    console.log("loadPage(routeManager.cityData): ", routeManager.cityData)
}

const handleSearch = async function () {
    let inputCity = $("#city-input").val()
    let newCity = await routeManager.getCityData(inputCity)
    console.log("newCity", newCity)
    renderer.renderData('#city-template', '.container', [newCity])
}

$(".container").on("click", "#save", function(){
    let text = $(this).siblings("#cityName").text()
    routeManager.saveCity(text)
    console.log("save(clic):", text)
})

$(".container").on("click", "#remove", async function(){
    let text = $(this).siblings("#cityName").text()
    await routeManager.removeCity(text)
    $(".container").empty()
    console.log("remove(clic):", text)
})
