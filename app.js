// 5 ways to select an element in your HTML

// 1. GetElementById()

// 2. GetElementByClassName()

// 3. GetElementByTagName()

// 4. querySelector()

// 5. querySelectorAll()


// querySelector only grabs the first one it finds (top-down)

// querySelector() and querySelectorAll() allow you to select an element and apply a CSS style to it 


// EXAMPLES

// 1. const title = document.getElementById('{IDname}');

// 2. const listItem = document.getElementsByClassName('{CLASSname}');

// 3. const listItem = document.getElementsByTagName('{HTMLTAG}');

// 4. const container = document.querySelector('div');

// 5. const container = document.querySelectorAll('div');



// CHANGE THE STYLING OF AN ELEMENT

// const title = document.querySelector('main-heading');

// title.style.color = 'red';

// NOTE!!! This will only apply to a single element 



// CHANGE THE STYLING OF MULTIPLE ELEMENTS(LOOPS NEEDED)

// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].getElementsByClassName.fontSize = '5rem';
// }

// NOTE!!! CSS property needs to be written in camelCase in JS



// CREATING ELEMENTS 

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li)


// MODIFYING THE TEXT

// <ul>
//     <li class='list-items'>
//         <span>Neo</span>
//         The Matrix
//     </li>
// </ul>

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);

//     Neo The Matrix (as displayed)

//     NOTE!!! visibly displayed on the webpage

// console.log(firstListItem.innerContent);

//     Neo
//     The Matrix

//     NOTE!!! how it's displayed in the HTML file

// console.log(firstListItem.innerHTML);

//     <span>Neo</span>
//     The Matrix

//     NOTE!!! how it's displayed in the HTML file with any tags as well


// MODIFYING ATTRIBUTES & CLASSES

// li.innerText = 'X-men'

// li.setAttribute('id', 'main-heading');

//     NOTE!!! Can use getAttribute to find out what the ID name is 

// li.removeAttribute('id');


// li.classList.add(list-items);

//     NOTE!!! Can use li.classList.remove('list-items');
//     NOTE!!! Can use li.classList.contains('list-items'); to see if an element has a certain id or class


// REMOVE ELEMENTS

// li.remove();