/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
EVERY EXERCISE SHOULD USE DESTRUCTURING*/

//Create an object out of the arr above then using destructuring, declare variables using the object keys.

let arr1 = [
   ['name', 'jon'],
   ['age', 20],
   ['eyes', 'blue'],
   ];

 let [name, age, eyes] = arr1

 let obj1 = {
   [name[0]]: name[1],
   [age[0]]: age[1],
   [eyes[0]]: eyes[1],
  };
  console.log(obj1);
  
  // Use object method:
  let obj2 = Object.fromEntries(arr1)
  console.log(obj2)
  
  // declare variables using the object keys.
  let obj3 = {}
  obj3.name = name[1]
  obj3.age = age[1]
  obj3.eyes = eyes[1]
  console.log(obj3);
  
let arr2 = [1,2,3,4,5,6];
  //a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
  let [,,three, four, ...rest] = arr2;
  console.log(three);
  console.log(four);
  console.log(rest);
  
  //b. Swap the third and fourth item variable values
  [three,four] = [four, three];
  console.log(three);
  console.log(four);
  
