let tr = document.getElementsByTagName('td');

Array.from(tr).forEach(trEle => {
    trEle.addEventListener("click", e => {
        let target = e.target;
        let idx = parseInt(target.innerText) - 1;
        let element = pt[idx];
        let printedData = document.getElementById('data');
        printedData.innerHTML = `name: ${element.name} (${element.atomicNumber}) 
                        <br> mass: ${parseFloat(element.atomicMass)} <br> year discovered: ${element.yearDiscovered}
                        <br> state: ${element.standardState} <br> electron configuration: ${element.electronicConfiguration}
                    `;
    })
})