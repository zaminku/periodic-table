let enButton = document.getElementById('enButton');
enButton.addEventListener("click", e => {
    let enDiv = document.getElementById("graph");
    enDiv.innerHTML = ""
    console.log(enDiv);
    // let newScript = document.createElement("script");
    // newScript.type = 'text/javascript';
    // newScript.src = "https://d3js.org/d3.v4.min.js"
    let newScript2 = document.createElement("script");
    newScript2.type = 'text/javascript';
    newScript2.src = "./src/scripts/electronegativity.js"
    // enDiv.appendChild(newScript);
    enDiv.appendChild(newScript2);
    // enDiv.innerHTML = `<script src="https://d3js.org/d3.v4.min.js"></script>
    // <script type="text/javascript" src="./src/scripts/electronegativity.js"></script>`;
    
})