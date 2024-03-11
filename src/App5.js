// import React,{useEffect} from 'react'
// import { useState } from "react";

// export default function App5() {
//     const [count,setCount] =useState(0);
//     console.log("Component loaded");
//   return (
//     <>
//     <button onClick={()=> setCount(prevState)=>prevState+1)}>
//         click
//     </button>
//     <span>count</span>
//     </>
//   );
// }

import React  from 'react'
import {useState, useEffect} from 'react';
export default function App5() {
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    console.log("component loaded");
    useEffect(() => {
        console.log("Better luck next time");
    },[wickets]);
  return (
    <>
    <button onClick={() => setRuns((prevState)=>prevState+1)}>Runs({runs})</button>
    <button onClick={() => setWickets((prevState)=>prevState+1)}>Wickets({wickets})</button>
    </>
  );
}
