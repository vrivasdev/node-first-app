
const person = {
    name: 'Victor',
    age: 37,
    greet() {
        console.log('My name is ' + this.name + ' and am ' + this.age + ' old');
    }
}

person.greet();

const skills = ['Communication', 'Team work', 'Ideas', 'Emotional Intelligence'];

const softSkills = skills.map(skill => 'Skill: ' + skill);

console.log(softSkills);