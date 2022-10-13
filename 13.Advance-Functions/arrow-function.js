//Arrow

const person = {
    firstName: 'Pesho',
    lastName: 'Peshov',
    introduce(){
        const getFullName = () =>{ // arrow function не запазва собствен контекст в този смисъл в който сме свикнали,а наследява контекста от горната функция!!!
            return this.firstName + ' ' + this.lastName;
        }
        console.log(`Hello, my name is ${getFullName()}`)
    }
}
person.introduce();

// ако е const getFullName = function(){бялляля} имената ще са undefined
// fixва се с arrow function
