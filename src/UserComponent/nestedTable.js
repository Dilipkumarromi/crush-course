import Table from 'react-bootstrap/Table';

function BasicExample() {
    const list = [{ name: "Dilip", Email: "dilip@gmail.com", username: "romi", address: [{ City: 'Salt Lake', Mobile: 7209574558, Email: "romi.indan@gmail.com" }] }]
    
    return (

        <Table className='text-white'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody >
                {
                    list.map((item,dev) =>
                        <tr key={dev}>


                            <><td></td>
                                <td>{item.name}</td>
                                <td>{item.Email}</td>
                                <td>{item.username}</td>
                            </>



                            <td>
                                <Table className='text-white'>
                                    <tbody>
                                        {

                                        item.address?.map((add,k)=>
                                        
                                        <tr key={k}>
                                          <td>{add.City}</td>
                                          <td>{add.Mobile}</td>
                                          <td>{add.Email}</td>
                                        </tr>
                                        )}                                
                                        
                                        
                                    </tbody>
                                </Table>

                            </td>

                        </tr>
                    )}

            </tbody>

        </Table>
    );
}

export default BasicExample;