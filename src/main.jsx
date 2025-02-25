import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home/Home.jsx'
import SignIn from './Pages/SignIn/SignIn.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import PrivateRoutes from './Pages/Routes/PrivateRoutes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import TaskDetails from './Pages/taskDetails/TaskDetails.jsx'
import Loading from './Pages/Routes/Loading.jsx'
import Tasks from './components/tasks/Tasks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Loading><Home></Home></Loading>}>
            
            <Route  index element={<PrivateRoutes><Tasks></Tasks></PrivateRoutes>}></Route>
            <Route path='/task/:id' element={<TaskDetails></TaskDetails>}></Route>
            {/* <Route path='/app' element={<App></App>}></Route> */}
          </Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
