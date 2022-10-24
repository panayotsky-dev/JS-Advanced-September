class Cat{
    constructor(name){ // constructor-a : да създаде и да инициализира.
        this.name = name; // This не сочи към класа(Cat),а сочи към инстанцията която е създадена в момента(текущата инстанция)
        this.isHungry = true; // default-на стойност.
    }
    makeSound(){        //Това е метод
        console.log(`${this.name}:Meow`);
    }
}
//? За дефаутни стойности се препоръчва този метод на инициализация
// class Cat{
 //*   isHungry = true; // тук обаче не може да се сетва динамично.
//     constructor(name){ // constructor-a : да създаде и да инициализира.
//         this.name = name; // This не сочи към класа(Cat),а сочи към инстанцията която е създадена в момента(текущата инстанция)//         
//     }
//     makeSound(){        //Това е метод
//         console.log(`${this.name}:Meow`);
//     }
// }


let firstCat = new Cat('Strahil')
let secondCat = new Cat('Pencho')
console.log(firstCat);
console.log(firstCat.name)

console.log(secondCat.name)

secondCat.name = 'Mishy'
//В движение можем да сменяме стойности.
console.log(secondCat);

console.log('Second Example');
//second example

let catNames = [
    'Kurcho',
    'Topcho']

    let cats = catNames.map(x => new Cat(x))
    console.log(cats)
    console.log(cats[0])

    cats.forEach(x=>x.makeSound())
console.log("///");
    firstCat.makeSound()

    secondCat.makeSound()


    // Instanceof Operator - бинарен оператор .. от ляво и от дясно
    // променлива ,инстанция или обект от ляво.
    // -  The istanceof operator returns true if the given object is an instance of the specified class
    const circle = new Circle(5);
    console.log(circle instanceof Circle)// true
    console.log(circle instanceof Object)//true
    console.log(circle instanceof String)//false
    console.log(circle instanceof Number)//false


    //? Static Methods
    // - The static keyword defines a static method for a class
    // class MyClass {static staticMethod() { return ' Static call'; } 

    //- Static methods are part of the calss and not of its instances
    //console.log(MyClass.staticMethod())

    //-They can only access other static methods via this context
    // static anotherStaticMethod(){ return this.staticMethod() + ' from another method'}