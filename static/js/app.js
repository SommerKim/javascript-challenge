// from data.js
const tableData = data;

// Select the button
const button = d3.select("#filter-btn")

// Select the form
const form = d3.select("#form")

// Select the table
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

    // Get requested data
    var filteredData = tableData.filter(datum => datum.datetime ===inputValue);

    console.log(filteredData);

    // Message pop-up for entering non-existent date
    if (filteredData.length === 0) {
        alert('No data returned. Please try a different search parameter.');
    };
      
    // Write filtered data to table
    filteredData.forEach((alienData) => {
        const row = tableBody.append("tr");
        Object.entries(alienData).forEach(([key, value]) => {
            const cell = row.append("td");
            cell.text(value);
        });
    });
};