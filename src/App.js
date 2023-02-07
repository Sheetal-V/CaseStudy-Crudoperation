
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Project1/Register';
import UserTable from './Project1/UserTable';
// import store from './store';
import Login from './Project1/Login';

import { createTheme,ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme(()=>{

  })
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}></Route>
        <Route path ='/login' element={<Login />}></Route>
        <Route path='/usertable' element={<UserTable />}></Route>
        </Routes>
        </BrowserRouter>
        
        {/* <UserTable /> */}

        {/* <Login /> */}
        </ThemeProvider>
      {/* </Provider> */}
      
    </div>
  );
}

export default App;
