// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn")

// Select the form
var form = d3.select("#form")

// Create event handlers
button.on("click", runFilter);
form.on("submit", runFilter);

// Event handler function for the form
function runFilter () {

    // Prevent page from automatically refreshing
    d3.event.preventDefault();

    // Select input element
    var inputElement = d3.select("#datetime");

    // Get value property of input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(datum => datum.datetime ===inputValue);

    console.log(filteredData);

    var alienInfo = d3.select(".table-body");

    alienInfo.html("");

    alienInfo.append("tr").text(filteredData);
};