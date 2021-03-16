debugger;
var locationZip = 94102;

filteredZips = data.filter(location => location["Source Zipcode"] === locationZip); //=== looks at the variable and data type

console.log(filteredZips);
console.log(filteredZips.length);