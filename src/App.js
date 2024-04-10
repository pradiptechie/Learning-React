// Learning Basics

// import './App.css';
import {useState, useEffect} from 'react';

// const Person = () =>{
//   return(
//     <>
//       <h2>Name: Pradip Mahato</h2>
//       <h2>Location: Koteshwar, Kathmandu</h2>
//     </>
//   )
// }

// const Person = (props) =>{
//   return(
//     <div>
//       <h2>Name: {props.fullName}</h2>
//       <h2>Age: {props.age}</h2><br></br>
//     </div>
//   )
// }

// function App() {
//   const name = "Pradip";
//   const isActive = false;
//   return (
//   <>
//     {/* <h1>Hello World</h1>
//     <h1>Hello {name}</h1>

//     <h1>Hello {isActive ? "Active" : "Disabled"}</h1>

//     {name ? (
//         <h1>Oh Hi, {name} </h1>
//     ):
//     (
//       <h1>No Name</h1>
//     )} */}

//     {/* using component and props*/}
//     {/* <Person fullName = "Hanuman" age = "30"/>
//     <Person fullName = "Ram" age = "40"/>
//     <Person fullName = "Sita" age = "33"/>
//     <Person fullName = "Bharat" age = "35"/>

//     <Person 
//       fullName = "Pawan"
//       age = "60"
//     /> */}

//   </>
//   );
// }

function App(){
  //     {/* Using React Hooks */}
  const [counter, setCounter] = useState(0);
  // dont assign value to counter directly, to change value of  counter variable,  use setCounter... buy calling setCounter(100);
  useEffect(()=>{
    console.log("changed the counter to: "  + counter);
  })

  return(
    <div className='App'>
        <button onClick={()=>setCounter((prevCount) => prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  )
}
export default App;
