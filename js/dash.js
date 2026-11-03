const dashBox = document.querySelector(".dash-box")

const data = JSON.parse(localStorage.getItem("user"))

const h1 = document.createElement("h1")
h1.textContent = "Welcome " + data.name
h1.classList.add("dash-title")

dashBox.appendChild(h1)