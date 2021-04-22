function add(num1, num2, printResult) {
    if (printResult) {
        console.log(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
function sayHi(name) {
    console.log("Hello " + name);
}
var n1 = 3;
var n2 = 2.8;
var printResult = false;
var result = add(n1, n2, printResult);
console.log(result);
sayHi('Mike');
var person = {
    name: "michael",
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
console.log(person.name);
var favouriteActivities;
favouriteActivities = ['Sports', 1];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
person.role.push('admin'); // <-- push does work on tuple
person.role[0] = 9;
for (var _b = 0, _c = person.role; _b < _c.length; _b++) {
    var role = _c[_b];
    console.log(role);
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person1 = {
    name: "michael",
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
if (person1.role === Role.AUTHOR) {
    console.log('is author');
}
