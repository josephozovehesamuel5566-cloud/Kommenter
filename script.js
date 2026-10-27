    console.log("Welcome to class!");

// this is single-line comment
/* 
    This is a multi-line comment
    I am currently teaching a class of 6 trainees.
    Their names are:
        1. Samuel
        2. David
        3. Eniiyi
        4. Oluwatosin
        5. Kayode
        6. Taiwo
*/ 
let myName = "Ayodeji";
let myProfession = "Software Developer";

console.log(myName);

/*
    primitive and non-primitive
*/ 

/*
    Declaring variables
        1. var
        2. let 
        3. const
*/ 


var myLocation = "Christore Building"; // declaration
console.log(myLocation);
var myLocation = "Similoluwa" // redeclaring
console.log(myLocation);

let age = 12; 

const pi = 3.14; // constant value

let username; // declaration
username = "Light"; // initialization
username = "Light314" // reassignment

// pi = 22 / 7;
// console.log(pi);
// console.log("Hello");

/*
    Rules to follow when declaring variables:
        1. Do not redeclare a variable in the same scope
        2. Do not use keywords/reserved words as your variable
        3. Use descriptive words for your variable name.
        4. Don't start your variable name with numbers or symbols asides underscore (_) and dollar sign ($).
        5. Use camelCase, PascalCase, snake_case 
*/ 
let $1stPerson = "Kayode";

let countryOfOrigin = "Nigeria"; // camelCase
let CountryOfOrigin; // PascalCase
let country_of_origin; // snake_case (lower)
let COUNTRY_OF_ORIGIN; // snake_case (upper)
let myFavoriteColor = "white";

/*
    Datatypes are classifying data based on the type of value they hold.
        1. Primitive Datatypes
            a. Number
            b. String
            c. Boolean
            d. Undefined
            e. Null
            f. BigInt
            g. Symbol
        2. Non-primitive or Complex or Reference-type Datatypes
            a. Object
            b. Array
            c. Function
            d. Date
*/ 

// number
let numOne = 14;
let numTwo = 14.14;
let numThree = -14;

console.log(typeof numOne);
console.log(typeof numThree);
console.log(numThree);


// string
let stringOne = "A boy is coming.";
let stringTwo = "14";
console.log(typeof stringTwo);

// boolean
let isTosinMarried = true;
let isDavidGentle = false;
console.log(isTosinMarried);


console.log(typeof isDavidGentle);

let noContent;
console.log(typeof noContent);

let emptyContent = null;
console.log(typeof emptyContent);

const user1 = {
    firstName: "Samuel", // field, entry
    middleName: "",
    lastName: "Joseph",
    level: 300,
    premiumStudent: true

}; // object

console.log(user1);

const users = ["Kayode", "Eniiyi", "David", "Samuel", "Taiwo", "Oluwatosin"]; //array



function greeting (user = "user") {
    console.log(`Good day to you,`, user.toUpperCase());
}

greeting("Taiwo");
greeting("Tosin");
greeting();

const today = new Date();
console.log(today.toLocaleString("en-US"));

// computing -> Input - Processed - Output
/* 
    Number methods
        1. isNaN()
        2. parseInt()
        3. parseFloat()
        4. toFixed()
        5. Math.random()
*/

console.log(isNaN(stringOne));
console.log(isNaN(stringTwo));

// const amount = window.prompt("Enter an amount");

// console.log(typeof amount, amount);
// const convertedAmount = parseFloat(amount);
// console.log(typeof convertedAmount, convertedAmount);

const newPi = 22 / 7;
console.log(newPi.toFixed(4));

const randomNumber = Math.random() * 6;
const flooredNumber = Math.floor(randomNumber);
const roundedNumber = Math.round(randomNumber);

console.log("Random Number:", randomNumber);
console.log("Floored Number:", flooredNumber);
console.log("Rounded Number:", roundedNumber);


/*
    string methods
        1. square bracket notation
        2. toUpperCase()
        3. toLowerCase()
        4. slice()
        5. substring()
*/ 

