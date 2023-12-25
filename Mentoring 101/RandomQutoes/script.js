// let quotes = [{
//         quote: `"Do not pity the dead, Harry. Pity the living, and, above all those who live without love."`,
//     },
//     {
//         quote: "It is impossible to manufacture or imitate love",
//     },
//     {
//         quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
//     },
//     {
//         quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
//     },
//     {
//         quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
//     },
//     {
//         quote: "Every human life is worth the same, and worth saving.",
//     }
// ];

// the code below generating code using array objects

// const quote = document.querySelector('.quotes')
// const gbtn = document.querySelector('.btn')

// gbtn.addEventListener('click', () => {
//     let random = Math.floor(Math.random() * quotes.length)

//     quote.innerHTML = quotes[random].quote
// })



// Code below generating code usig API

const quote = document.querySelector('.quotes')
const gbtn = document.querySelector('.btn')

const url = "https://type.fit/api/quotes"

let getQuote = () => {

    fetch(url).then((data) => data.json()).then((item) => {
        let random = Math.floor(Math.random() * item.length)
        quote.innerHTML = item[random].text

    })
}

// window.addEventListener('load', getQuote)

gbtn.addEventListener('click', getQuote)