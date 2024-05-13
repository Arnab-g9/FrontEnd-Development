// function inside function

const app = () => {
  const myFunc = () => {
    console.log("hello from myFunc");
  };
  const addTwoNum = (num1, num2) => {
    return num1 + num2;
  };
  const mul = (num1, num2) => {
    return num1 * num2;
  };
  console.log("inside app");
  myFunc();
  console.log(addTwoNum(2, 3));
  console.log(mul(2, 3));
};
app();
