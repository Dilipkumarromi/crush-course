import Table from 'react-bootstrap/Table';

function Tbl(){
    const list=[{
        name:"Dilip",
        email:"romi.indan@gmail.com",
        mobile:'7209574558',
        state:"bihar"
    },
    {
        name:"Ramesh",
        email:"Ramesh.indan@gmail.com",
        mobile:'7209574558',
        state:"bihar"
    },
    {
        name:"Rohan",
        email:"Rohan.indan@gmail.com",
        mobile:'7209574555',
        state:"bihar"
    }]
    
    return(
        <div className="contrainer">
    <Table>
      <thead>
      <tr className='text-white'>
            
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        
      </thead>
      <tbody>
      
        {
            // eslint-disable-next-line array-callback-return
            list.map((itemName,i)=>itemName.mobile==='7209574558'?                
                <tr className='text-white' key={i}>
                <td>1</td>
                <td>{itemName.name}</td>
                <td>{itemName.email}</td>
                <td>{itemName.mobile}</td>
              </tr>:null
              
            
             
      
            )
        }
       
        
      </tbody>
    </Table>


        </div>
    )
}
export default Tbl