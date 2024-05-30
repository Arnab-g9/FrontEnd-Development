const personName = (name) => {
  return name;
};
const age = (age) => age;
const details = (name, Page) => {
  return `the person name is ${personName(name)} && age is ${age(Page)}`;
};

const obj = {
  personName,
  age,
  details,
};
module.exports = obj;
