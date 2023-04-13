
const person = {
    name: 'Victor',
    age: 37,
    greet() {
        console.log('My name is ' + this.name + ' and am ' + this.age + ' old');
    }
}
/*
person.greet();
const skills = ['Communication', 'Team work', 'Ideas', 'Emotional Intelligence'];
const softSkills = skills.map(skill => 'Skill: ' + skill);

console.log(softSkills);*/

const skills = ['Communication', 'Team work', 'Ideas', 'Emotional Intelligence'];

// Spread operator
console.log({...person});
console.log([...skills]);

const getProperties = (...args) => console.log('Arguments: ', args) 

// Rest operator
getProperties(1, true, 'active', 'user1');