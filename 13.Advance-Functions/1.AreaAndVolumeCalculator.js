function area(){
    return Math.abs(this.x * this.y);
};

function vol(){
    return Math.abs(this.x * this.y * this.z);
};

function solve(area,vol,input){
 let cordinates = JSON.parse(input);
 
 let result = [];
    for (const points of cordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points),
        })
    }
    return result;
};
// function fancySolve(area,vol,input){
//     let coordinates = JSON.parse(input);
//     let result = coordinates.map(x => {
//         return{
//             area: area.call(x),
//             volume: vol.call(x),
//         }
//     })
//     return result;
// }

// function fancySolve2(area,vol,input){
//      JSON.parse(input)
 //       .map(x => {
//         return{
//             area: area.call(x),
//             volume: vol.call(x),
//         }
//     })
//     
//     return result;
// }


// function fancySolve3(area,vol,input){
//     return JSON.parse(input)
 //       .map(x => ({         
//             area: area.call(x),
//             volume: vol.call(x),
//     })
//    )  
//     
// }


console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));