let stringThree = "A quick brown fox jumps over the  lazy dog.";

console.log(stringThree[8]);
console.log(stringThree.toUpperCase());
console.log(stringThree);
console.log(stringThree.slice(3, 21));

let street = "similoluwa";
let postNo = 15;

let address = postNo + " " + street[0].toUpperCase() + street.substring(1).toLowerCase();
console.log(address);


let abnormalString1 = "ajAYi kaYoDe"; // Ajayi Kayode

let abnormalString2 = "fAMUyiBo eniIYI"; // Famuyibo Eniiyi


/*
    Operators
        1. Arithmetic Operators
            a. Addition Operator +
            b. Subtraction Operator -
            c. Multiplication Operator *
            d. Division Operator /
            e. Modulus Operator %
            f. Exponential Operator **
            g. Increment Operator ++
            h. Decrement Operator --

        2. Assignment Operator
            a. Simple assignment =
            b. Add and assign +=
            c. Subtract and assign -=
            d. Multiply and assign  *=
            e. Divide and assign /=
            f. Modulus and assign %=
            g. Power and assign **=

        3. Comparison Operators
            a. Equality ==
            b. Strictly Equality ===
            c. Not Equality !=
            d. Strictly not Equality !== 
            e. Greater Than >
            f. Less Than <
            g. Greater Than 0r Equals to >=
            h. Less Than 0r Equals to <=

        4. Logical Operators
            a. OR ||
            b. AND &&
            c. NOT !

        5. Ternary (Conditional) Operator ?

*/ 


console.log(2 * (5 + 6));

console.log(6 % 2 );
console.log(2 ** 4);

let numFour = 7;
console.log(numFour);
numFour++;
console.log(numFour);

let studentOne = "Ojo";
studentOne += " David";
console.log(studentOne);

console.log(11 + "11");
console.log(11 * "11");
console.log(+"11");

console.log(numFour === "8");

console.log("my password".length >= 11);


console.log(6 === "6" || 7 >= 5);
console.log(6 === "6" && 7 >= 5);

console.log(!(5 > 4));

"my password".length >= 11 ? console.log("Password accepted!") : console.log("Password cannot be less than 11 characters!");

// myVariable = window.prompt("Enter a value")

// let userAge = window.prompt("Enter your age");
// let userNationality = window.prompt("Enter your nationality");

// userAge = +userAge; // converts to a number from a string
// userNationality = userNationality.trim().toLowerCase(); // formatting the string to remove extra spaces and have the letters small letters.

// userAge >= 18 && userNationality === "nigerian" ? console.log("You are eligible to vote") : userAge < 18 && userNationality === "nigerian" ? console.log(`You are a Nigerian but not up to 18 years old! You have ${18 - userAge} years remaining to be eligible to vote`) : console.log("You are not a Nigerian and cannot vote");



/* 
    conditional statements
        1. if/else statement
        2. switch statement

*/

let score = 70; // pass mark is 45

if (score >= 70 && score <= 100) {
    console.log("You passed the assessment and you got an A!");
    
} else if (score >= 60 && score < 70) {
    console.log("You passed the assessment and you got a B!");
    
} else {
    console.log("Ouch! Unfortunately, you failed the assessment! 🥺");
    
}
let numFive = -12

if (numFive > 0){
    console.log("Number is positive!");
    
} else if (numFive < 0) {
    console.log("Number is negative");
    
} else {
    console.log("Number is 0");
    
}

let course = "Software Development";


switch (course) {
    case "Software Development":
        console.log(`Registered as ${course} trainee! Your tutor is Ayodeji Aronimo`);
        break;
        
    case "AI/Machine Learning":
        console.log(`Registered as ${course} trainee! Your tutor is Joseph Omokafe`);
        
        break;

    default:
        console.log("You are not registered!");
        
        break;
}

