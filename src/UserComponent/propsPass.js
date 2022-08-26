import { PlaceholderButton } from "react-bootstrap"

function UserProps(props){
    console.log('props list',props)
    return(
        <div className="bg-primary mb-3">
            <p>Props Name: {props.name} Email: {props.Email} <span className="bg-dark">Address:{props.address.State}</span> </p>
        </div>
    )
}

export default UserProps