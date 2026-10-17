let arr=[10,20,30,40,50, "shashi", true, null, undefined];
console.log(arr); 
console.log(typeof arr);
console.log(arr[0]);
console.log(arr.length);
console.log(arr[6]);
console.log(typeof arr[6]);
console.log(arr[arr.length-2]);
console.log(typeof arr[arr.length-2]);

console.log(arr.push("kant"));
console.log(arr);
arr.unshift(5);
console.log(arr);
console.log("================================");
let arr1=[10,20,30,40,50, "shashi", true, null, undefined];
let arr2=["css", "html", "javascript"];
arr1.push(arr2);
console.log(arr1);
console.log(arr1[9][1]);
console.log("================================");
 let boject1={
    name:"shashi",
    age:25, 
 }

 arr1.push(boject1);
 console.log(arr1);
 console.log(arr1[10].name);
 console.log(arr1[10]["age"]); 

 console.log("================================");

 for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
 }