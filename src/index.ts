// let userInput: unknown;
// let userName: string;
//
// userInput = 5;
// userInput = 'mike';
//
// userName = userInput

let userInput: any;
let userName: string;

userInput = 500;
// userInput = 'mike';

userName = userInput

console.log("Hello World")

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error occurred', userInput)
