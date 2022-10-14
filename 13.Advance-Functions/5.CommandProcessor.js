// Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.
// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console
// Input
// Check the examples below to see how your code will be executed.
// Output
// Whenever you receive the command print, the output should be printed on the console.
function solution () {
    let result = '';
    return {
        append(str){
            result += str;
        },
        removeStart(num){
            result = result.substring(num);
        },
        removeEnd(num){
            result = result.substring(0,result.length - num);
        },
        print(){
            console.log(result);
        }

    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
