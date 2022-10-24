//?Accessor proporties are methods that mimic values
    //- Keywords get and set with matching idintifiers
    //- They can be accesssed and assigned to like proporties

    class Circle {
        constructor(radius){
            this.radius = radius;
        }
        get diameter(){
            return  this.radius * 2
        }
        set diameter(value){
            if( value <=0){
                throw new Error("Diameter must be positive")
            }
            this.radius = value / 2;  
        }

    }

    let circle = new Circle(2)
    console.log(circle);
    console.log(circle.diameter);
    circle.diameter = 20;  //* Не може да се манипулира самата стойност.Трябва да се манипулира radius. Когато е GET можем само да го взимаме,ако искаме да го SET-ваме трябва да е set
    console.log(circle.diameter);
    console.log(circle.radius);

//     class Circle2 {
//         constructor(radius){
//             this.radius = radius;
//             this.diameter = radius *2  //* НЕПРАВИЛНО ,защото ако променим стойността на радиус диаметъра не приема нова стойност!!!
//         }
//     }

//  let circle2 = new Circle2(2)
//     console.log(circle2);// radius = 2 diameter = 4
//     circle2.radius = 3;
//     console.log(circle2);//* radius = 3 diameter = 4



//Accessor Properties Aplication
//- The setter can verify that a given value meets requirements
// set diameter(value){
// if( value <=0){
//     throw new Error("Diameter must be positive")
// }
// this.radius = value / 2; } 

//-Properties without a setter are read-only (cannot be assigned)
//-Getters can be used for a validated or calculated property

//private property
// class Circle {
  //*  #kurec = tvaEpraivetZadatiHashtaga //? вика се this.#pi // не може да се достъпи отвън // може да се извиква само вътрешно от конструктора или от другите методи
//     constructor(radius){
//         this.radius = radius;
//     }
//     get diameter(){
//         return  this.radius * 2
//     }
//     set diameter(value){
//         if( value <=0){
//             throw new Error("Diameter must be positive")
//         }
//         this.radius = value / 2;  
//     }

// }


// get kurec(){
//     return this.#kurec
// }
//set kurec(value){
//     if(value <0){
//         throw new Error('Kurec cannot be less than 0')
//     }
// }
// circle.kurec = 50;
// console.log(circle.kurec);