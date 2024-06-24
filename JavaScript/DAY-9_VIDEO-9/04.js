// get and set attributes
const link = document.querySelector("a")
console.log(link)

// using getAttribute() Method
console.log(link.getAttribute("href"))
const inputElement = document.querySelector(".form-todo input");
console.log(inputElement)
console.log(inputElement.getAttribute("type"))

//  using setAttribute() Method
link.setAttribute("href", "https://codprog.com")
console.log(link.getAttribute("href"))