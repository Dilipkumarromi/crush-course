import { useSearchParams,useNavigate } from "react-router-dom";


function FilterParams(){
    const [searchParams,setSearchParams]=useSearchParams();
    console.log('name',searchParams.get('name'))
    console.log('add',searchParams.get('add'))
    const name=searchParams.get('name')
    const address=searchParams.get('add')
    return(
        <div>
            <h1>Name:{name}</h1>
            <br></br>
            <h2>Address:{address}</h2>
            <button onClick={useNavigate('/About')}>Go to About</button>
        </div>
    )
}
export default FilterParams