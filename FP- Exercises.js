// const obj = {name: "mom",myage: 52};
// const sib = {name:obj.name, age:obj.myage-2};
// console.log(sib);
// const colors = ['red','yellow','orange'];
// const newColors =[...colors,'blue','blue'];

// console.log(newColors);

// const birthday = (test) => {
//   return `Lax will be ${test.age + 1} next year`;
// }
// const person = {name:"lax",age: 23};
// console.log(birthday(person));
// // console.log(person)

// const isLessThan10 = num =>{
//   return num < 10? true : false;
// }
// if(isLessThan10(58)) console.log('less than 10');
// else console.log('greater than 10');

// const arr = [11,15,2,25,4,3];
// const op = arr.filter(isLessThan10);
// console.log(op);

// const ip1 = [11,15,2,25,4,3];
// const op1 = ip1.map(num => {...num};
// console.log(op1);
// const objCreation = num => {
//   return num * 2;
// }


// const reduceIP = [11,15,2,25,4,3];
// const reduceOP = reduceIP.reduce( (acc,curr) => acc + curr,0);

// let sum = (hi,hello) => hi + hello;
// const reduceOP2 = reduceIP.reduce(sum,0);

// const reduceOP3 = reduceIP.reduce(sum2,0);
// function sum2 (test,test2){
//   return test+test2;
// }

// console.log('1',reduceOP);
// console.log('2',reduceOP2);
// console.log('3',reduceOP3);


// HOMEWORK PROBLEMS

//sum of odd numbers
// const ipArr = [12,16,1,24,5,3];
// const oddSum = ipArr.filter( (oddNo) => oddNo % 2 !== 0).reduce( (acc,curr) => acc + curr
// ,0);
// console.log(oddSum);

//sum of numbers at odd indices

// const ipArr = [12,16,1,24,5,3];
// const oddSum2 = ipArr.reduce(
// (acc,curr) => {
// if (ipArr.indexOf(curr) % 2 !== 0) {
//   acc = acc + curr;
// }
// return acc;
// },0);
// console.log("reduce ",oddSum2);

// const oddSum3 = ipArr.filter( (n) => ipArr.indexOf(n) %2 !==0 ).reduce ((acc,curr) => acc+curr);
// console.log("filter + reduce: ", oddSum3);

//max value
// const maxArr = [12,16,1,24,5,3];
// const maxArrOp = maxArr.reduce((acc,curr) => {
//   if (curr > acc) acc = curr;
// return acc;
// }
// ,maxArr[0] );
// console.log(maxArrOp);

//numbers divisible by 10

// const divBy10 = [12,160,10,24,50,3];
// console.log(divBy10.filter( x => x % 10 === 0));

//odd + 1 & even - 1
// const arr = [12,16,1,24,5,3,-4,4];
// const op = arr.map( x => {
//   if (x%2===0) {
//    return x = x - 1;;
//   }
//   else{ 
//      return x = x+1;
//   }
// }
// );
// console.log("ip: ", arr);
// console.log("op: ", op);

//sum of even and odd
// const arr = [12,16,1,24,5,3];
// const op = {evenSum: 0,oddSum: 0};
// op.evenSum = arr.filter(even => even % 2 === 0).reduce((acc,curr) => acc + curr,0);
// op.oddSum = arr.filter(odd => odd % 2 !== 0).reduce((acc,curr) => acc + curr,0);
// console.log(op);

//method 2

// let obj = {evenSum: 0, oddSum: 0};
// const reducer = (obj,num) => 
//   (num % 2 === 0) 
//   ? obj = {...obj,evenSum: obj.evenSum + num} 
//   : obj = {...obj,oddSum: obj.oddSum + num }

//   const arr = [12,16,1,24,5,3];
//   console.log(arr.reduce(reducer,obj));

//Questions on Strings

// let fruits = ['apple','mango','papaya','kiwi'];
// const output = fruits.reduce((acc,curr) => {
//   if (curr.length in acc){
//     acc[curr.length] = ++acc[curr.length];
//   }
//   else{
//     acc[curr.length] = 1;
//   }
//   return acc;
// },{});
// console.log(output);