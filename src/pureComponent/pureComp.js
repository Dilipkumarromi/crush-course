import {PureComponent} from 'react'
class PurComp extends PureComponent{
    constructor(){
        super();
        this.state={count:1}
    }

    render(){
        return(
            <div>
                <h1>Pure component: {this.state.count}</h1>
                <button onClick={()=>this.setState()}>Click to check pure component</button>
            </div>
        )
    }

}

export default PurComp