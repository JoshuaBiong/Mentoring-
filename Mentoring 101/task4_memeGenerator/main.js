let tittle = document.querySelector(".title")
let btnGen = document.querySelector(".btnGenerate")
let image = document.querySelector('.images')

// const url = "https://meme-api.com/gimme/wholesomememes"

const url = 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact';

const updateMeme = (url, title) => {
    image.setAttribute('src', url)
    tittle.innerHTML = title

}

// tittle.innerHTML = "Hello"
// const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//         .then((response) => response.json())
//         .then((data) => {
//             updateMeme(data.url, data.title)
//                 // console.log(data)

//         })
// }

// btnGen.addEventListener('click', generateMeme)

// window.onload = () => {
try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
// }