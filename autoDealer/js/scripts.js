const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#theButton')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')
})

import {customers}  from '../data/customers.js'
console.log(customers)

const myTarget = document.querySelector('#reviews')

for (let x = 0; x < customers.length; x++) {
    let myName = document.createElement('h4')
    myName.innerHTML = `<h4>${customers[x].name}</h4>`

    let myReview = document.createElement('p')
    myReview.innerHTML = `<p>${customers[x].review}</p>`

    myTarget.appendChild(myName)
    myTarget.appendChild(myReview)
}