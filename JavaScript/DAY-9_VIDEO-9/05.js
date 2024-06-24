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
const navEle = document.getElementsByTagName("a")
for(let i=0; i<navEle.length; i++){
    // console.log(navItems[i])
    const navItem = navEle[i];
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
}



// select multiple elements using querySelectorAll -- it will give NodeList
const navElements = document.querySelectorAll(".nav-item")
console.log(navElements)
console.log(typeof navElements, Array.isArray(navElements))
console.log(navElements[0])
