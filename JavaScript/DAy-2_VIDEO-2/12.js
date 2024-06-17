// Object destructuring

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// in case of object destructuring the key name should be same -- like below example
// const { bandName, famousSong } = band;
// console.log(bandName, famousSong);

// in case of object destructuring the if we wnat to changethe varible's name then we can write like this--
const { bandName: var1, famousSong: var2 } = band;
console.log(var1, var2); // then we have to use this new variable name to access the values of the object

// if we wnat to rest values inside another objectthen we can use rest operator.
const { bandName, famousSong, ...restProps } = band;
console.log(bandName, famousSong, restProps);
