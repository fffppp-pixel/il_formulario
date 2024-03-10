const nav = document.getElementById("nav")

let arr = ["link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3","link1", "link2", "link3",]

for (let i = 0; i < arr.length; i++) {
    let elm = document.createElement("div")
    elm.innerHTML = arr[i]
    elm.classList.add("nav-item")
    nav.appendChild(elm)
}