import './App.css';
import NavBar from './Shared/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import UpdateStack from './Components/UpdateStack/UpdateStack';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Shared/Footer/Footer';
import RequireAuth from './Components/Login/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import MyProduct from './Pages/MyProduct/MyProduct';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path= '/' element= { <Home/>} />
        <Route path= '/home' element= { <Home/>} />
        <Route path='/updateStack/:id' element={
          <RequireAuth>
            <UpdateStack/>
          </RequireAuth>
        } />
        <Route path= '/login' element= { <Login/>} />
        <Route path= '/signUp' element= { <SignUp/>} />
        <Route path= '/blogs' element= { <Blogs/>} />
        <Route path= '/aboutMe' element= { <AboutMe/>} />
        <Route path= '/addProduct' element= { <AddProduct/>} />
        <Route path= '/manageProduct' element= { <ManageProduct/> } />
        <Route path= '/myProduct' element= { <MyProduct/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
