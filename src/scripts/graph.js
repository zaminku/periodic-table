// Electronegativity Button Listener
let enButton = document.getElementById('enButton');
let en = false;
enButton.addEventListener("click", e => {
    if (!en) {
        en = true;
        let graphDiv = document.getElementById("graph");
        graphDiv.innerHTML = "";
        let graphTag = document.getElementById("graph-tag");
        graphTag.innerHTML = "";
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

// Atomic Radius Button Listener
let arButton = document.getElementById('arButton');
let ar = false;
arButton.addEventListener("click", e => {
    if (!ar) {
        ar = true;
        let graphDiv = document.getElementById("graph");
        graphDiv.innerHTML = "";
        let graphTag = document.getElementById("graph-tag");
        graphTag.innerHTML = "";
        // console.log(graphDiv);
        // let newScript = document.createElement("script");
        // newScript.type = 'text/javascript';
        // newScript.src = "https://d3js.org/d3.v4.min.js"
        let newScript2 = document.createElement("script");
        newScript2.type = 'text/javascript';
        newScript2.src = "./src/scripts/atomicRadius.js"
        // graphDiv.appendChild(newScript);
        graphDiv.appendChild(newScript2);
    }
})

// Ionization Energy Button Listener
let ieButton = document.getElementById('ieButton');
let ie = false;
ieButton.addEventListener("click", e => {
    if (!ie) {
        ie = true;
        let graphDiv = document.getElementById("graph");
        graphDiv.innerHTML = "";
        let graphTag = document.getElementById("graph-tag");
        graphTag.innerHTML = "";
        // console.log(graphDiv);
        // let newScript = document.createElement("script");
        // newScript.type = 'text/javascript';
        // newScript.src = "https://d3js.org/d3.v4.min.js"
        let newScript2 = document.createElement("script");
        newScript2.type = 'text/javascript';
        newScript2.src = "./src/scripts/ionizationEnergy.js"
        // graphDiv.appendChild(newScript);
        graphDiv.appendChild(newScript2);
    }
})

// Electron Affinity Button Listener
let eaButton = document.getElementById('eaButton');
let ea = false;
eaButton.addEventListener("click", e => {
    if (!ea) {
        ea = true;
        let graphDiv = document.getElementById("graph");
        graphDiv.innerHTML = "";
        let graphTag = document.getElementById("graph-tag");
        graphTag.innerHTML = "";
        // console.log(graphDiv);
        // let newScript = document.createElement("script");
        // newScript.type = 'text/javascript';
        // newScript.src = "https://d3js.org/d3.v4.min.js"
        let newScript2 = document.createElement("script");
        newScript2.type = 'text/javascript';
        newScript2.src = "./src/scripts/electronAffinity.js"
        // graphDiv.appendChild(newScript);
        graphDiv.appendChild(newScript2);
    }
})

// Atomic Mass Button Listener
// let amButton = document.getElementById('amButton');
// let am = false;
// amButton.addEventListener("click", e => {
//     if (!am) {
//         am = true;
//         let graphDiv = document.getElementById("graph");
//         graphDiv.innerHTML = "";
            // let graphTag = document.getElementById("graph-tag");
            // graphTag.innerHTML = "";
//         // console.log(graphDiv);
//         // let newScript = document.createElement("script");
//         // newScript.type = 'text/javascript';
//         // newScript.src = "https://d3js.org/d3.v4.min.js"
//         let newScript2 = document.createElement("script");
//         newScript2.type = 'text/javascript';
//         newScript2.src = "./src/scripts/atomicMass.js"
//         // graphDiv.appendChild(newScript);
//         graphDiv.appendChild(newScript2);
//     }
// })

//Clear Graph Button
let clearButton = document.getElementById('clearButton');
clearButton.addEventListener("click", e=> {
    let graphDiv = document.getElementById("graph");
    graphDiv.innerHTML = "";
    // en = false;
})