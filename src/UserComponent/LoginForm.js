import React,{useState} from 'react'
function Login(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [validError,setvalidError] =useState(false)
    function logn(e){
       if(username.length<3){
            alert("enter currect username required")
       }
        e.preventDefault()
    }

    function checkValid(e)
    {
        let isValid=e.target.value
        if(isValid.length<3){
            setvalidError(true) 
        }
        else{
            setvalidError(false) 
        }
        setUsername(isValid)
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <form onSubmit={logn}>
                        <div className="card">
                            <div className='group'>
                            <label className='mb-3 text-muted'>Username</label>
                              <input type="text" className="form-control" placeholder="Username" onChange={checkValid} />
                                {validError?<span className="text-danger">invalid Password</span>:""}
                            </div>

                            <div className='group'>
                            <label className='mb-3 text-muted'>Passwword</label>
                              <input type="text" className="form-control" placeholder="Username" />

                            </div>
                            <button className='btn btn-primary mx-4'>Login</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login