/** 
    Array and Array methods
        1. []
        2. length
        3. pop
        4. push
        5. shift
        6. unshift
        7. slice
        8. splice
        9. indexOf
        10. sort

*/
const attendees = ["afolabi", "oluwatosin", "victor", "Daniel", "eniiyi", "kayode", "samuel", "david", "eniiyi"];

console.log(attendees[0]);
attendees[0] = "adeboye";
console.log(attendees[0]);

console.log(attendees.length);
console.log(attendees[attendees.length - 1]);
attendees.pop();
console.log(attendees);
attendees.push("taiwo");
console.log(attendees);

const slicedAttendees = attendees.slice(2, 5);
console.log(slicedAttendees);
console.log(attendees);


const targetIndex = attendees.indexOf("eniiyi");
attendees.splice(targetIndex, 2, "adeniyi");
console.log(attendees);


attendees.sort();

console.log(attendees);

const newNumbers = [1, 5, 21, 90, 13, 35, 4, 101];
newNumbers.sort((a, b) => a - b);

console.log(newNumbers);

// The Premium Fare Calculator 


function fareCalculator (age, isStudent = false, onHoliday = false) {
    // checks if user parses an actual number as age
    if (typeof age !== "number" || age < 0) {
        return "Invalid age"
    }

    let message = "";
    let fare = 0;

    if (age < 5) {
        fare = 0
    } else if (age >= 65 || isStudent ) {
        fare += 10;
    } else {
        fare += 20; 
    }

    if (onHoliday === true) {
        fare += 5;
    }

    message = `Your transport fare is $${fare}`;
    return message;
}

console.log(fareCalculator(age = 15, isStudent = false, onHoliday = true));


const [firstAttendee, secondAttendee, ...restOfAttendees] = attendees;

console.log(firstAttendee, secondAttendee, restOfAttendees);

const nestedArray = ["one", "two", ["four", "three"], "five", [["seven", "eight"], "six"]];
console.log(nestedArray[4][0][0]);

const myObject = {
    // entries
    name: "Victor Babatunde", // name is the key and "Victor Babatunde" is the value
    school: "Achievers Universit",
    course: "Computer Science",
}

console.log(myObject);

const myTrainees = [
    {id: 1, name: "Victor Babatunde", school: "Achievers University", course: "Computer Science",},
    {id: 2, name: "David Ojo", school: "Elizade University", course: "Computer Science",},
]

/*
    object's methods
        1. accessing the values - dot notation - square bracket notation
        2. Object.keys
        3. Object.values
        4. Object.entries
        5. Object.assign
        6. Object.seal
        7. Object.freeze
*/ 
console.log(myObject.name);
console.log(myObject["course"]);
myObject.school += "y";

console.log(myObject);
console.log(Object.entries(myObject));

const remainingObject = {
    course: "Software Development",
    hobbies: ["Playing games", "Watching anime"],
    gender: "Male",
    contact: {
        tel: "+2348190572617",
        email: "victorbabatunde@gmail.com"
    },
};

remainingObject.jargon = "reyeeuudjhsjhjkhdlasdk";

delete remainingObject.jargon; // deletes the jargon field
Object.assign(myObject, remainingObject);



Object.seal(myObject);
myObject.new = "This is a new entry";
myObject.gender = "Female";
console.log(myObject);


// this keyword
const objectOne = {
    firstName: "Adeboye",
    lastName: "Agbaje",
    email: function () {
        return `${this.firstName.toLowerCase()}${this.lastName.toLowerCase()}@gmail.com`;
    }
};

console.log(objectOne.email());

/*
    Loops
        1. for loop
            a. for...of loop
            b. for...in loop
        2. while loop
        3. do...while loop
*/ 

// for loop (initialization; condition; increment or decrement)
for (let i = 0; i < 8; i++) {
    console.log("Hello World!", i);
}

for (let i = 7; i >= 0; i--) {
    console.log("Hello World!", i);

}

let product = 3 * 5;


for (let i = product; i <= 1000; i += product){
    
    console.log(`${i} is divisible by both 3 and 5.`);
}

