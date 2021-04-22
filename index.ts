// let userInput: unknown;
// let userName: string;
//
// userInput = 5;
// userInput = 'mike';
//
// userName = userInput

let userInput: any;
let userName: string;

userInput = 5;
// userInput = 'mike';

userName = userInput

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error occurred', 500)