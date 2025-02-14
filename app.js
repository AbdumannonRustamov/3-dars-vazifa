
const part1 = document.querySelector(".pas1")
const part2 = document.querySelector(".pas2")
const create = document.querySelector("#create") 

create && create.addEventListener("click", function() {
    if (part1 && part2) {
        part1.innerHTML = "<p>Salomlar</p>";
        part2.innerHTML = "<p>Salomlar</p>";
    }
})



const create2 = document.querySelector("#create2")
const bog = document.querySelector("#bog") 

if (bog) {
    const src = bog.getAttribute("src") 

    const two_pac = "https://jet-back.bank.uz/uploads/articles/334dd84058f59387fcd9a24fd1d8a94b.webp";

    create2 && create2.addEventListener("click", function() {
        if (bog.getAttribute("src") === two_pac) {
            bog.setAttribute("src", src)
        }
        else {
            bog.setAttribute("src", two_pac)
        }
        console.log(bog.getAttribute("src")); 
    })
}





const content3 = document.querySelector(".content3")
const creat3 = document.querySelector("#create3")

creat3 && creat3.addEventListener("click", function() {
    const div = document.createElement("div")
    div.innerHTML = "Hmmaga salomlar"

    content3.appendChild(div)
})