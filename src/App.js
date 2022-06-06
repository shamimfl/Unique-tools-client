import { Route, Routes } from 'react-router-dom';
import './App.css'
import AddParts from './Component/AddParts/AddParts';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Component/Login/Login';
import SingUp from './Component/SingUp/SingUp';
import Order from './Component/Order/Order';
import Dashbord from './Component/Dashbord/Dashbord';
import MyOrder from './Component/Dashbord/MyOrder/MyOrder';
import ReviueFrom from './Component/ReviueFrom/ReviueFrom';
import Alluser from './Component/Dashbord/Alluser/Alluser';
import Wellcomepage from './Component/Dashbord/Wellcomepage/Wellcomepage';
import Profile from './Component/Profile/Profile';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Allparts from './Component/Allparts/Allparts';
import Blogs from './Component/Blogs/Blogs';
import MyProtfoliyo from './Component/MyProtfoliyo/MyProtfoliyo';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>


        <Route path='/myprotfoliyo' element={<MyProtfoliyo></MyProtfoliyo>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/allparts' element={<RequireAuth>
          <Allparts></Allparts>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/parts/:_id' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}></Route>
        <Route path='/profile' element={<RequireAuth>
          <Profile></Profile>
        </RequireAuth>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}>
          <Route index element={<Wellcomepage></Wellcomepage>}></Route>
          <Route path='/dashbord/addparts' element={<RequireAuth>
            <AddParts></AddParts>
          </RequireAuth>}></Route>
          <Route path='/dashbord/myorder' element={<RequireAuth>
            <MyOrder></MyOrder>
          </RequireAuth>}></Route>
          <Route path='/dashbord/addveviue' element={<RequireAuth>
            <ReviueFrom></ReviueFrom>
          </RequireAuth>}></Route>
          <Route path='/dashbord/alluser' element={<RequireAuth>
            <Alluser></Alluser>
          </RequireAuth>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
