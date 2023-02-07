import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { minWidth } from '@mui/system'
import React, { useState, useEffect } from 'react'
import {makeStyles} from "@mui/styles"
import AddIcon from '@mui/icons-material/Add';
// import { useDispatch, useSelector } from 'react-redux';
// import { showdata } from '../actions/Action';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddModal from './AddModal';
import Editmodal from './Editmodal';
import { deleteEmpData } from './LocalStoragedata';
import { useNavigate } from 'react-router-dom';





const useStyles = makeStyles((theme)=>({
  // table:{
  //   minWidth:"650px",
  // },
  tableContainer:{
    borderRadius:15
  },
  tableHeaderCell:{
   backgroundColor:theme.palette.text.secondary,
   color:theme.palette.getContrastText(theme.palette.primary.dark)
  },
  addbutton:{
   marginRight:"auto"
    
  }

})) 


function UserTable() {
  const [editEmpData, seteditEmpData] = useState({data:{}, i:""})
  const [ refreshDisplay,setDisplay ] = useState(false)
  const [open, setopen] = useState(false)
  const [openEdit, setEditModal]=useState(false)
  const [rowdata, setrowdata] = useState([{
  
  }])

  let navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  
   
  }, [])
  

  


  var showempData



 const modalopen=()=>{
  setopen(true)
 }

 const openEditModal=()=>{
      setEditModal(true)
 }

 //saving the data to localstorage
 useEffect(()=>{
  let displayData = localStorage.getItem("empData")
  // console.log(displayData)
      if(displayData==null){
        alert("Data not Found in local storage")
      }
      else{
        showempData= JSON.parse(displayData)
        setrowdata(showempData)
      }


 }, [refreshDisplay]) //use effect will run whenever our emp data changes


 //delete empdata
 


let classes=useStyles()

  return (
    <>
<TableContainer component={Paper} style={{marginTop:"50px"}}>
     
      <Table>
        
        <TableHead>
          <TableRow>
            <TableCell align="center" >Employee Name</TableCell>
            <TableCell align="center">Employee id</TableCell>
            <TableCell align="center">Job Title</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Action</TableCell>
            {/* <TableCell><Button  onClick={()=>{setrowdata(true)}}>Show data</Button></TableCell> */}
           <TableCell> <Button size="large" variant='contained'onClick={()=>{modalopen();}}
            startIcon={<AddIcon />}>
  Add
</Button> </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
              {rowdata.map((tabledata, index)=>{return(
                  <TableRow key={index}>
                    <TableCell align="center">{tabledata.empname}</TableCell>
                    <TableCell align="center">{tabledata.empid}</TableCell>
                    <TableCell align="center">{tabledata.jobtitle}</TableCell>
                    <TableCell align="center">{tabledata.gender}</TableCell>
                    <TableCell align="center">{tabledata.salary}</TableCell>
                     <TableCell>
                    <Button size="small" variant='contained' startIcon={<ModeEditIcon/>} sx={{mr:2}} color='warning'
                    onClick={()=>{openEditModal();
                    seteditEmpData({data:tabledata, i:index})}}>Edit</Button> 
                    {/* <Button size="small" variant='contained' sx={{mr:2}} color='warning' startIcon={<ModeEditIcon/>}  onClick={modalopen}
            >
  Edit
</Button> */}
                    <Button size="small" variant='contained' startIcon={<DeleteForeverIcon />} onClick={()=>{
                      deleteEmpData(index)
                      setDisplay(!refreshDisplay)
                      
                    }} color='error'>Delete</Button>
                    </TableCell>
                  </TableRow>
                )}
              )}
        </TableBody>
      </Table>
    </TableContainer>
    {open && <AddModal refreshDisplay={refreshDisplay} setDisplay={setDisplay} open={open} setopen={setopen}/>}
    <Editmodal open={openEdit} setEditModal={setEditModal} seteditEmpData={seteditEmpData} editEmpData={editEmpData}
    refreshDisplay={refreshDisplay} setDisplay={setDisplay}  />
    
    
    </>
    
  )
}

export default UserTable
