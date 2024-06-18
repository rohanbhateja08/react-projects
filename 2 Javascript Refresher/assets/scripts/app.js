//import { apikey } from "./util";

//#region arrowFunctions
// function getUserName(firstName, lastName) {
//     console.log(firstName + ' ' + lastName);
// }

// getUserName = (firstName, lastName) => {
//     console.log(firstName + ' ' + lastName);
// }

// getUserName = (firstName, lastName) => console.log(firstName + ' ' + lastName);

// getUserName = firstName => console.log(firstName);
// getUserName = firstName => "This is my first Name - " + firstName;

// console.log(getUserName('Rohan','Bhateja'));

//#endregion

//#region objectsAndClasses
var user = {
  name: "Rohan",
  age: 24,
  getUserName() {
    console.log("Name = " + this.name + " and age - " + this.age);
  },
};

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserName() {
    console.log("Rohan Bhateja");
  }
}

var user1 = new User("Rohan", 24);
console.log(user1);
user1.getUserName();
user.getUserName();
//#endregion

//#region arrays&ArrayMethods and SpreadOperator
const hobbies = ["Sports", "cooking", "gym"];
const newHobbies = ["learning react", "learning xm cloud"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(hobbies[0]);
console.log(mergedHobbies);

hobbies.push("table tennis");
console.log(hobbies);

// findIndex is used to find the index of the element stored in the array
const index = hobbies.findIndex((item) => item == "table tennis");

// map is used to transform array elements from one state to another
const mapArray = hobbies.map((item) => item + ".");

//we can create object types also inside the function we need to used wrap object {} with ()  - ({})
const editedMapArray = hobbies.map((item) => ({
  text: item,
  updatedText: item + ".",
}));

console.log(index);
console.log(mapArray);
console.log(editedMapArray);
//#endregion

//#region destructuring and SpreadOperator
// if we have a array of 2 elements and we want to destructure the elements into separate variables, we use below syntax
const [firstName, lastName] = ["Rohan", "Bhateja"];
console.log(firstName);
console.log(lastName);

//since name is a keyword we want to use alias we can use : symbol and assign some other name
const { name: userName, age } = { name: "Rohan", age: 24 };
console.log(userName);
console.log(age);

var userDetails = { userName: "Rohan", age: 24 };

//Spreadoperators ... used to extent array and object
var extendUserDetails = { isAdmin: true, ...userDetails };
console.log(extendUserDetails);

getUserDetails = ({ userName, age }) => {
  console.log("username - " + userName + " &  age - " + age);
};
getUserDetails(userDetails);
//#endregion

//#region functionsAsValues
handleTimout1 = () => console.log("Time Out 1");
handleTimout2 = () => console.log("Time Out 2");

setTimeout(handleTimout1, 2000);
setTimeout(handleTimout2, 3000);
setTimeout(() => {
  console.log("Time Out 3");
}, 4000);

function getDetails(details) {
  details("UserName - Rohan Bhateja");
}

//here we are passing function definition as an argument
//now details = () => console.log("Details function definition here")
//and then we called details() function
getDetails((userName) => console.log("Details function definition here" + userName));
//#endregion

//#region functionInsideFunction
function init()
{
    function greet(){
        console.log("Hi..");
    }

    greet();
}
init();
//#endregion