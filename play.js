var userName = 'Víctor';
var age = 37;
var hasHobbies = true;

function summarizeUser(name, age, hasHobbies) {
    return (
        ' Name: ' + name + 
        ' Age: ' + age + 
        ' User has hobbies: ' + hasHobbies
    );
}

console.log(summarizeUser(userName, age, hasHobbies));