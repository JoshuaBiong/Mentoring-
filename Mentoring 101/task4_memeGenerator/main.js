let tittle = document.querySelector(".title")
let btnGen = document.querySelector(".btnGenerate")
let image = document.querySelector('.images')

const url = "https://meme-api.com/gimme/wholesomememes"

const updateMeme = (url, title) => {
    image.setAttribute('src', url)
    tittle.innerHTML = title

}

tittle.innerHTML = "Hello"
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            updateMeme(data.url, data.title)
        })
}

// btnGen.addEventListener('click', generateMeme)

console.log(image)