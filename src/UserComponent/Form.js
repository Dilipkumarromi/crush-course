import {useState} from 'react'
function UserForm() {
    const [name,setName]=useState("")
    const [tnc,setTnc]=useState(false)
    const [interest,setInterest]=useState("")
    function getFromData(e){
        console.log(`Form \n ${name}, ${tnc},${interest}`)
        e.preventDefault();
    }

    
    return (
        <div className="center">
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={getFromData}>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type='text' className='form-control' placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label >Example select</label>
                            <select className="form-select" id="exampleFormControlSelect1" onChange={(e)=>setInterest(e.target.value)}>
                                <option>1</option>
                                <option>2</option>
                               
                            </select>
                        </div>
                        <div className="form-group">
                        <label >Agree</label>
                            <input type='checkbox' className="form-checkbox mx-2" onChange={(e)=>setTnc(e.target.checked)}/>
                             
                        </div>
                         <button className="btn btn-info">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default UserForm