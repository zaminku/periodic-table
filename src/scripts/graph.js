let enButton = document.getElementById('enButton');
let en = false;
enButton.addEventListener("click", e => {
    if (!en) {
        en = true;
        let graphDiv = document.getElementById("graph");
        graphDiv.innerHTML = "";
        // console.log(graphDiv);
        // let newScript = document.createElement("script");
        // newScript.type = 'text/javascript';
        // newScript.src = "https://d3js.org/d3.v4.min.js"
        let newScript2 = document.createElement("script");
        newScript2.type = 'text/javascript';
        newScript2.src = "./src/scripts/electronegativity.js"
        // graphDiv.appendChild(newScript);
        graphDiv.appendChild(newScript2);
    }
})

let clearButton = document.getElementById('clearButton');
clearButton.addEventListener("click", e=> {
    let graphDiv = document.getElementById("graph");
    graphDiv.innerHTML = "";
    // en = false;
})