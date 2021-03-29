// from data.js
const tableData = data;

// Select the button
const button = d3.select("#filter-btn")

// Select the form
const form = d3.select("#form")

const tableBody = d3.select(".table-body"); 

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

    filteredData.forEach((runFilter) => {
        const row = tableBody.append("tr");
        Object.entries(runFilter).forEach(([key, value]) => {
            const cell = row.append("td");
            cell.text(value);
        });
    });
};