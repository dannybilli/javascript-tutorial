// window.alert("I really love PIZZA") 


// this is a double line comment 
/* this
// is 
 money*/

//  Variables in Javascript 

/*Variable is a container used for storing single Data

Two steps in naming a variable in javascript

1. Declaration (var, let, const);
2. Assignment(= assignment operator)

Strings, Numbers, Boolean, Null, undefined
*/

let myname = 'Daniel';
const firstname = "Bekee";//strings Datatype
var age = 21; //integer datatype
var count = 22.1; //float datatype
let ages = "21";// string datatype '21' + 1= 211
let student = false; //Boolean datatype
let k= null; //null datatype
let country; // undefined datatype

console.log(myname);
console.log(firstname);
console.log(age);

age = age + 1;

ages = ages + 1;

console.log(age);
console.log(ages)

// Arithmetics in Javascript 

/*
It is a combination of 
operands (values, variables, etc)
opeartors (+ - * / %)
that can be evaluated to a value 
EventTarget. y = x + 5 

*/

let students = 30;

let math1 = students + 1;
let math2 = students - 1;
let math3 = students *1;
let math4 = students / 3;
let extrastudents = students % 4;

console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);
console.log(extrastudents);

students +=1; //means "Students = students +1"
students -=1;
students *=2;
students /=2


/*Concatenation in Javascript*/

/*concatenation is a way or method of adding or joining two or more variables together in javascript*/

const firstnamez = 'Daniel';
const agez = 29;
const paragraph = 'my name is' +firstnamez + 'and I am ' +agez+ 'years old';
console.log(paragraph)

//template string
// console.log(my name ${firstnamez} and I am ${agez} years old);
// const hello = my name ${firstnamez} and I am ${agez} years old;

// console.log(hello);

/* String Functions in Javascript*/

let stringLetter = 'Hello world';

console.log(stringLetter);

console.log(stringLetter.length)

console.log(stringLetter.toUpperCase());

console.log(stringLetter.toLowerCase());
console.log(stringLetter.substring(0,7).toUpperCase());

/*----------ARRAYS----------*/
/*
Arrays are variables that hold multiple values
*/

new Array();
[]

const numbers = new Array(1,2,3,4,55,6);

const multipleDatatype = [ 'hello', 'banana', 2, false]

console.log(numbers);

 const fruits = [ 'apple', 'orange', 'grape', 'banana'];

 fruits[4] = 'pear';// const fruits =['apple', 'orange', 'grape', 'banana', 'pear'];

 //How to Add ITEMS INSIDE YOUR  ARRAY
 //push() adds item at the the end of your array while unshift() adds at
 // the beginning of your array

 fruits.push('mangos'); //const fruits = ['apple','orange','grape', 'banana', 'pear', 'mangos']
 fruits.unshift('strawberry');//const fruits = ['strawberry','apple','orange','grape', 'banana', 'pear', 'mangos']

 // How to Remove Items inside Your Array
 //pop() removes item at the last item in your array while shift() removes
 // the first item in your array

 fruits.pop();//const fruits = ['strawberry','apple', 'orange', 'grape', 'banana', 'pear']
 fruits.shift(); //const fruits = ['apple', 'orange', 'grape', 'banana', 'pear']

 console.log(fruits);

 //Arrays are zero based
 console.log(fruits[1]);
 console.log(fruits[0]);
 console.log(fruits[3]);

 //Classwork

 const animals = ['kangaroo', 'antelop', 'Mongoose', 'Ostritch', 'Gorilla'];

 /* Questions
 1. output the second item of the array on your console
 2. Add 'Lion' to the beginning of the array
 3. Add 'Zebra' to the ending of the array
 4. Output the values of animals array on your console */

 console.log(animals[1]);
 animals.unshift('Lion');
 animals.shift('Zebra');
 console.log(animals);

 //OBJECTS IN JAVASCRIPT
 const person = {
    firstName: 'John',
    lastName: 'Doe',
    Age: 30,

    hobbises: ['music', 'movies', 'sports'],

    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
 }

//Desturing, is the pulling of variabkes or values from an object. example

const { firstName, lastName, address: {state, city}} = person;

console.log(lastName);

//OR

//How to access or get vairables in an object in Javascript
console.log(person.firstName, person.lastName);

//How to access or get value of object in an object in javascript\
console.log(person.address.city)


person.email = 'bekeedaniels@gmail.com'

console.log(person);

//Arrays of object
const NavBarList = [
{
    id: '1',
    name: 'Home'

},
{
    id: '2',
    name: 'About Us'
},
{
    id: '3',
    name: 'Service'
},
{
    id: '4',
    name: 'Contact Us'
}
]

//LOOPS IN JAVASCRIPT

// TYPES OF LOOPS
// 1. FOR LOOP
/* 
    for loop, it takes 3 parameters, first is the initializer, secons is the condition to be met, 
    third is the increment
    */
const basket = ['mango', 'apple', 'orange', 'grape'];

for(let m=0; m< basket.length; m++){
    console.log(basket[m]);

}

//Classwork
//use for loop to output the values of array i.e wildAnimals in your console
let wildAnimals = ['lion', 'tiger','python', 'wolve', 'leopard'];

for (let m = 0; m < wildAnimals.length; m++) {
    const element = wildAnimals[m];
    
}

//2. while loop (old school)

let i = 0;
while (i < wildAnimals.length){
    console.log(wildAnimals[i]);
    i++;
}

const todoss = [
    {
        id:1,
        text:'Takenout trash',
        isCompleted: true
    },
    {
        id:2,
        text:'meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Desntist appointment',
        isCompleted: false
    },

];

//3. for of loop in Javascript

for ( let daniel of todoss){
    console.log(daniel.id);
    console.log(daniel.text);
}

//4. forEach
 
todoss.forEach(daniels =>{
    console.log(daniels.text);
});

todoss.forEach(function(todo){
    console.log(todo.id);
});

//. map 
todoss.map(function(todo){
    console.log(todo.text);
})

//Filter
const todoCompleted = todoss.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    
    return todo.text;
});

console.log(todoCompleted);




// ==& == (the data type matches for ==== same datatype and == for not same datattype)

//if Statement in Javascript

const ipAddress_Nigeria = 112324;
const ipAddress_USA = 223445;

if (ipAddress_USA === ipAddress_Nigeria){
    console.log('Welcome to our Website');

}else{
    console.log('does not support your country');
}

let x = 20;

if(x===10){
    console.log('x is greater than 10');
}else{
    console.log('x is less than 10');
}

const y = 4;
const z = 10;

if (y > 5 || z > 9){
    console.log('y is  more than 5 or z is more than 10');
}

if (y > 5 && z > 9){
    console7.log('y is more than 5 or z is more than 10');
}

//tenary operators, is like a shorthand IF statement, it is used alot to assign variable based on condition

const agesGrade = 17;
 
const output = agesGrade >= 18 ? 'red' : 'blue';
console.log(output);

//SWITCH STATEMENT
let CarColor = 'purple';

switch(CarColor){
    case 'red':
        console.log('color is red');
        break;
        
    case 'blue':
        console.log('color blue');
        break;
    default:
    console.log('Color is NOT red or blue')
}


//Functions
// Normal Function

function goodmorning(){
    console.log('Good morning Dear')
}
goodmorning();

function lesi(){
    console.log('Lesi ')
}