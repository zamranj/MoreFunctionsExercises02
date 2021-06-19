//Create an anonymous fucntion and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */
let practice = function(arg){
  if(typeof arg === "number"){
    return arg*3;
  }else if(typeof arg === "string"){
    return "ARRR!";
  }else{
    return arg;
  }
}

console.log(practice(5));
console.log(practice("cat"));
console.log(practice(false));


/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];



let modifyArray = arr.map(practice);

console.log(arr);
console.log(modifyArray);