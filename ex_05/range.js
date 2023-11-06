function range(start, end, step){
    if (step === undefined) {
        step = end + 1;
    }
    return [start, end, step];

}

//result = range(1, 25, );
//result = range(12, 2, 7);
console.log(range(1,23,5));
console.log(range(4,18,));
console.log(range(1,23,12));
console.log(range(1,23,-34));
