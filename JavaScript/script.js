let arrM = ["Matematica", "Italiano", "Scienze"];
let arrL = ["#","#","#"];

const mainBox = document.getElementById("mainBox")
const bar = document.getElementById("sideBar")

bar.style.gridTemplateRows = `repeat( ${arrM.length}, 50px)`

bar.addEventListener("mouseenter", () => {
    bar.style.width = "250px"
})

bar.addEventListener("mouseleave", () => {
    bar.style.width = "50px"
})

for (let i = 0; i < arrM.length; i++) {
    var elm = document.createElement("div")
    var svgBox = document.createElement("div")
    var txt = document.createElement("div")
    var link = document.createElement("a")

    link.href=arrL[i]

    svgBox.innerHTML = document.getElementById(`sub_${i}`).outerHTML
    svgBox.classList.add("svgBox")
    elm.classList.add("navItem")
    elm.appendChild(svgBox)

    txt.innerHTML += arrM[i]
    txt.classList.add("bTxt")

    link.appendChild(txt)
    elm.appendChild(link)
    bar.appendChild(elm)
}