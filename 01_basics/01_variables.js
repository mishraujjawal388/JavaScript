const accountId = 144443 //it does not change
let accountEmail = "ujjawal@ujjawal.com"
var accountPassword = "12345"
accountCity = "Varansi"
let accountState;
// accountId = 5 // not allowed

// to check our data now we open our terminal and write node (because we working in node js) and write our file name like : node 01_basics/01_variables.js 

accountEmail = "shubham.1@g.com"
accountPassword = "63"
accountCity = "lucknow"

console.log(accountId);

// for run all data in console we use console.log for every data
// so we use console.table([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // it gives data in tabular form
/*
prefer not use var
because of issue in block scope and functional scope
scope = {}
*/