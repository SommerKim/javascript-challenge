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

function getOption() {
    selectElement = 
            document.querySelector('#select1');
              
    output = selectElement.value;

    document.querySelector('.output').textContent
            = output;
}

// Event handler function for the form
function runFilter () {

    // Prevent page from automatically refreshing
    d3.event.preventDefault();

    // Select input element
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get value property of input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");

    // Get requested data
    var filteredData = tableData.filter(datum => datum.datetime ===dateValue);

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