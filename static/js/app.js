// import the data from data.js
const tableData = data;

// Reference the HTML table using D3. d3.select is telling JS to look for the <tbody> tags in the HTML page
var tbody = d3.select('tbody');

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  function handleClick(){
      let  date = d3.select("#datetime").property("value"); //Chaining .property("value"); to the d3.select function, it tells D3 not only to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable.
      let filteredData = tableData; //table data was assigned at the beginning. It's acting as the Raw/original data. This is being assigned to filteredData to give us a blank slate.

  }