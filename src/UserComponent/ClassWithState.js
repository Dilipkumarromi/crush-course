import React,{Component} from 'react';
class ClasswithState extends React.Component {
    constructor(){
        super();
        this.state = {  
            data:1
        };
    }

    apple(){
        this.setState({data:"India"});
    }

    render(){
        return(
            <div>
                <h1>Class with State</h1>
                <button className='btn btn-primary' onClick={()=>this.apple()}>{this.state.data} </button>
            </div>
        )
    }
}

export default ClasswithState