// for (let i = product; i <= 1000; i ++){
//     if (i % product === 0){
//         console.log(`${i} is divisible by both 3 and 5.`);
//     }
// }

// for (let i = product; i <= 1000; i ++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} is divisible by both 3 and 5.`);
//     }
// }

const countries = ["Albania", "Bulgaria", "Cameroon", undefined, "Denmark", "Egypt", "Finland", "Greenland", "Hungary", "Israel"];

countries.push("Japan");

for (let i = 0; i < countries.length; i++) {

    console.log(countries[i]);

    if (typeof countries[i] === "undefined" || typeof countries[i] !== "string") {
        console.log(i+ 1 +  ". Not a string!");
        
        continue;
    } else {
        console.log(`${i + 1}. ${countries[i].charAt(0)} is for ${countries[i]}`)
    }
}

// let randomVar = undefined;
// console.log(randomVar.toUpperCase());


// while loop
// while (true) {
//     let pass = prompt("Enter your password");
//     let conPass = prompt("Confirm your password");

//     if (pass === conPass) {
//         alert("Your passwords matches! Congrats!");
//         break;
//     }

//     alert("Password does not match! Try again!")
// }

// do...while loop

let count = 0;

do {
    console.log(count);
    count++;

} while (count < 7);

for (let country of countries) {
    console.log(country);

    if (typeof country === "undefined" || typeof country !== "string") {
        console.log("Not a string!");  
        continue;
    } else {
        console.log(` ${country.charAt(0)} is for ${country}`)
    }

};

for (let index in countries){
    console.log(index, countries[index]);
    
}

const animals = [
    {name: "Antelope", habitat: "Grassland", continents: ["Africa"]},
    {name: "Baboon", habitat: "Rainforest", continents: ["Africa", "Asia"]},
    {name: "Camel", habitat: "Desert", continents: ["Africa", "Asia"]},
    {name: "Dog", habitat: "Urban", continents: ["All",]},
    {name: "Eagle", habitat: "Mountaintop", continents: ["All",]},
    {name: "Zebra", habitat: "Grassland", continents: ["Africa", ]},
    {name: "Puma", habitat: "Mountain", continents: ["Americas",]},
    {name: "Polar bear", habitat: "Tundra", continents: ["Antarctica", "North America"]},
]

for ( let animal of animals) {
    console.log(`Name: ${animal.name} \nHabitat: ${animal.habitat} \nContinents: ${animal.continents.join(" | ")} \n `);
    
}

// DOM and DOM Manipulation -> Document Object Model

console.log(document.body
)

setTimeout(() => {
    document.body.style.backgroundColor = "hotpink";

}, 5000);

const webPage = document.body;

const modalWrapper = document.createElement("div");
modalWrapper.setAttribute("class", "modal-wrapper");


const noOfSeconds = 10;
modalWrapper.textContent = `This is coming from the JavaScript part of the software! It took ${noOfSeconds} seconds for the modal to popup!`;

// setTimeout(() => {
//     webPage.appendChild(modalWrapper);

// }, noOfSeconds * 1000);


const myForm = document.getElementById("myForm");
console.log(myForm);

myForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stops the form from submitting

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    const formData = {
        fullname: fullname.value,
        email: email.value,
        password: password.value
    }

    console.log(formData);
    message.textContent = "Form submitted successfully!";
    message.style.backgroundColor = "#6ce56c7d";
    message.style.color = "green";


    setTimeout(() => {
        myForm.reset();
        message.style.display = "none";
    }, 2000);
}); 

/*
    Array Iteration Methods
        1. forEach()
        2. map()
        3. filter()
        4. reduce()
        5. some()
        6. every()
        7. find()
*/ 

const anotherNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let num of anotherNumbers) {
//     console.log(num);
    
// }

anotherNumbers.forEach((num) => {
    console.log(num * 2);
    
});

animals.forEach((animal, index, arr) => {
    console.log(`${index + 1}. ${animal.name} \n${arr[0].name}`);
    
})

const squaredNumbers = anotherNumbers.map((num) => {
    return num ** 2;

})

console.log(squaredNumbers);

const nums = anotherNumbers.forEach((num) => num + 2);
console.log(nums);

const animalsInAfrica = animals.filter((animal) => animal.continents.includes("Africa")
)
console.log(animalsInAfrica);

const evenNumbers = squaredNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);


