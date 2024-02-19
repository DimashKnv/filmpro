import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Registr() {
  let [loginValue, setLoginValue] = useState("");
  let [passValue, setPassValue] = useState("");
  let [emailValue, setEmailValue] = useState("");
  let navigate=useNavigate()
  return (
    <div className="registrationPage">
      <form
        action=""
        onSubmit={(object) => {
          object.preventDefault();
          console.log(loginValue, passValue, emailValue);
          axios.post("https://jsonplaceholder.typicode.com/users",{login:loginValue,password:passValue,email:emailValue}).then((resp)=>{
            alert("Congratulations,you have completed registration")
          navigate("/")

          }).catch((resp)=>{
            return alert("Oops, something went wrong")
          })
        }}
      >
        <h1>SignUp</h1>
        <input
          type="text"
          value={loginValue}
          placeholder="Your login"
          onChange={(object) => {
            setLoginValue(object.target.value);
          }}
        />
        <input
          type="password"
          value={passValue}
          placeholder="Your password"
          onChange={(object) => {
            setPassValue(object.target.value);
          }}
        />
        <input
          type="email"
          value={emailValue}
          placeholder="Your Email"
          onChange={(object) => {
            setEmailValue(object.target.value);
          }}
        />
        <button>Sign Up</button>
        <div className="formLinks">
          {" "}
          <h3>
            Already have an account, you can <Link to="/login">Sign in</Link>
          </h3>
          <h4>
            <Link to="/">Back to home page </Link>
          </h4>
        </div>
      </form>
    </div>
  );
}
