let arrM = ["M", "I", "B"];
const mainBox = document.getElementById("mainBox")
const bar = document.getElementById("sideBar")

bar.addEventListener("mouseenter", () => {
    bar.style.width = "250px"
})

bar.addEventListener("mouseleave", () => {
    bar.style.width = "50px"
})

for (let i = 0; i < arrM.length; i++) {
    var elm = document.createElement("div")
    elm.innerHTML = arrM[i]
    bar.appendChild(elm)
}