function solve(face,suit){

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = {
        S:'♠',
        H:'♥',
        D:'♦',
        C:'♣'
    }
    if(!faces.includes(face)){
        throw new TypeError('Invalid face: ' + face);
    }


    if(!suits[suit]){
        throw new TypeError('Invalid suit: ' + suit);
    }


    let card = {
        face,
        suit,    
        toString(){
            console.log(this.face + suits[this.suit])
        }
    };
    
    return card;

}
let card = solve('a','S')
card.toString()
card =solve('A', 'S')
card.toString()
card = solve('10', 'H')
card.toString();
card = solve('1', 'C')
card.toString();

//75% solution