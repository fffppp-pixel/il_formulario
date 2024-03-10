const mainBox = document.getElementById("mainBox")
const bar = document.getElementById("sideBar")

bar.addEventListener("mouseenter", () => {
    mainBox.style.gridTemplateColumns = "250px 1fr"
})

bar.addEventListener("mouseleave", () => {
    mainBox.style.gridTemplateColumns = "50px 1fr"
})