//Install  npm i axios
// npm i json-server
//npm run server
import SweetAlert from 'react-bootstrap-sweetalert';
import Swal from 'sweetalert2'
import axios from 'axios';
import {useEffect, useState} from 'react'
 
function Crud()
{
    function ReloadHandle(e){
        e.preventDefault()
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
    console.log('api fetch data server',users?.data)
    useEffect(()=>{
        try{
            const getAllData=async()=>{
                const res=await axios.get("http://localhost:8000/user");
                setUsers(res.data)
            }
            getAllData()
        }
        catch(e){
            console.log('Fetch Error: ' + e.message)
        }
       

    },[])
    return(
        <>
            <div className="container ">
                <div className="row">

                    <div className="col-6">
                        <h3>Student Entrollment</h3>
                        <form onSubmit={ReloadHandle}>
                            <div className="form-group mx-2 mb-2">                                
                                <input type="email" className="form-control"  placeholder="Enter Name"/>                                
                            </div>
                            <div className="form-group mx-2 mb-2">
                              
                                <input type="email " className="form-control"  placeholder="Enter email"/>
                            </div>

                            <div className="form-group mx-2 mb-3">
                               
                                <input type="email" className="form-control"  placeholder="Enter mobile"/>
                            </div>
                           
                            <button type="submit" className="btn btn-primary ">Submit</button>
                            </form>


                    </div>
                    <div className="col-6 card">
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
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                            <button type="submit" className="btn btn-info" style={{marginRight:'10px'}}>Edit</button>
                            <button type="submit" className="btn btn-danger " onClick={isConformDelete}>Delete</button>
                            </td>
                            </tr>
                            
                        </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Crud