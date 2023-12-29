const passd = document.querySelector(".password")
const btn = document.querySelector('button')
const alphNum = "qwertyuioplkjhgfdsamnbvcxzQWERTYUIOPLKJHGFDSAMNBVCXZ0987654321';/.,!@#$%^&*()_+"
let lengths = document.querySelector('.inp').value;

// lengths.addEventListener = () => {
//     for (var i = 0; i <= lengths; i++) {

//         let rand = Math.floor(Math.random() * alphNum.length)
//         pass += alphNum.substring(rand, rand + 1)
//            passd.innerHTML = pass
//     }
// }

let getVal = lengths.addEventListener = () => {
    let lengths = document.querySelector('.inp').value;

}

function generatePassowrd() {
    let pass = ''
        // let lengths = document.querySelector('.inp').value;

    for (var i = 0; i <= lengths; i++) {

        let rand = Math.floor(Math.random() * alphNum.length)
        pass += alphNum.substring(rand, rand + 1)

    }
    passd.innerHTML = pass

}

btn.addEventListener('click', () => {
    // generatePassowrd();


    console.log(getVal)
})