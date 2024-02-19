import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  let [loginValue, setLoginValue] = useState("");
  let [passValue, setPassValue] = useState("");
  let navigate=useNavigate()

  return (
    <div className="loginPage">
      <form
        action=""
        onSubmit={(object) => {
          object.preventDefault();
          axios.post("https://jsonplaceholder.typicode.com/users",{email:loginValue,password:passValue}).then((resp)=>{
            console.log(resp)
            alert("Congratulations,you are verifyed")
            navigate("/")
          })
        }}
      >
        <h1>Login</h1>
        <input
          type="text"
          value={loginValue}
          onChange={(object) => {
            setLoginValue(object.target.value);
          }}
          placeholder="Your login"
        />
        <input
          type="password"
          value={passValue}
          onChange={(object) => {
            setPassValue(object.target.value);
          }}
          placeholder="Your password"
        />
        <button>Login</button>
        <div className="formLinksLog">
          <h4>
            Don’t have an account yet?
            <Link to="/Registration">Sign up</Link>
          </h4>
          <h4>
            <Link to="/">Back to home page</Link>
          </h4>
        </div>
      </form>
    </div>
  );
}
