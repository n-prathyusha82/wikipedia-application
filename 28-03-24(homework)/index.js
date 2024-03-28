let resultsContainer = document.getElementById("results-container")
let input = document.getElementById("input")

function appendData(resultObj){
    let title = document.createElement("h1")
    title.textContent = resultObj.title
    title.classList.add("title")

    let link = document.createElement("a")
    link.textContent = resultObj.link
    link.href = resultObj.link
    link.classList.add("link")

    let description = document.createElement("p")
    description.textContent = resultObj.description
    description.classList.add("description")

    let resultItemContainer = document.createElement("div")
    resultItemContainer.appendChild(title)
    resultItemContainer.appendChild(link)
    resultItemContainer.appendChild(description)

    resultsContainer.appendChild(resultItemContainer)

}


input.addEventListener("keydown",function(event){
    // console.log(event.key)
    if(event.key ==="Enter"){
        let searchValue = input.value 
        console.log(searchValue)
        let url = "https://apis.ccbp.in/wiki-search?search="+searchValue
        // console.log(url)
        let options = {
            method : "GET"
        }
        fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            console.log(jsonData)
            let searchResults = jsonData.search_results
            for (let i of searchResults){
                appendData(i)
            }
        })
    }
})

