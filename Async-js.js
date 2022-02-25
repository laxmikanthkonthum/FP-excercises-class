// write your own function which takes a callback#

// challenge#
// Write a function strLength() which takes

// Your name
// A function which it will call with the length of your name
// Now, call this function with the two parameters.

// Your name. This is simple.
// A function. This function will get the length of the string. Use that length to print a message: OMG! my name is X char long!

// function strlen(name,fun){
//   let len = name.length;
//     printlen(name,len);
// }
// function printlen(name,len){
//   console.log(`OMG! my name is ${len} long`);
// }
// strlen("laxmikanth",printlen);


// let strlen = (name,cb) => {
//     let len = name.length;
//     printLen(name,len);
//   };
//   let printLen = (name,len) => console.log(`OMG! my name is ${len} long`);
//   strlen("apple",printLen);


// challenge#
// Write a function willThanosKillMe() . This function will take three parameters

// Your name
// Function to call if Thanos doesn't kill you.
// Function to call if Thanos does kill you.
// This function will call success callback if your name has even characters. You won't die.

// But if your name has odd number of characters then you're going to die. Sorry! :(

// Now, call this function with the given parameters. The success function should console a happy message: Yay! I am alive! and the failure function should console your will: Give my bose speakers and apple headphones to my sister

// let  thanos = (name,cbs,cbf) => {
//     name.length % 2 === 0 ? cbs():cbf() ;
//   }
//   let cbs =  () => console.log("Success");
//   let cbf =  () => console.log("failure");
//   thanos("laxmikanth",cbs,cbf);

// write a function which takes a message and time. The function should print that message every X interval.

// function counter(time){
// setInterval(()=>console.log("Timer"),time);
// }
// counter(5000);

// let counter = (time) => setInterval(() => console.log("Timer"),time);
// counter(5000);


// Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.

// let bangBang = (num) =>{
//     counter = num * 1000;
//     closeTimer = setInterval( () => {
//         console.log("Timer",num--)
//         if (num === 0) {
//             console.log("Bang Bang!");
//             clearInterval(closeTimer);
            
//         }
//     }
//         ,1000);
// } 

// bangBang(3);

// const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2))

// add(2, 4)
//   .then((result) => {
//     console.log(result) // result: 6
//     return result + 10
//   })
//   .then((result) => {
//     console.log(result) // result: 16
//     return result
//   })
//   .then((result) => {
//     console.log(result) // result: 16
//   })

//Fake Fetch

// const fakeFetch = (msg, bool) => {
//   return new Promise((reject, resolve) => {
//     setTimeout(() => {
//       if (bool) {
//         reject(`from server: ${msg}`);
//       }
//       resolve(`Error from Server`);
//     }, 2000);
//   });
// };
