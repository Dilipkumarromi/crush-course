import { useState } from "react" 
function Profile(){
    const [isLogin,setIsLogin]=useState(false)
    // if(isLogin){
    //     return(
    //         <div>
    //             <h1>Welcome to Dilip</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Welcome to Guest</h1>
    //         </div>
    //     )
    // }

    return(
       <div>
         {
            isLogin?<h1>Welcome to Dilip</h1>:<h1>Welcome to Guest</h1>
        }
       </div>
    )

}

export default Profile