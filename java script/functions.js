//function => a fn is a reusable block of code .
//fn declaration  and fn calling
function sum(a,b){
    // console.log(`sum is : - ${a+b}`)
    return a+b 
}
//calling
// sum(12,45) 
//1.no return , no parameter 2. return , no paramete 3. no return , parameter
//4. return , parameter
// console.log(sum(34,12))
// value of pi 
// function pi(){
//     return 3.14
// }
//2. function expression => 
// let cube = function(a){
//     return a**3
// }
// console.log(cube(33))
//3. arrow function =>
// let cube = (a) => {
//     return a**3
// }
//there is only return , then there is no need to return or {}
// let cube = a =>  a**3
// console.log(cube(33))

//call back fn => a fn that is passed as an argument to another fn and call inside
//it
// function multipleBy3AndProcess(a , cb_fnc){
//     a=a*3
//     let x = cb_fnc(a)
//     return x
// }
// function divideBy5(a){
//     return a/5
// }

// let res = multipleBy3AndProcess(25,divideBy5)
// let res1= multipleBy3AndProcess(42,x=>x*7)
// console.log(res ,res1)
//make a fn to calculate sum of and array
//make a fn to calculate max and min in an array
// make a fn to reverse an array (without method)











