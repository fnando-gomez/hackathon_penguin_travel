const tempManager = new TempManager()
const renderer = new Renderer()

M.AutoInit();

$(document).ready(function () {
    $('.slider').slider();
});

const loadPage = async function () {
    await tempManager.getDataFromDB()
    renderer.renderData('#city-template', '.container', tempManager.cityData)
    console.log("loadPage(tempManager.cityData): ", tempManager.cityData)
}

const handleSearch = async function () {
    let inputCity = $("#city-input").val()
    let newCity = await tempManager.getCityData(inputCity)
    console.log("newCity", newCity)
    renderer.renderData('#city-template', '.container', [newCity])
}

$(".container").on("click", "#save", function () {
    let text = $(this).siblings("#cityName").text()
    tempManager.saveCity(text)
    console.log("save(clic):", text)
})

$(".container").on("click", "#remove", async function () {
    let text = $(this).siblings("#cityName").text()
    await tempManager.removeCity(text)
    $(".container").empty()
    console.log("remove(clic):", text)
})