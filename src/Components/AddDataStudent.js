import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const AddDataStudent = ({stud,setStud}) => {

const [id,setId] = useState("")
const [name,setName] = useState("")
const [batch,setBatch] = useState("")
const [gender,setGender] = useState("")
const [experience,setExperience] = useState("")
const history = useHistory()

//Add Function
const addStudData = () =>{
    const newStud = {
        id,
        name,
        batch,
        gender,
        experience
    }
   setStud([...stud,newStud])
   setId("") 
   setName("")
   setBatch("")
   setGender("")
   setExperience("")
   history.push("/students")
}

  return (
    <Base title="ADD NEW STUDENT" description="Here You Can Add New Student Details">
        <Container fluid = 'xxl' style={{textAlign:"center"}}>
            <Form className='addData'>
                <Form.Label className='formLabel'>ID</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setId(e.target.value)} value = {id} className='formSty' type="text" placeholder="Enter ID" />
                <Form.Label className='formLabel'>Name</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setName(e.target.value)} value = {name} className='formSty' type="text" placeholder="Enter Name" />
                <Form.Label className='formLabel'>Batch</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setBatch(e.target.value)} value = {batch} className='formSty' type="text" placeholder="Enter Batch" />
                <Form.Label className='formLabel'>Gender</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setGender(e.target.value)} value = {gender} className='formSty' type="text" placeholder="Enter Gender" />
                <Form.Label className='formLabel'>Experience</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setExperience(e.target.value)} value = {experience} className='formSty' type="text" placeholder="Enter Experience" />
            </Form>
                <Button onClick={addStudData} className="funtionBtn" variant="success">ADD</Button>
        </Container>
    </Base>
  )
}

export default AddDataStudent