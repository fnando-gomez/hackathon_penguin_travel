class Renderer {

    renderImg(tmp, elm, Data) {
        const source = $(tmp).html()
        const template = Handlebars.compile(source)
        let newHTML = template( {Data} )
        $(".pic").empty()
        $(elm).append(newHTML)
    }
    renderLI(){
        console.log("renderLI")
        $(".sidenav-trigger").empty()
    }
}



