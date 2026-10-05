/**
    /--  String Datatype --/
let fullname="shahikant"
// console.log(fullname)
console.log(typeof fullname)

let lname=new String("kannaujia")
console.log(lname)
console.log(typeof lname)
 */

let fname="shahikant kannaujia"
console.log(fname.length)
console.log(fname[2])
console.log(fname.includes("shahikant"))
console.log(fname.includes("Shahikant"))
console.log(fname.startsWith("shahikant"))
console.log(fname.endsWith("Kannaujia"))
console.log(fname.indexOf("k"))
console.log(fname.split(" "))
console.log(fname.toUpperCase())
console.log(fname.toLowerCase())
console.log(fname.trim())