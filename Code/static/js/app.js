// from data.js
var tableData = data;
console.log(data)

// Append table Data from data.js to web page 
d3.select("tbody").selectAll("tr")
.data(data)
.enter()
.append("tr")
.html(function(d) {
  return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });

// Create an event listener to track users using the filter by pane
var filterButton = d3.select("#filter-btn");
filterButton.on("click", filterData);

// Function to append filtered data 
function filterData() {

    //Prevent the page from refreshing
    d3.event.preventDefault(); 

    //Save and print the date entered by user
    var userInput = d3.select("#datetime").property("value");
    console.log(userInput);

    //Filter table data by date entered by user
    function filterDate(tableData) {
      return tableData.datetime == userInput;
    };
  
    // Clear current table values
    tbody.html("");

    //Log filtered data to make sure the filter worked
    var filteredData = tableData.filter(filterInput);
    console.log(filteredData);

    //Append filtered data table to web page
    d3.select("tbody").selectAll("tr")
    .data(filteredData)
    .enter()
    .append("tr")
    .html(function(d) {
      return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
      });

  };