const staff = [
    {name: "Samuel", isMarried: true},
    {name: "Jarvis", isMarried: false},
    {name: "Adeboye", isMarried: false},
    {name: "David", isMarried: true},
    {name: "Taiwo", isMarried: false},
    {name: "Boluwatife", isMarried: true},
];

const marriedStaff = staff.filter((worker) => worker.isMarried);
console.log(marriedStaff);

const singleStaff = staff.filter((worker) => !worker.isMarried);
console.log(singleStaff);

// find()
const firstMarriedWorker = staff.find((worker) => worker.isMarried);
console.log(firstMarriedWorker);

// reduce()
const squaredNumbersAggregate = squaredNumbers.reduce((total, num) => total + num, 0);
console.log(squaredNumbersAggregate);
 
console.log(staff.reduce((storage, worker) => storage + " " + worker.name, ""));

const isAnyStaffMarried = staff.some((worker) => worker.isMarried);
console.log(isAnyStaffMarried);

const areAllStaffMarried = staff.every((worker) => worker.isMarried);
console.log(areAllStaffMarried);


// creating/defining a basic function in JavaScript
function chargeLaptop (worker){
    console.log(`${worker}, get my charger from my bag`);
    console.log(`${worker}, switch on the socket`);
    console.log(`${worker}, plug the charger to the socket`);
    console.log(`${worker}, charge my laptop`);
};

// calling/invoking a function
chargeLaptop("Samuel");
chargeLaptop("David"); 

console.log(firstHalf("Adeboye", dataValidator));

// callback 
function dataValidator (string) {
    
    // data validation
    if (typeof string !== "string") return;

    if (!string.trim()) return;

    return true;
}

// function declaration higher-order
function firstHalf (string, validator) {
    const isValidated = validator(string);
    if (!isValidated) {
        return "Invalid input"
    }

    const divider = Math.round(string.length / 2);

    return string.trim().slice(0, divider);
}

console.log(firstHalf(90, dataValidator));
console.log(firstHalf("", dataValidator));
console.log(firstHalf(" ", dataValidator));
console.log(firstHalf(" David", dataValidator));
console.log(firstHalf("Samuel", dataValidator));
console.log(firstHalf("Boluwatife", dataValidator));

/*
    Types of Functions
        1. Function Declaration
        2. Function Expression
*/ 
const generateOTP = function () {
    const OTP = 100000 + Math.floor(Math.random() * 900000);
    return OTP
}
console.log(generateOTP());

/*
    Scopes
        1. Global Scope
        2. Local or Function Scope
*/ 

let globalVariable = "This is a global variable.";

// console.log(globalVariable);

const showContent = () => {
    let globalVariable = "This has been altered in the function!"; 
    let localVariable = "This is a local variable.";

    return `${localVariable} ${globalVariable}`;
};

console.log(showContent());


function syncTasks () {
    console.log("1st Synchronous Task!");
    console.log("2nd Synchronous Task!");
    console.log("3rd Synchronous Task!");
};

syncTasks();


function asyncTasks () {
    console.log("1st Asynchronous Task!");
    setTimeout (() => console.log("2nd asynchronous Task!"), 5000);
    console.log("3rd asynchronous Task!");
};

asyncTasks();

const riddles = [
    "What gets smaller every time it takes a bath?",
    " I'm not a blanket, yet I cover the ground; a crystal from heaven that doesn't make a sound. What am I?",
    "I'm sweet and cold with a stick to hold; a treat on a hot day, worth more than gold. What am I?",
    "What has a head but no brain?",
    "Why do cats make good warriors?",
    "I have a neck, but no head. I have two arms, but no hands. What am I?"
];

