const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

setTimeout(() => {
  heading1.textContent = "one";
  heading1.style.color = "red";
  setTimeout(() => {
    heading2.textContent = "two";
    heading2.style.color = "yellow";
    setTimeout(() => {
      heading3.textContent = "three";
      heading3.style.color = "red";
      setTimeout(() => {
        heading4.textContent = "four";
        heading4.style.color = "red";
        setTimeout(() => {
          heading5.textContent = "five";
          heading5.style.color = "red";
          setTimeout(() => {
            heading6.textContent = "six";
            heading6.style.color = "red";
            setTimeout(() => {
              heading7.textContent = "seven";
              heading7.style.color = "red";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
