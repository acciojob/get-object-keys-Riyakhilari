const myObj = {
    name: "John",
    age: 25,
    getKeys: function () {
        return Object.keys(this);
    }
};

console.log(myObj.getKeys());
