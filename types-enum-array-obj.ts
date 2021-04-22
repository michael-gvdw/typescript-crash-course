
function add(num1: number, num2: number, printResult: boolean) {
    if (printResult) {
        console.log(num1 + num2)
    }
    else {
        return num1 + num2
    }
}

function sayHi(name: string) {
    console.log(`Hello ${name}`)
}

const n1 = 3
const n2 = 2.8

const printResult: boolean = false

const result = add(n1, n2, printResult)
console.log(result)
sayHi('Mike')

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // <-- tuple
} = {
    name: "michael",
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

console.log(person.name)


let favouriteActivities: any[]
favouriteActivities = ['Sports', 1]

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

person.role.push('admin') // <-- push does work on tuple
person.role[0] = 9

for (const role of person.role) {
    console.log(role)
}

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person1 = {
    name: "michael",
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
}

if (person1.role === Role.AUTHOR) {
    console.log('is author')
}