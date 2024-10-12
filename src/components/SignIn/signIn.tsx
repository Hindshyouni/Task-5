import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo (1).png";
import "./signIn.css";
import upload from "../../images/Upload icon.png";
import { useState } from "react";
import axios from "axios";

interface SignInProps {
  showImageInput?: boolean;
  showImageInput2?: boolean;
}


const signIn = ({ showImageInput, showImageInput2 }: SignInProps) => {

    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const navigate = useNavigate()

    // const [name, setname] = useState("")
    // const [lastname, setlastname] = useState("")
    // const [repassword , setrepassword] = useState("")
    // const [image, setimage] = useState<File | null>(null)


    function send(event :any){
        event.preventDefault()
        axios.post("https://test1.focal-x.com/api/login" , {
            email: email,
            password: password
        } , {}).then(res => {
            localStorage.setItem("token" , `Bearer ${res.data.token}`)
            navigate("/dashboard")
          })
        .catch(error=>console.log(error))
    }



  return (
    <div className="all">
      <div className="wrapper">
        <form onSubmit={(event)=> send (event)}>
          <div className="img-logo">
            <img src={logo} alt="logo" />
          </div>
          <h3>Sign In</h3>
          <p>Enter your credentials to access your account</p>
          <div className="form-input">
            {showImageInput && (
              <div className="name-input">
                <div>
                  <label htmlFor="Email">Name</label>
                  <input type="text" placeholder="First Name" ></input>
                </div>
                <div>
                  <label htmlFor="Email">Last</label>
                  <input type="text" placeholder="Last Name"  ></input>
                </div>
              </div>
            )}

            <div className="input-box">
              <label htmlFor="Email">Email</label>
              <input type="text" placeholder="Enter your Email" onChange={(event) =>setemail(event.target.value)}></input>
            </div>
            {showImageInput2 && (
            <div className="input-box">
              <label htmlFor="Password">Password</label>
              <input type="number" placeholder="Enter your Password" onChange={(event) =>setpassword(event.target.value)}></input>
            </div>
            )}

            {showImageInput && (
              <div className="name-input">
                <div>
                  <label htmlFor="Email">Password</label>
                  <input type="number" placeholder="Enter Password" onChange={(event) =>setpassword(event.target.value)}></input>
                </div>
                <div>
                  <label htmlFor="Email">Re-Password</label>
                  <input type="number" placeholder="Re-enter your password"></input>
                </div>
              </div>
            )}

            {showImageInput && (
              <div className="img-form">
                <span>Profile Image</span>
                <div className="upload-img">
                <input type="file" >
                    
                <img src={upload} alt="Upload icon"  /> </input>
                </div>
              </div>
            )}
            <button type="submit"  value="send">SIGN IN</button>
          </div>

          <div className="have-account">
            <p>
              Dont have an account?<NavLink className="orange" to="/signup">Create one</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signIn;