function riddlePicker (){
    const riddleText = document.getElementById("riddle");

    const index = Math.floor( Math.random() * riddles.length);

    riddleText.textContent = riddles[index];
    return;
   
};

/*
    Async JavaScript
        1. Callback
        2. Promises
        3. Async/await
*/ 

// callback
setInterval(() => {
    riddlePicker();
}, 2000);

// promise
const fetchPremiumUser = new Promise((resolve, reject) => {
    const premiumUsers = [];

    setTimeout(() => {
        premiumUsers.length > 0 ? resolve(premiumUsers.join(" ")) : reject("No premium user found!")
    }, 5000);
});

fetchPremiumUser
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise Operation ended!"));

// async/await

const fetchAllUsers = async () => {
    try {
        const res = await fetch("https://dummyjson.com/users"); // get response from the API endpoint

        console.log("Response:\n", res);

        if (!res.ok) {
            throw new Error("Yikes, this is not working! Try again later!");          
        }

        const data = await res.json(); // extracting the data
        const users = data.users;
        const engineers = users.filter((user) => user.company.department.toLowerCase() == "engineering");

        console.log("Users:\n", users);
        console.log("Engineers:\n", engineers);
        

        
    } catch (error) {
        console.error(error.message);
        
    }
};

fetchAllUsers();


/*
    DOM and DOM Manipulation
        1. Accessing the DOM (elements)
            a. getElementById()
            b. getElementsByClassName()
            c. getElementsByTagName()
            d. querySelector()

        2. Modifying Content
            a. innerHTML
            b. innerText
            c. textContent
            d. src
            e. href
            f. getAttribute
            g. setAttribute
            h. removeAttribute


        3. Creating elements


*/ 

const domWrapper = document.getElementById("domWrapper");
console.log("Wrapper: \n", domWrapper);


// const domText = document.getElementsByClassName("dom-text");
// console.log("Texts: \n", domText);

const domHeading = document.querySelector("h2");
console.log("DOM Heading: \n",domHeading);

const domParagraphs = document.querySelectorAll("div.dom-wrapper p");
console.log("DOM Paragraphs: \n", domParagraphs);

console.log("Heading Content:", domHeading.innerHTML);
console.log("Heading Content:", domHeading.innerText);
console.log("Heading Content:", domHeading.textContent);

const specialText = document.querySelector("#special");
specialText.textContent = "Any <strong style='color: blue;'>Text</strong>";

const myDiv = document.createElement("div");

myDiv.setAttribute("class", "dynamic-div");
console.log(myDiv);

document.body.appendChild(myDiv);

myDiv.classList.add("my-div");

setInterval(() => myDiv.classList.toggle("my-div"), 5000);

const newHeading = document.createElement("h2");
newHeading.setAttribute("class", "new-heading");
myDiv.appendChild(newHeading);
newHeading.textContent = `This is coming from Javascript: ${stringOne}`;

console.log("Animals", animals);

const myList = document.createElement("ol");

myDiv.appendChild(myList);

animals.forEach((animal, index) => {
    const item = document.createElement("li");
    item.textContent = animal.name;
    item.setAttribute("id", `animal-${index + 1}`);
    item.style.color = "white";
    myList.appendChild(item);
});


const fetchUsers = async () => {
    try {
        const response  = await fetch("https://dummyjson.com/users");

        const data = await response.json();
        // const users = data.users;
        console.log(data.users);

        const myTable = document.createElement("table");
        document.body.appendChild(myTable);
        myTable.setAttribute("border", 1);
        myTable.setAttribute("cellpadding", "5px");
        myTable.setAttribute("cellspacing", "5px");
        myTable.style.borderCollapse = "collapse";

        const tableHeading = document.createElement("tr");
        tableHeading.innerHTML = `
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
        `;
        myTable.appendChild(tableHeading);

        data.users.forEach((user, i) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${i + 1}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.maidenName}</td>
                <td>${user.age}</td>
            `       
            myTable.appendChild(row);
        });

        

        
    } catch (error) {
        
    }
} 

fetchUsers();


