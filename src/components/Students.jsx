import React from 'react'
import { StudentList } from './StudentList'

export const Students = () => {

    var name = "RAJ"
    var age =23
    var studentObj ={
      id:1,name:"amit",rollno:7
    }
    var subjcets = ["Maths","science","Eng","Phy"]


  return (
    <div style={{textAlign:"center"}}>
        <h1>Students</h1>
        <StudentList name ={name} age = {age} stu = {studentObj} subjcets={subjcets}></StudentList>
    </div>
  )
}
