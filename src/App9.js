import React, { useState } from 'react'

export default function App9() {
    const[student, setStudent] = useState({});
    const[students, setStudents] = useState({});
    const addStudents = ()=>{
    setStudents((prevStudents)=>[...prevStudents,student]);
    };
  return (
    <div>App9</div>
  )
}
