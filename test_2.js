/*
Є стрінга "My cat is the best cat of the world"
ЇЇ потрібно перетворити в "My cat name is Adolf and he is the best cat with age 2 years"
Усе це зробити маніпуляціями з стрінгою та масивами
*/

const str='My cat is the best cat of the world';
console.log(str);
const words=str.split(' ');

let index = words.indexOf('cat');

words[index] = words[index].replace('cat','cat name is Adolf and he');

index = words.indexOf('cat');

words[index] = words[index].replace('cat','cat with age 2 years');

words.pop();
words.pop();
words.pop();

const str2=words.join(' ');
console.log(str2);
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
 













