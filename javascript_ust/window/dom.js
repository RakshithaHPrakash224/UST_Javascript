let h1Element = document.getElementById('demo')
console.log('Element = ',h1Element)

console.log('Element Text = ', h1Element.textContent)
h1Element.textContent = 'Good Evening'
console.log(h1Element.textContent)

console.log("=====================")

let buttonElement = document.createElement('button')
buttonElement.textContent = 'Click me!!'
console.log('Button Element',buttonElement)

document.body.appendChild(buttonElement);
let ulElement = document.createElement('ul')
let li1Element = document.createElement('li')
let li2Element = document.createElement('li')
let li3Element = document.createElement('li')


li1Element.textContent ='JAVA'
li2Element.textContent ='SQL'
li3Element.textContent ='JAVASCRIPT'


ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)
ulElement.appendChild(li3Element)
document.body.appendChild(ulElement)

h1Element.style = "color:red"
h1Element.style.color = 'red'
h1Element.style.fontSize ='50px'



console.log("=====================")

function ShowMessage(){
    alert('you have entered the wrong message');
}

function changeColor(){
    let pElement = document.getElementById('mover')
    pElement.style.color = 'green'
}

function removeColor(){
    let pElement = document.getElementById('mover')
    pElement.style.color = 'black'
}

function printHello(){
   // console.log('Hello')
   let userName = document.getElementById('username').value
   document.getElementById('showusername').textContent = userName;
}

let name='Rakesh'
let age = 21
let phoneno = 7892315482
console.log('Name is '+name + ' Age is '+age+ ' Phone no is '+phoneno)
console.log(`Name is ${name} Age is ${age} Phone no is ${phoneno}`)
console.log(`   2+2=${2+2}`)
