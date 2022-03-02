// ex1: character counter (Twitter)#
// See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.

// import "./styles.css";
// import React,{useState} from "react";

// export default function App() {
//   const [count,setCount] = useState(0);
//   const [textColor, settextColor] = useState('green');
//   function changeHandler(e){
//     const val = e.target.value.length;
//     setCount(10 - val);
//     if (val > 10){
//       settextColor('red');
//     }
//     else
//     settextColor('green');
//   }

//   return (
//     <>
//     <input type = "text" onChange = {changeHandler}  ></input>
//     <p style = {{color:textColor}}> You are left with {count} letters </p>
//     </>
//   );
// }

// ex2: password match#
// Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.

// import "./styles.css";
// import React, { useState } from "react";

// export default function App() {
//   const [initialPswd, setInitialPswd] = useState("");
//   const [finalPswd, setFinalPswd] = useState("");
//   const [show, setShow] = useState("none");
//   function pswdOne(e) {
//     const initialval = e.target.value;
//     setInitialPswd(initialval);
//   }
//   function pswdTwo(x) {
//     const finalval = x.target.value;
//     setFinalPswd(finalval);
//     initialPswd !== finalval ? setShow("block") : setShow("none");
//   }

//   return (
//     <>
//       <label>Enter Password</label>
//       <input type="password" onChange={pswdOne}></input>
//       <br></br>
//       <br></br>
//       <label>Confirm Password</label>
//       <input type="password" onChange={pswdTwo}></input>
//       <br></br>
//       <br></br>
//       <p style={{ display: show}}>Passwords dont match</p>
//     </>
//   );
// }

//ex3: alphanumeric password#
// Password should contain a number. Show error if user misses character.

// import "./styles.css";
// import React, { useState } from "react";

// export default function App() {
//   const [msg,setMsg] = useState('none');
// function changeHandler(e){
//   const val  = e.target.value;
//   const found = val.match(/\d+/g);
//   found !== null ? setMsg('none'): setMsg('block');
// }
//   return (
//     <>
//       <label>Enter Password</label>
//       <input type="password" onBlur= {changeHandler}></input>
//       <span style={{ display: msg}}>Pls include a number in your pswd </span>
//     </>
//   );
// }

// ex4: disable submit#
// Add a submit button to password change field.
// Disable submit button if passwords don't match
// Clicking on submit should console the password field

// import "./styles.css";
// import React, { useState } from "react";

// export default function App() {
//   const [initialPswd, setInitialPswd] = useState("");
//   const [finalPswd, setFinalPswd] = useState("");
//   const [show, setShow] = useState("none");
//   const [disable, setDisable] = useState('abc');
//   function pswdOne(e) {
//     const initialval = e.target.value;
//     setInitialPswd(initialval);
//     pswdValidation(initialval,finalPswd);
//   }
//   function pswdTwo(x) {
//     const finalval = x.target.value;
//     setFinalPswd(finalval);
//     pswdValidation(initialPswd,finalval);
//   }

//   const pswdValidation = (val1,val2)=>{
//     // console.log(val1,val2)
//     val1 !== val2 ? (setDisable('xyz'),setShow('block') ): (setDisable(""),setShow('none')); 
//   }

//   return (
//     <>
//       <label>Enter Password</label>
//       <input type="password" onChange={pswdOne}></input>
//       <br></br>
//       <br></br>
//       <label>Confirm Password</label>
//       <input type="password" onChange={pswdTwo}></input>
//       <br></br>
//       <br></br>
//       <button onClick = {() => console.log(initialPswd,finalPswd) } disabled={disable}>Submit</button>
//       <p style={{ display: show }}>Passwords dont match</p>
//     </>
//   );
// }

// ex6: designer tool (mini figma)#
// Let user finalise the size of text she would like on the screen. Two buttons + and - both will increase/decrease size by 8px. Show the size on the screen.
// import "./styles.css";
// import React, { useState } from "react";

// export default function App() {
// const [size,setSize] = useState(8);
//   return (
//     <>
//     <button onClick =  {() => setSize(size+8)}> + </button>
//     <span > Current font size is: {size}px </span>
//     <button onClick =  {() => setSize(size-8)}> - </button>
//     <p style = {{fontSize : size}}> Just some random text to test the logic </p>

//     </>
//   );
// }


// ex8: switch tabs#
// Make three components: Home, About, Profile.
// Put some text in the components
// Now, create three buttons with same name
// Clicking on the button should show that component
// UNDERSTANDING : this is kind of your own router, unless we get into router implementation.



// import "./styles.css";
// import { useState } from "react";
// import React from "react";

// export default function App() {
// const [show,setShow] = useState('none');
// const [text,setText] = useState('');
// const Home = () => {
//   setText('this is Home Component');
//   setShow('block');
//   };
//   const About = () => {
//     setText('this is About Component');
//     setShow('block');
//     };
//     const Profile = () => {
//       setText('this is Profile Component');
//       setShow('block');
//       };
//   return (
//     <>
//      <button onClick = {() => Home()}>Home</button>
//      <button onClick = {() => About()}>About</button>
//      <button onClick = {() => Profile()}>Profile</button>
//      <button onClick = {() => setShow('none')}>Reset</button>
//      <p style = {{display:show}}> {text} </p>
//     </>
//   );
// }

// ex9: toast#
// Create a Toast Component
// Component should have two things
// Text
// Hide Button
// Create a button show toast
// Clicking on this button should show Toast
// Clicking on hide button on toast should hide the toast
// UNDERSTAND : how callbacks can be passed to control state from parent component.
// CHALLENGE :
// Create different type of toasts: Error, Success, Warning etc.
// Differentiate your toast by just a prop and the design should change.

// import "./styles.css";
// import { useState } from "react";
// import React from "react";

// export default function App() {
//   const [toastDisplay, settoastDisplay] = useState("none");
//   const [toastmsg, settoastmsg] = useState("");
//   const [toastbg, settoastbg] = useState("");

//   function Toast(props) {
//     return (
//       <>
//         <div
//           className="toast"
//           style={{ display: props.show, backgroundColor: props.bg }}
//         >
//           <span> This is a {props.msg} toast </span>
//           <button onClick={() => settoastDisplay("none")}> Hide </button>
//         </div>
//       </>
//     );
//   }
//   function successToast() {
//     settoastmsg("success");
//     settoastbg("green");
//     settoastDisplay("block");
//   }
//   function errorToast() {
//     settoastmsg("error");
//     settoastbg("red");
//     settoastDisplay("block");
//   }
//   function warningToast() {
//     settoastmsg("warning");
//     settoastbg("orange");
//     settoastDisplay("block");
//   }
//   return (
//     <>
//       <button onClick={() => successToast()}>Success Toast</button>
//       <button onClick={() => errorToast()}>Error Toast</button>
//       <button onClick={() => warningToast()}>Warning Toast</button>
//       <Toast show={toastDisplay} msg={toastmsg} bg={toastbg} />
//     </>
//   );
// }
