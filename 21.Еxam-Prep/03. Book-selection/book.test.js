let bookSelection = require('./book')
 
let {assert} = require('chai')

describe("Test for bookSelection",  ()=> {
   describe("Test isGenreSuitable",()=>{
            function concatenateString(genre,age){
                return `Books with ${genre} genre are not suitable for kids at ${age} age`
            }
        it("wrong genre", () =>{
            let genre = "Thriller"
            let age = 12;
            let expectText = concatenateString("Thriller", 12) //
            assert.equal(bookSelection.isGenreSuitable("Thriller",12), expectText); 
            expectText = concatenateString("Horror", 12)
            assert.equal(bookSelection.isGenreSuitable("Horror",12), expectText) 
        })
        it("correct genre and age", () =>{
            let expText = "Those books are suitable"
            assert.equal(bookSelection.isGenreSuitable("Thriller",13),expText);
            assert.equal(bookSelection.isGenreSuitable("Horror",25),expText);
            assert.equal(bookSelection.isGenreSuitable("Thriller",23),expText);
            assert.equal(bookSelection.isGenreSuitable("Horror",44),expText);
            
        })
   })

    describe("Test for isItAffordable",function (){
        it("don't have enough money",()=>{
            assert.equal(bookSelection.isItAffordable(12,10), "You don't have enough money")
            assert.equal(bookSelection.isItAffordable(55,50), "You don't have enough money")
            assert.equal(bookSelection.isItAffordable(75,70), "You don't have enough money")
        })
        it("You bought the book", ()=> {
            assert.equal(bookSelection.isItAffordable(50,55), "Book bought. You have 5$ left")
            assert.equal(bookSelection.isItAffordable(50,54), "Book bought. You have 4$ left")
            assert.equal(bookSelection.isItAffordable(50,50), "Book bought. You have 0$ left")
            assert.equal(bookSelection.isItAffordable(50,150), "Book bought. You have 100$ left")
        })
        it("Wrong data type",()=>{
            assert.throw(()=>bookSelection.isItAffordable("pet",10), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable(10,"strahil"), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable("50","50"), "Invalid input")
        })        
   })
   describe("Test for suitableTitles", ()=>{
        it("Wrong data type",()=>{
            assert.throw(()=>bookSelection.suitableTitles("Pet","Osem"), "Invalid input")
            assert.throw(()=>bookSelection.suitableTitles(10,"Osem"), "Invalid input")
            assert.throw(()=>bookSelection.suitableTitles({},"Osem"), "Invalid input")
            assert.throw(()=>bookSelection.suitableTitles([{ title:"The Da Vinci Code", genre: "Thriller" }], 20),"Invalid input");
            assert.throw(()=>bookSelection.suitableTitles([{ title:"The Da Vinci Code", genre: "Thriller" }], []),"Invalid input");
            assert.throw(()=>bookSelection.suitableTitles([{ title:"The Da Vinci Code", genre: "Thriller" }], {}),"Invalid input");

            assert.throw(()=>bookSelection.suitableTitles([{ title:"The Da Vinci Code", genre: "Thriller" }], 20),"Invalid input");
            assert.throw(()=>bookSelection.suitableTitles({}, {}),"Invalid input");
            assert.throw(()=>bookSelection.suitableTitles(80, 90),"Invalid input");
        })
        it("correct data", () => {
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Da Vinci Code1", genre: "Thriller" },
                { title: "The Da Vinci Code2", genre: "Horror" },
            ]
            let output = ["The Da Vinci Code","The Da Vinci Code1"]
            assert.equal(bookSelection.suitableTitles(input, "Thriller").join(" "), output.join(" "))
            output = ["The Da Vinci Code2"]
            assert.equal(bookSelection.suitableTitles(input, "Horror").join(" "), output.join(" "))
            output = [];
            assert.equal(bookSelection.suitableTitles(input, "Comedy").join(" "), output.join(" "))

           
        })
   })
});