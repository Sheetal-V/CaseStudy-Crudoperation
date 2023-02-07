import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Project1/Login'
import Register from './Project1/Register';
import UserTable from './Project1/UserTable';
import { createTheme,ThemeProvider } from '@mui/material/styles';




const theme = createTheme(()=>{

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    
    

    
   
    <App />
    
    </ThemeProvider>
    
    
    {/* <Login /> */}
    {/* <Register /> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
