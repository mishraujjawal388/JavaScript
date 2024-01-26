let score = 33

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false = 0;

let isLoggedIn = 1

isLoggedIn = 10
isLoggedIn = 0
isLoggedIn = "ujjawal"
isLoggedIn = ""
let BooleanisLoggedIn = Boolean(isLoggedIn)

// console.log(typeof isLoggedIn);
// console.log(isLoggedIn);
console.table([isLoggedIn, typeof isLoggedIn, BooleanisLoggedIn, typeof BooleanisLoggedIn])

// 1 => number/true
// 10 => number/true
// 0 => number/false
// "ujjawal" => string/true
// "" => string/false