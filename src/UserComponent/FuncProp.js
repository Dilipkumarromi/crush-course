import React from 'react';
function UserFn(Prop){
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={Prop.data} >Call data function</button>
        </div>
    )
}

export default UserFn