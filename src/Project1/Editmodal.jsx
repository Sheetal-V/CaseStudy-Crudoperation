import { Box, Button, Dialog, DialogActions, DialogTitle, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { upDateonEdit } from './LocalStoragedata'

function Editmodal({open, setEditModal,editEmpData, refreshDisplay, setDisplay}) {

  const [editInputField, setEditInputField] = useState(editEmpData.data)

  //  console.log(editEmpData);



  const {i}= editEmpData;
  // console.log(editEmpData.i);

  useEffect(() => {
    setEditInputField({...editEmpData.data})
    }, [editEmpData.data])
  

    let handleClose=()=>{
        setEditModal(false)

    }
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
        <Box padding={2} px={10} >
          <Grid container spacing={2} display={'block'} justifyContent={'center'}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label='Employee Name'  value={editInputField.empname}
              
              onChange={(e)=>{
                setEditInputField({...editInputField, empname:e.target.value})
                console.log(editInputField.empname);

              }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id='outlined-basic' label='Employee Id'  value={editInputField.empid} 
              onChange={(e)=>{
                setEditInputField({...editInputField,empid:e.target.value})
              }} ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id='outlined-basic' label='Job Title'  value={editInputField.jobtitle}
              onChange={(e)=>{
                setEditInputField({...editInputField, jobtitle:e.target.value})
              }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id='outlined-basic' label='Gender'  value={editInputField.gender}
              onChange={(e)=>{
                setEditInputField({...editInputField, gender:e.target.value})
              }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField id='outlined-basic' label='Salary'  value={editInputField.salary}
              onChange={(e)=>{
                setEditInputField({...editInputField, salary:e.target.value})
              }}></TextField>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"space-evenly"}>
         <Button variant='contained' onClick={()=>{
            upDateonEdit(editInputField, i)
           handleClose(); setDisplay(!refreshDisplay)}} >Update</Button>
           <Button variant='contained' onClick={handleClose} autoFocus>
            Cancel
          </Button>
           </Grid>
           
          
       
          </Grid> 
          </Box>
        
      </Dialog>
      
    </div>
  )
}

export default Editmodal
