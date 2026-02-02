// Part 1: Stack Overflow 
let coutnter = 0;
function measureStack(){
    counter++; 
    measureStack();
}
try{
    measureStack();
 } catch(error) {
    console.log(counter,"calls before overflow")
    }
// Part 2 Trampolines 