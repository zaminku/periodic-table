const pt = require('periodic-table');

document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("hello");
    element.style.backgroundColor = "red";
})

let he = pt.elements.Helium;
console.log(he);