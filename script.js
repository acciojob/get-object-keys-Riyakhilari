const student = {
  name: "John"
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student));

// Do not change the code below this line
window.student = student;
window.getKeys = getKeys;
