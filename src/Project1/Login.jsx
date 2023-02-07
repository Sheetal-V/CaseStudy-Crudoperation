import React, { useState } from 'react'
import {Button, Container, createTheme, Paper, TextField, ThemeProvider, Typography} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [value, setvalue] = useState({
        email:"",
        password:"",
    })

    let navigate =useNavigate();



    let fetchLoginApi = async ()=>{
        let response = await axios.post(" https://products-jwt.onrender.com/users/login", value)
        let Data = JSON.stringify(response.data.data.token)
        localStorage.setItem("token", Data)
        // let getData = JSON.parse(localStorage.getItem("token"))
        // console.log(getData)
        if(response.data.error){
            alert("Something went wrong")
                   
        }
        else{
            navigate("/UserTable")
        }
        
    }








    const theme = createTheme({
        palette:{
            background: {
                    paper: '#fff',
            }
        }
    })
    const paperStyle={padding:'30px 20px', width:280, margin:"20px auto"}
  return (
    <>
        <ThemeProvider theme={theme}>
        <Container style={{textAlign:'center'}}>
            <Paper  elevation={7}  style={paperStyle}>
                <Typography variant='h4'>Login</Typography>
                <TextField  fullWidth label="Email"  style={{marginTop:'12px'}} onChange={(e)=>{

                    setvalue({...value, email:e.target.value})
                }} required />
                <br />
                <TextField  fullWidth label="Password" style={{marginTop:'12px'}} onChange= {(e)=>{
                    setvalue({...value , password:e.target.value})
                }} required/>
                <br />
                <Button variant='contained' color='primary' style={{marginTop:'12px'}}
                onClick={fetchLoginApi}
                >Sign In</Button>
                <Typography>
                    
                </Typography>

                

            </Paper>
        </Container>
        </ThemeProvider>

    </>
  )
}

export default Login