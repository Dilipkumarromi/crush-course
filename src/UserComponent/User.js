import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
let name
function User(){
    // function getAlter(){
    //     alert("Click Action Fired!")
    // }
    const [data,setData]=useState('Dilip')
    function upDate(){
    setData("Dilip kumar romi")
}
    const list=["ram","shyam","ganesh"];
    return(
        <div >
        <h1>User component try</h1>
       
        <p className="text-center margin-bottom">Hello</p>
        <button onClick={upDate} className="btn btn-danger mb-4">Click Here</button>
        <br/>
        <button onClick={()=>alert("India")} className="btn btn-primary">Second Button Click Event Fired!</button>

        </div>
    )

}
export default User


// or export fn name  after export fn name

// don't used onClick with fn name and brackets eg: onclick={getAlter()} otherwise page load then auto fired