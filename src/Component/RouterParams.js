import { useParams } from "react-router-dom"


function RouterParams(){
    const params=useParams()
    console.log('params',params)
    return (
        <>

            <h1>Welcome to Router Params Page Name:{params.name}</h1>
            </>
    )
}
export default RouterParams