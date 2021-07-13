// New dataset read from CSV
var ratData = [];

d3.csv('rat-data.csv', function (d) {
    return {
        city: d.city, // city name
        rats: +d.rats // force value of rats to be number (+)
    };
}, function (error, rows) { // catch error if error, read rows
    ratData = rows; // set ratData equal to rows
    console.log(ratData);
    createVisualization(); // call function to create chart
});

// Write the createVisualization function
// This will contain the script that creates the chart
function createVisualization() {
    // Width and height of SVG
    var w = 150;
    var h = 175;

    // Get length of dataset
    var arrayLength = ratData.length; // length of dataset
    var maxValue = d3.max(ratData, function (d) { return +d.rats; }); // get maximum
    var x_axisLength = 100; // length of x-axis in our layout
    var y_axisLength = 100; // length of y-axis in our layout

    // Use a scale for the height of the visualization
    var yScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, y_axisLength]);

    //Create SVG element
    var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    // Select and generate rectangle elements
    svg.selectAll("rect")
        .data(ratData)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return i * (x_axisLength / arrayLength) + 30; // Set x coordinate of rectangle to index of data value (i) *25
        })
        .attr("y", function (d) {
            return h - yScale(d.rats); // Set y coordinate of rect using the y scale
        })
        .attr("width", (x_axisLength / arrayLength) - 1)
        .attr("height", function (d) {
            return yScale(d.rats); // Set height of using the scale
        })
        .attr("fill", "steelblue");

    // Create y-axis
    svg.append("line")
        .attr("x1", 30)
        .attr("y1", 75)
        .attr("x2", 30)
        .attr("y2", 175)
        .attr("stroke-width", 2)
        .attr("stroke", "black");

    // Create x-axis
    svg.append("line")
        .attr("x1", 30)
        .attr("y1", 175)
        .attr("x2", 130)
        .attr("y2", 175)
        .attr("stroke-width", 2)
        .attr("stroke", "black");

    // y-axis label
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .text("No. of Rats")
        .attr("transform", "translate(20, 20) rotate(-90)")
        .attr("font-size", "14")
        .attr("font-family", "'Open Sans', sans-serif");

    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("font-family", "'Open Sans', sans-serif")
        .style("font-size", "12px")  
        .style("z-index", "10")
        .style("visibility", "hidden");

    // Select and generate rectangle elements
    svg.selectAll("rect")
        .data(ratData)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return i * (x_axisLength / arrayLength) + 30; // Set x coord
        })
        .attr("y", function (d) {
            return h - d.rats * (y_axisLength / maxValue); // Set y coord
        })
        .attr("width", (x_axisLength / arrayLength) - 1)
        .attr("height", function (d) {
            return d.rats * (y_axisLength / maxValue); // Set height to data value
        })
        .attr("fill", "steelblue")
        .on("mouseover", function (d) {
            return tooltip.style("visibility", "visible").text(d.city + ": " + d.rats);
        })
        .on("mousemove", function (d) {
            return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px").text(d.city + ": " + d.rats);
        })
        .on("mouseout", function (d) {
            return tooltip.style("visibility", "hidden");
        });
}; // end of function


