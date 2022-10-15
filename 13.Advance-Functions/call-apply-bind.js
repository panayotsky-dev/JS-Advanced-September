//---call and apply---
function introduce(){
    console.log(`Hello, my name is ${this.name}`);
}
introduce(); // Global invocation
let objectContext = {
    name: 'Pesho',
}
introduce.call(objectContext);// invoke using call;
introduce.call({name: 'Gosho'})
introduce.apply(objectContext)




// let obj = {
//     name: 'Pesho',
//     introduce
// }
// obj.introduce();
console.log(` ------ `)


function introduce2(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}
introduce2('Gosho', 'Ivanov'); // Global invocation
let person = {
    name: 'Pesho',
}
introduce2.call(person);// винаги трябва да има контекст -> person се пада и входни аргументи
introduce2.call(person, 'Gosho', 'Ivanov'); //invoke using call приема списък
introduce2.apply(person);
introduce2.apply(person,['Gosho', 'Ivanov']);// invoke using apply приема масив

console.log(` ---BIND---`)
// --- bind ---

let superHuman = {
    name:'Superman',
}
let superIntroduce = introduce2.bind(superHuman, 'Lois', 'Lane')
superIntroduce();
// let superIntroduce = introduce2.bind(superHuman)
// superIntroduce('Lois', 'Lane'); и така може да работи

//Разликата между call,apply и bind е че call и apply се извикат веднага,a bind
// трябва да я запишем(като нова функция) и след това да я извикаме!