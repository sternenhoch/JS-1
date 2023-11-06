/*function countGs();
*/


/*const str = 'abcgGggGeaGfdsGG';
const count = (str.match(/[A-Z]/g) || []).length;

console.log(count); */

function countGs(str){
    return (str.match(/[A-Z]/g) || []).length
};

let str = "abcgGggGeaGfdsGG";

let result = countGs(str);
console.log(result);


