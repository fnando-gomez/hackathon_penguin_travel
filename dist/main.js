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
    console.log(input)
    await routeManager.getLocation(input)
}

