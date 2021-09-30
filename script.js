fetch("https://random.dog/woof.json")
.then(response => response.json())
.then(data => {
    obj = document.createElement("object")
    obj.data = data.url
    obj.height = "500 px"
    obj.width = "600 px"
    div = document.getElementById("display")
    div.appendChild(obj)
    console.log(data)
})

document.body.addEventListener("click", () => {
    location.reload()
})