let displayData = localStorage.getItem("empData")
let showempData=displayData ? JSON.parse(displayData) : [] ;

export let deleteEmpData=(index)=>{
    // console.log(empid);
    showempData.splice(index, 1)
    localStorage.setItem("empData", JSON.stringify(showempData))
    
  
   }

  export const addOnSubmit=(input)=>{
    showempData.push(input)
    localStorage.setItem("empData", JSON.stringify(showempData))
  }

  export const upDateonEdit=(data, i)=>{
              showempData[i]=data;
              localStorage.setItem("empData", JSON.stringify(showempData))
  }