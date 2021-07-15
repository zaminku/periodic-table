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
    // console.log(chemData);
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
    var w = 1500;
    var h = 360;
    var padding = 60;

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
        // .attr("style", "outline: thin solid black;");

    //scatter plot with .on
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
        .style("fill", "#A9CCE3")
        .on("mouseover", function (d) {
            d3.select(this).attr("r", 10).style("fill", "#EC7D7D");
            return tooltip.style("visibility", "visible").text(d.name + "(" + d.atomicNumber + ")" + d.electronegativity).style('color', 'red').style('font-weight', 'bold').style('font-family', 'Oxygen');
        })
        .on("mousemove", function (d) {
            d3.select(this).attr("r", 10).style("fill", "#EC7D7D");
            return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px").text(d.name + "(" + d.atomicNumber + "): " + d.electronegativity).style('color', '#898A85').style('font-weight', 'bold').style('font-size', '14px').style('background-color', 'white').style('font-family', 'Oxygen');
        })
        .on("mouseout", function (d) {
            d3.select(this).attr("r", 5).style("fill", "#A9CCE3");
            return tooltip.style("visibility", "hidden");
        });
    
    //line graph
    svg.append("path")
        .datum(chemData)
        .attr("fill", "none")
        .attr("stroke", "#C9BABA")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(function (d) { return xScale(d.atomicNumber) })
            .y(function (d) { return yScale(d.electronegativity) })
        )

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + padding + ", 0)")
        .call(yAxis)
        .attr("font-family", "'Oxygen', sans-serif");

    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .text("Atomic Number")
        .attr("transform", `translate(${w/1.8}, 340)`)
        .attr("font-size", "18")
        .attr("font-family", "'Oxygen', sans-serif")
        .style("fill", "#6E7675");;

    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .text("Electronegativity")
        .attr("transform", `translate(20, ${h/3}) rotate(-90)`)
        .attr("font-size", "18")
        .attr("font-family", "'Oxygen', sans-serif")
        .style("fill", "#6E7675");

}