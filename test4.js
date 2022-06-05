// const newWeek=['Sunday', 'Manday', 'Tuesday'];
// console.log(newWeek);
// newWeek.push('Friday');
// newWeek.push('Wednesday','Suaterday');
// console.log(newWeek);
// console.log(newWeek.indexOf('Wednesday'));
// let index=newWeek.indexOf('Wednesday');
// console.log(newWeek[index]);

const array = ['My', 'cat', 'is', 'the', 'best', 'cat', 'of', 'the', 'world']
const array2 = [];

let count = 0;
while (count < array.length) {
    if (!(array[count] === 'cat' || array[count] === 'the' || array[count] === 'world')) {
        array2.push(array[count]);
    }
count++
}
console.log(array2);
console.log(array2.join(' ')+'!');





// let count = 0;
// while (count<array.length) {
//     if (!(array[count] === 'is' || array[count] === 'of')) {
//         array2.push(array[count])   
//     }
//     count++;
// }
// console.log(array2)


// array.forEach(element => {
//     if(!( element==='is'|| element==='of')){
//         array2.push(element);
//     }
// });
// console.log(array2);

// for (const element of array ){
//     if( !(element==='is' || element==='of') ) {
// array2.push(element);
//     }
// }
// console.log(array2);


// for(let i=array.length-1; i>=0; i--){
//     if(!(array[i]==='is' || array[i]==='of')){
//         array2.push(array[i]) 
//     }
// }
// console.log(array2);


// let count = array.length-1;
// while (count >= 0) {
//     if (!(array[count] === 'is' || array[count] === 'of')) {
//         array2.push(array[count])
//     }
//     count--
// }
// console.log(array2);

// let i;
// const array=[];
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         // console.log(i);
//         array.push(i);
//     } 
// }
// // console.log(array);
// let str = ''
// array.forEach(i=> str=str+i);
// console.log(str);

