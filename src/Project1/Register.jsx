import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { width } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"



function Register() {
    const [inputValue, setinputValue] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        role:""
    })

    let Navigate = useNavigate()
        
    let registerfetchApi = async()=>{
        try{
            let res = await axios.post("https://products-jwt.onrender.com/users/register", inputValue)
            localStorage.setItem("registrationtoken",JSON.stringify(res.data) )
            let token = JSON.parse(localStorage.getItem("registrationtoken"));

         console.log(res);
        if(token){
            alert(token.message)
            Navigate("/login")
            
        }
        else{
            alert(token.error)
            
           
        }}  
        catch(error){
            if(error){
                alert(error.res.data.message)
            }
        }
        
    }
    



    const paperStyle ={padding:'30px 20px', width:300, margin:"50px auto" }
  return (
    <Container  style={{textAlign:"center"}}>
        <Paper elevation= {3}  style={paperStyle}>
            <Typography variant='h4'>registration</Typography>
            <TextField fullWidth label = "FirstName" style={{marginTop:'12px'}} onChange={(e)=>{
               
                    setinputValue({...inputValue, fname:e.target.value})
                }}/>
            <br/>
            <TextField fullWidth label = "LastName"  style={{marginTop:'12px'}} onChange={(e)=>{
                
                setinputValue({...inputValue, lname:e.target.value})
            }}/>
            <TextField  fullWidth label ="Email" style={{marginTop:"12px"}} onChange={(e)=>{
                setinputValue({...inputValue, email:e.target.value})
            }}/>
            <TextField fullWidth label= "Password" style={{marginTop:"12px"}} onChange={(e)=>{
                setinputValue({...inputValue, password:e.target.value})
            }} />
            <TextField fullWidth label ="Role"  style={{marginTop:"12px"}} onChange={(e)=>{
                setinputValue({...inputValue, role:e.target.value})
            }}/>
            <Button variant='contained' style={{marginTop:'12px'}}
            onClick={()=>{
                registerfetchApi();
                setinputValue({
                    fname:"",
                    lname:"",
                    email:"",
                    password:"",
                    role:"",
                })
                
                

                
            }}
          
            >Submit</Button>
            <br />
            <Typography variant='subtitle'>Already register <Link to="/login" underlined="hover">
            login in?</Link></Typography>


        </Paper>
    </Container>
  )
}

export default Register