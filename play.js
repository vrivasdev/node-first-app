var userName = 'Víctor';
var age = 37;
var hasHobbies = true;

const summarizeUser = (name, age, hasHobbies) => {
    return (
        ' Name: ' + name + 
        ' Age: ' + age + 
        ' User has hobbies: ' + hasHobbies
    );
}

const sum = (a, b) => a + b;

console.log(summarizeUser(userName, age, hasHobbies));
console.log('Result: ' + sum(2,5));