const renderer = new Renderer()

M.AutoInit();

$(document).ready(function () {
    $('.slider').slider();
});

const handleSearch = async function(){
    let input = $(".location").val()
    await routeManager.getLocation(input)
}