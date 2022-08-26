//onChange textbox
import {useState,React} from 'react'
function InputUser(){
    const [data,setData] = useState(false)
    const [status,setStatus]=useState(true)
    function UserInput(val){
        console.log('user input',val.target.value)
        setData(val.target.value)
        
    }


    return (
        <div>
           <h1 className='text-danger'>UserInput: {data}</h1>
            <hr/>
             <input type="text" onChange={UserInput} placeholders="Enter name" ></input>
             <button onClick={()=>setData(true)} className='btn btn-info'>Print</button>

            <hr/>
            {
                status?<p>SHow or Hide</p>:null

            }

             <button onClick={()=>setStatus(false)} className='btn btn-primary'>Hide</button>
             <button className='btn btn-danger' style={{marginLeft:10}} onClick={()=>setStatus(true)}>Show </button>
             <button onClick={()=>setStatus(!status)} className='btn btn-info' style={{marginLeft:10}}>Hide or Show</button>
        </div>
    )
}


export default InputUser