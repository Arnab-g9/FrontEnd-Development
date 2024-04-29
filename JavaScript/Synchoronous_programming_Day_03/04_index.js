console.log("hello");
const body = document.body;
const button = document.querySelector("button");
const intervalid = setInterval(function () {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  //   console.log(rgb);
  body.style.background = rgb;
}, 1000);
button.addEventListener("click", () => {
  clearInterval(intervalid);
  button.textContent = body.style.background;
});
console.log(intervalid);
