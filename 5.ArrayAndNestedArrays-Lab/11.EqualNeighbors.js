// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs you find and return it.
function solve(matrix){   
    let matched = 0;    
    for(let i = 0; i < matrix.length; i++){
        for(let z = 0; z < matrix[i].length; z++){
            if(z !== matrix[i].length-1){
                if( matrix[i][z] == matrix[i][z+1]){
                    matched++;
                }
            }
            if(i !==matrix.length-1 ){
                if(matrix[i][z]==matrix[i+1][z]){
                    matched++;
            }
        }
            
        }
        
    }
    return matched;
}
    

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)
