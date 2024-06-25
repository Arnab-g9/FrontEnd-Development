// innerHTML
const headline = document.querySelector(".headline")
// console.log(headline.innerHTML)
headline.innerHTML = "<h1>Inner html changed</h1>"
headline.innerHTML+="<button class=\"btn\"> Learn More </button>"
//here \ is escape character sequence when we try to use inverted comma into inverted comma
// headline.innerHTML+=`<button class="btn"> Learn More </button>`