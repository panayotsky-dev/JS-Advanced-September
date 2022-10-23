

class Cat{

    static legNumber = 4          //статично пропърти
    isHungry = true;
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`${this.name}: MEOW!`)
    }
    static vetCheck(cat){    //статичен метод
        if(cat.isHungry){
            console.log(`This cat should be fed!`)
        }else{
            console.log(`This cat is fine`)
        }
    }
}

let cat = new Cat('Navcho')
cat.makeSound()
//static Method

Cat.vetCheck(cat) // трябва да извикаме класа ( с главна буква...) и да подадем 'котката' // Статичният метод се извиква от класа

//static property
console.log(cat.legNumber); // undefined
console.log(Cat.legNumber); // 4 //*- Статичните пропъртита и методи седят единствено на класа и от там могат да бъдат извикани ... за разлика от обикновенните те се извикват през инстанцията





//статични стандартни методи
//Object.keys ... Object.entries ...
//let numbers = [1,2,3,4]
// или както  при масивите Array.isArray(numbers) // ще го тества дали е масив
