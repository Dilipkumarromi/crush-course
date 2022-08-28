// import logo from './logo.svg';
import './App.css';
import User from './UserComponent/User';
import UserClass from './UserComponent/UserClass'
import UserClasswithState from './UserComponent/ClassWithState'
import UserProHandler from './UserComponent/propsPass'
import UserInpt from './UserComponent/input'
import UserForm from './UserComponent/Form'
import IsLogin from './UserComponent/conditionalRendering'
import LoginForm from './/UserComponent/LoginForm'
import Userfn from './UserComponent/FuncProp'
import UsEffect from './/Hooks/Hooks_useEffect'
import BasicExample from './UserComponent/nestedTable'
import PurComp from './/pureComponent/pureComp'
import Tbl from './UserComponent/Table';
import Home from './Component/Home'
import About from './Component/About'
import { BrowserRouter, Route, Routes,Link, Navigate } from 'react-router-dom';
import Page404 from './Component/PageNotFound';
import RouterParam from './Component/RouterParams'


function App() {
    function SendData(){
      alert('receiver data')
    }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Router Home or About</h1>
      <BrowserRouter>
      
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/RouterParam/Dilip">Params Router</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        
        {/* Param Router */}
        <Route path='/RouterParam/:name' element={<RouterParam/>}/>

        {/* wild-card page */}
        <Route path='/*' element={<Page404/>}/>

        {/* Page redirect/Navigate */}
        {/* <Route path='/*' element={<Navigate to='/'/>}/> */}

      </Routes>
      </BrowserRouter>
      <hr/>
      

        <h1>Pure component</h1>
        <PurComp/>
      <hr/>
      <BasicExample/>

        <Tbl/>
               <hr/>
       <UsEffect/>
      <hr/>
      <h1>Parent to child send data8</h1>
      <Userfn data={SendData}/>

        <hr />
        <LoginForm/>
        <IsLogin />
      <p>user component </p>
      <p>Input User</p>
      <UserInpt/>
      <hr/>
      <User/>
      <UserClass/>
      <UserClasswithState/>
      <UserProHandler name={"Dilip"} Email={"romi.indan@gmail.com"} address={{State:"Kolkata",Pincode:8333}}/>
      <UserProHandler name={"Romi"} Email={"romi.indan@gmail.com"} address={{State:"Kolkata",Pincode:8333}}/>

      </header>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
