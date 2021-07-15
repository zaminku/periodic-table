let tr = document.getElementsByTagName('td');

Array.from(tr).forEach(trEle => {
    trEle.addEventListener("click", e => {
        let target = e.target;
        let idx = parseInt(target.innerText) - 1;
        let element = pt[idx];
        let printedData = document.getElementById('data');
        printedData.innerHTML = `
                <h2>${element.name}</h2> <br>Atomic Number:  ${element.atomicNumber}
                <br> Mass:   ${parseFloat(element.atomicMass).toFixed(3)} g/mol
                <br> State (at room temp):   ${element.standardState} <br> Electron Configuration:   ${element.electronicConfiguration}
                <br> Melting Point: ${((element.meltingPoint - 273) * (9 / 5) + 32).toFixed(2)}&#176;F (${element.meltingPoint - 273}&#176;C)
                <br> Boiling Point: ${((element.boilingPoint - 273) * (9 / 5) + 32).toFixed(2)}&#176;F (${element.boilingPoint - 273}&#176;C)
                <br> Year Discovered:   ${element.yearDiscovered}`;
    })
})