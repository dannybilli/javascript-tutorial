//DOM Document Object model
// SELECTORS IN JAVASCRIPT

// document.querySelector('hi');
// document.getElementById('wrapper');
// document.querySelectorAll('hi');
// document.getElementsByClassName('');
// document.getElementsByTagName('');

// // EXAMPLE
let preciousContainer = document.querySelector('#precious');
let EmmaBox1 = document.querySelector('#box1')
let hi = document.querySelectorALL('#box1')
const secondHi = document.getElementsByTagName('div');

//Eventlisterners in Javascript
// examples of Event listerners


/* Click Event
dblclick Event
mouseover event
mouse levae
mouse enter event
load event
change event
scroll event
mousemove event
input event
focus event */



let box1= document.querySelector('#box1');
let box2 = document.querySelector('box2');
let box3 = document.querySelector('#box3');


//DOUBLE CLICK EVENT

box1.addEventListener('dblclick', function(){
    alert.apply('Favour is learning Javascript')
});

//CLICK EVENT 
function AddAlert(){
    //window.alert('hello world')
}

setInterval(() => {
    AddAlert()
}, 6000);

box2.addEventListener('click', function(){
    box1.style.width = '80%';
    box2.style.width = '80%';
    box2.style.backgroundColor = 'orange';
    box3.style.width = '60%'
})
//box1.addEventListener('click', function(){
// alert('favour is learning javascript')})

//MOUSE-ENTER EVENT
box1.addEventListener('mouseenter', function(){
    box3.style.backgroundColor = 'green';
})

//MOUSE LEAVE EVENT
box3.addEventListener('mouseleave', function(){
    box3.style.backgroundColor = 'fuchsia'
})
