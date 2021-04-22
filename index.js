// let userInput: unknown;
// let userName: string;
//
// userInput = 5;
// userInput = 'mike';
//
// userName = userInput
var userInput;
var userName;
userInput = 5;
// userInput = 'mike';
userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(generateError('An error occurred', 500));
