"use strict"

// function renderCoffee(coffee) {
//     var html = '<select class="coffee">';
//         html += coffee.id;
//         html += coffee.name;
//         html += coffee.roast;
//
//     return html;
// }

// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
let mainSelectBox = document.querySelector('#displayCoffeeName');
let alterSelectBox = document.querySelector('#displayRoastType');

let selectBox = document.querySelector('.coffeeName');
selectBox.addEventListener('keypress', function selectBoxFunction(element) {
    let selectBoxOption = selectBox.value;
    let optionElement = document.querySelector('#coffeeInfo');
    let i = coffees.length;
    // optionElement.innerHTML = coffees[i].name;

    for(let i = coffees.length - 1; i >= 0; i--) {
        let html = coffees[i];
        return optionElement.innerHTML = html.name;
    }
});


// option value 1 , light , display all light coffees
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const tbody = document.querySelector('#coffeeInfo');

const roastSelection = document.querySelector('#coffeeName');
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     const selectedRoast = roastSelection.value;
//     const filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     roastSelection.innerHTML = renderCoffees(filteredCoffees);
// }
//
// const submitButton = document.querySelector('#submit');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);
