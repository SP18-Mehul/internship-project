// Define A function


function myFunction(a, b) {
    return a * b;
  }
 
//   Both ways of calling the function will give same output

 myFunction(1,2)              
window.myFunction(1,2)



// Sum of arguments

function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
        
    }
    return sum;
}
let x = sum(10, 20, 30);
console.log(x);


// Maximum Number in an array

function maxAll(a){
    let max=-Infinity;
    for (let i=0; i<a.length;i++){
        if (a[i]>max){
            max=a[i];
        }
    }
    return max;
}
console.log(maxAll([10,20,40,30,80]));



// How to Call Function As Method

const myObject = {
    firstName:"A",
    lastName: "B",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
myObject.fullName();



// Call A function with Function Constructor

function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

const myObj = new myFunction("John","Doe")
document.getElementById("demo").innerHTML = myObj.firstName; 

// JAVASCRIPT Call() METHOD  (take the fullname of person 1 as we call person 1)


const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"hello",         
    lastName: "world"
  }

person.fullName.call(person1)



// JAVASCRIPT Call() METHOD  (take the fullname of person 2 as we call person 2)

onst person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person2 = {
    firstName:"mehul",         
    lastName: "bajaj"
  }

person.fullName.call(person2)


// JAVASCRIPT APPLY METHOD


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"mehul",
    lastName: "bajaj"
  }
  
person.fullName.apply(person1, ["delhi", "india"]); 



// Difference BTW APPLY METHOD AND CALL METHOD IS :

// The Apply() method takes an argument as an Array
// The Call() method takes an argumet as sequence seperated by commas
 
