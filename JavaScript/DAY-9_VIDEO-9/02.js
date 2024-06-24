// select element by querySelector
const mnHeading = document.querySelector('#main-heading')
console.log(mnHeading)

const header = document.querySelector('.header')
console.log(header)

const navItem = document.querySelector('.nav-item')
console.log(navItem) // there are three nav Item with the same class name. if we select the class then it will only give the first element.

// if we want all the nav-items which is use the same class then we can do via this way-
const allNavItems = document.querySelectorAll('.nav-item')
console.log(allNavItems)

// change the main heading text using js
const mainHeading = document.querySelector('#main-heading');
console.log(mainHeading.textContent)
console.log(mainHeading.innerText)

// differnece between textContentand innerText is ------------------------
// textContent will givethe text that are inside an element if the textis hidden then also it will show. And on th other hand tne innerText will only show the text that is only visiable to the screen for the selected element. like in mainHeading element there is a span tag in which Hello text is written and the property of it is none. so the text will not appear on the screen. So in case of textcontent it will show the whole text includeing Hello but on the other hand for the innerText it will show only the text which is visible to the screen.

// mainHeading.textContent = "Arnab Ghorai"
