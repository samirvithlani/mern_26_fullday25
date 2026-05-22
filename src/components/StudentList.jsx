import React from 'react'

//props --> properties
//props is keyword ? No 
export const StudentList = (props) => {
  //props data type??
    console.log("StudentList...",props)
  return (
    <div>
        <h1>Student List</h1>
        <h1>Name :{props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h1>Student Name = {props.stu.name}</h1>
        {props.subjcets.map((s)=>{
          return <li>{s}</li>
        })}
    </div>
  )
}
