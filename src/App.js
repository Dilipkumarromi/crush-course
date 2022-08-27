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
import Tbl from './DataType/ArrayToListLoop'
function App() {
    function SendData(){
      alert('receiver data')
    }

  return (
    <div className="App">
      <header className="App-header">
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
