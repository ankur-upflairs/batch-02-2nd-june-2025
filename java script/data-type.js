// js => client side scripting language used to make webpages interactivee and dynamic 
//variable => it is a name of memeory location that stores a value
// keyword variable_name;
//let/const /var
let a;
// variable_naming_rules => it can contain alphabets and nos
//cant start with a no    eg - let 1a 
//only _ and $ can be used in a name
// -------------
//semicolons are optional
/*multi-line 
comment */
// data-types 
// 1.Number 2.string 3.boolean 4.null 5.undefined 6.bigInt 7.symbol
//array and object  

// let b= 23
// let c = 45.4
// console.log(b)
// console.log(typeof c)

// string 
// let d = "sunil"
// console.log(typeof d)

//boolean 

// let e = true
// let f =false
// console.log(typeof e)

//undefined
// let g;
// console.log(g,typeof g)

//null
// let h = null
// console.log(typeof h)

//bigInt 
// let i = 2324344555656n
// console.log(typeof i)

let s1 = Symbol('a')
let s2 =Symbol('a')

// console.log(s1 == s2)
// console.log(typeof s1)

//array => it is a collection of data types( values)
// let j = [23,'h', true]
// console.log(typeof j)
// console.log(Array.isArray(j))

// object => key - value 
let person ={
    name:'Gagan',
    age:23,
    marks:[23,12,24],
    contacts:{
        email:'a@b.com'
    },
    totalMarks: function(){
        return this.marks[0]+this.marks[1]+this.marks[2]
    }
}

// console.log(person.name)
// console.log(person.marks[1])
console.log(person.contacts.email)

console.log(person.totalMarks())



