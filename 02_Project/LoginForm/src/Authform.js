/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

const Authform = () =>{
        const [islogin, setislogin] = useState(true);
    return (
        <div className="container">
            <div className="form-container">
             <div className="form-toggle ">
               <button className={islogin ? "active" : "" } onClick={ () => setislogin(true)}> Login</button>
               <button className= {!islogin ? "active" : ""} onClick={ () => setislogin(false)}> SignUp</button>
             </div>

             {islogin ? <>
                   <div className="form">
                      <h3>Login form</h3>
                      <input type="text" placeholder="Email"></input>
                      <input type="password" placeholder="password"></input>
                      <a href="#">Forgot password?</a>
                       <button onClick={() => alert("logged in")}>Submit</button>
                       <p>Not a member? <a href="#" onClick={() => setislogin(false)}>SignUp</a> </p>
                   </div>
             </> :  <>
                  <div className="form">

                   <h3>SignUp form</h3>
                   <input type="text" placeholder="Email"></input>
                   <input type="password" placeholder="password"></input>
                   <input type="password" placeholder="Confirm password"></input>
                   <button onClick={ () => alert("logged in")}>Submit</button>  


                </div>
             </>}
            </div>
        </div>
    )
}

export default Authform;