function fizzBuzz(){
    let result = "";
    let arr = [];
    for ( i = 1; i <= 20; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
        // console.log("FizzBuzz");
            result += "FizzBuzz, ";
        } else if (i % 3 === 0) {
            //console.log("Fizz");
            result += "Fizz, ";
        } else if (i % 5 === 0) {
            //console.log("Buzz");
            result += "Buzz, ";
           
        } else {
            result += i
            result += ", "
            
        }
    }
    result = result.substring(0, result.length - 2)
    console.log(result);
}

fizzBuzz();

//console.log(result)
//const bla = Array.from(result.split(","));
//console.log(bla);