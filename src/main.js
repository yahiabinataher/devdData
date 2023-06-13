const search = prompt("Search Now")
//filter data
const result = devs.filter((data) =>
 data.skill === search ||
 data.location === search || 
 data.income >= search )

// final data
const finalData = [];

//getData
result.forEach((item) =>{
    finalData.push(item)
})
//show console
console.table(finalData);


