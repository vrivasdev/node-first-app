const person = {
    name: 'Victor',
    age: 37,
    greet() {
        console.log('My name is ' + this.name + ' and am ' + this.age + ' old');
    }
}

const skills = ['Communication', 'Team work', 'Ideas', 'Emotional Intelligence'];

/*
person.greet();

const softSkills = skills.map(skill => 'Skill: ' + skill);

console.log(softSkills);*/

/*
// Spread operator
console.log({...person});
console.log([...skills]);

const getProperties = (...args) => console.log('Arguments: ', args) 

// Rest operator
getProperties(1, true, 'active', 'user1');
*/

const printPerson = ({name}) => {
    console.log('My name: ' + name);
}

printPerson(person);

const {name, age} = person;
console.log(name, age);

const [skill1, skill2] = skills;

console.log(skill1, skill2);