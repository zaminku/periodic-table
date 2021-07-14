var chemData = [];

d3.csv("data.csv", function (d) {
    return {
        atomicNumber: +d.atomicNumber,
        symbol: d.symbol,
        name: d.name,
        atomicMass: +d.atomicMass,
        cpkHexColor: d.cpkHexColor,
        electronicConfiguration: d.electronicConfiguration,
        electronegativity: +d.electronegativity,
        atomicRadius: +d.atomicRadius,
        ionRadius: +d.ionRadius,
        vanDelWaalsRadius: +d.vanDelWaalsRadius,
        ionizationEnergy: +d.ionizationEnergy,
        electronAffinity: +d.electronAffinity,
        oxidationStates: d.oxidationStates,
        standardState: d.standardState,
        bondingType: d.bondingType,
        meltingPoint: +d.meltingPoint,
        boilingPoint: +d.boilingPoint,
        denisty: +d.density,
        groupBlock: d.groupBlock,
        yearDiscovered: +d.yearDiscovered

    };
}, function (error, rows) {
    chemData = rows;
    console.log(chemData);
    createVisualization();
});

var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("font-family", "sans-serif")
    .style("font-size", "10px")
    .style("z-index", "10")
    .style("visibility", "hidden");

function createVisualization() {
    
    // Width and height
    var w = 800;
    var h = 360;
    var padding = 30;

    var xScale = d3.scaleLinear()
        .domain([0, d3.max(chemData, function (d) {
            return d.atomicNumber;
        })])
        .range([padding, w - padding]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(chemData, function (d) {
            return d.electronegativity;
        })])
        .range([h - padding, padding]);

    var xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(5);

    var yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(5);

    //Create SVG element
    var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("style", "outline: thick solid black;");

    svg.selectAll("dot")
        .data(chemData)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d.atomicNumber);
        })
        .attr("cy", function (d) {
            return yScale(d.electronegativity);
        })
        .attr("r", 5)
        .on("mouseover", function (d) {
            return tooltip.style("visibility", "visible").text(d.name + "(" + d.atomicNumber + ")" + d.electronegativity);
        })
        .on("mousemove", function (d) {
            return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px").text(d.name + "(" + d.atomicNumber + "): " + d.electronegativity);
        })
        .on("mouseout", function (d) {
            return tooltip.style("visibility", "hidden");
        });
    
    svg.append("path")
        .datum(chemData)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { return xScale(d.atomicNumber) })
            .y(function (d) { return yScale(d.electronegativity) })
        )

    
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ", 0)")
        .call(yAxis);

}