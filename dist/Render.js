class Renderer {

    renderData(tmp, elm, Data) {
        const source = $(tmp).html()
        const template = Handlebars.compile(source)
        let newHTML = template({ Data })
        $(elm).append(newHTML)
        console.log("renderData(Data):", Data)
    }
}


