const passd = document.querySelector(".password")
const btn = document.querySelector('button')
const alphNum = "qwertyuioplkjhgfdsamnbvcxzQWERTYUIOPLKJHGFDSAMNBVCXZ0987654321';/.,!@#$%^&*()_+"
const lengths = 6;


function generatePassowrd() {
    let pass = ''

    for (var i = 0; i <= lengths; i++) {
        let rand = Math.floor(Math.random() * alphNum.length)
        pass += alphNum.substring(rand, rand + 1)

    }
    passd.innerHTML = pass

}

btn.addEventListener('click', () => {
    generatePassowrd();
})