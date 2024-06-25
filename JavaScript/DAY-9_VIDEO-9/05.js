// get multiple elements using getElement by class name
// get multiple elements using querySelectorAll
// array like object ---> indexing, length property

// using getElementByClassName method we can select multiple elements --- it will give htmlCollection
const navItems = document.getElementsByClassName("nav-item")
console.log(navItems) //this will givearray of nav elements and we can access those elements like array elements
console.log(typeof navItems, Array.isArray(navItems))
console.log(navItems[1])
// we can not use forEach method to iterate through HTMLCollection
// make the each link elements background color white
let navEle = document.getElementsByTagName("a")
for(let i=0; i<navEle.length; i++){
    // console.log(navItems[i])
    const navItem = navEle[i];
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
}

console.log("using for of loop on HTMLCollections")
for(let navItem of navEle){
    console.log(navItem)
}

// console.log("usinf forEach loop on HTMLCollections")
// navEle.forEach(navItem=>console.log(navItem)) --> so in HTMLCollections we can only use simple for loop and for of loop but we can not use forEach loop

// we can not use forEach on HTMLCollections but we can convert the HTMLCollections into an array
navEle = Array.from(navEle); // Array.form() method convert the htmlCollections into an array.
console.log(Array.isArray(navEle)+" navEle")



// select multiple elements using querySelectorAll -- it will give NodeList
const navElements = document.querySelectorAll(".nav-item")
console.log(navElements)
console.log(typeof navElements, Array.isArray(navElements))
console.log(navElements[0])

// in NodeList type we can use sime for loop, for of loop, forEach loop

// using simple loop
console.log("using simple for loop")
for(let i=0; i<navElements.length; i++){
    console.log(navElements[i])
}

// using forEach loop
console.log("using forEach loop on NodeList type")
navElements.forEach((navItem)=>console.log(navItem))

// using for of loop
console.log("using for of loop")
for(let navElement of navElements){
    console.log(navElement)
}

