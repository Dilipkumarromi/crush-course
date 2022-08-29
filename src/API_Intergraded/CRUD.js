//Install  npm i axios
// npm i json-server
//npm run server
import Swal from 'sweetalert2'
import axios from 'axios';
import {useEffect, useState} from 'react'
 
function Crud()
{
    const [render,setRender]=useState(false)
    const ReloadHandle = async(e)=>{
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure? Save',          
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const p=    axios.post("http://localhost:80/student/register",input).then(result=>{
                    Swal.fire(
                        'Saved!',
                        'Your file has been Saved!.',
                        'success'
                      )
                })
                console.log('register',p)
                 setRender(true)
               
            }
          })


    
    }
    function isConformDelete()
    {
        Swal.fire({
            title: 'Are you sure? Delete',          
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    const [users,setUsers]=useState()
    console.log('api fetch data server',users?.result)

    //Form Input Hold data
    const [input,setInput]=useState({
        name:"",
        email:"",
        mobile:""
    })
    useEffect(()=>{
        try{
            const getAllData=async()=>{
                const res=await axios.get("http://localhost:80/student/list");
                setUsers(res.data)
            }
            getAllData()
        }
        catch(e){
            console.log('Fetch Error: ' + e.message)
        }
       

    },[render])
    return(
        <>
            <div className="container ">
                <div className="row">

                    <div className="col-md-4">
                        <h3>Student Entrollment</h3>
                        <form onSubmit={ReloadHandle}>
                            <div className="form-group mx-2 mb-2">                                
                                <input type="text" className="form-control"  placeholder="Enter Name" name="name" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                                value={input.name}/>                                
                            </div>
                            <div className="form-group mx-2 mb-2">
                              
                                <input type="email " className="form-control"  placeholder="Enter email" name="email" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                                value={input.email}/>
                            </div>

                            <div className="form-group mx-2 mb-3">
                               
                                <input type="text" name="mobile" className="form-control"  placeholder="Enter mobile" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                                value={input.mobile}/>
                            </div>
                           
                            <button type="submit" className="btn btn-primary ">Submit</button>
                            </form>


                    </div>
                    <div className="col-md-8 card">
                        <h3 className="text-dark">Student list</h3>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            users?.result.map((item,i)=>
                            <tr key={i}>
                            <th scope="row">{item.SubjectID}</th>
                            <td>{item.name}</td>
                            <td className='text-wrap'>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>
                            <button type="submit" className="btn btn-info" style={{marginRight:'10px'}}>Edit</button>
                            <button type="submit" className="btn btn-danger " onClick={isConformDelete}>Delete</button>
                            </td>
                            </tr>

                            )
                           }
                            
                        </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Crud