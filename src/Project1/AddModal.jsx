import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Button, FormControl, Grid, InputLabel, TextField } from '@mui/material';
import { addOnSubmit } from './LocalStoragedata';

function AddModal({open,setopen,refreshDisplay,setDisplay}) {

  const [input, setInput] = useState({
  empname:"",
  empid:"",
  jobtitle:"",
  gender:"",
  salary:"",
  })
  console.log(input)

  // const addOnSubmit=()=>{
  //   let addInput
  //   let response= localStorage.getItem("empData")
  //   if(response==null){
  //     addInput=[]
  //   }
  //   else{
  //     addInput=JSON.parse(response)
  //   }
  //   addInput.push(input)
  //   localStorage.setItem("empData", JSON.stringify(addInput))
  // }


  const handleClickOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };
  return (
    <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" Add Employee Details"}
        </DialogTitle>
        <Box padding={2} px={10}>
          <Grid container spacing={2} display={'block'} justifyContent={'center'}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label='Employee Name' onChange={(e)=>{
                setInput({...input ,empname:e.target.value})
                console.log(e.target.value)

              }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField variant='outlined' label='Employee Id' onChange={(e)=>{
                setInput({...input, empid:e.target.value})
              }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id='outlined-basic' label='Job Title'onChange={(e)=>{
                setInput({...input, jobtitle:e.target.value})
              }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id='outlined-basic' label='Gender' onChange={(e)=>{
                setInput({...input, gender:e.target.value})
              }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id='outlined-basic' label='Salary' onChange={(e)=>{
                setInput({...input, salary:e.target.value})
              }}></TextField>
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'space-evenly'}>
          <Button onClick={()=>{addOnSubmit(input);setopen(false);setDisplay(!refreshDisplay)}} variant='contained' >Add</Button>
          <Button onClick={handleClose} variant='contained' autoFocus>
            Cancel
          </Button>
          </Grid> 
          </Grid>
          </Box>
      </Dialog>
      
    </div>
  )
}

export default AddModal
