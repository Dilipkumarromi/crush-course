import React,{useState,useEffect} from "react";

function useEff(){
    const [data,setData]=useState(1)
    const [count,setCount]=useState(11)
    useEffect(()=>{
        // alert('Welcome to useEffect')
    },[data])
    return (
        <div>
            <h1>UseEffect Hooks Function</h1>
            
            <h1 className="text-danger">Count:{data}</h1>
            <h1 className="text-danger"> Data:{count}</h1>

            <button onClick={()=>{setData(data+1)}} className="btn btn-info">
                [Data Count</button>
            <button onClick={()=>{setCount(count+1)}} className="btn btn-primary mx-1">Count</button>

        </div>
    )
}
export default useEff