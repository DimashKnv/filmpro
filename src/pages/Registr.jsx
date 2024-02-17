import { Link } from "react-router-dom"
import { Login } from "./Login"

export function Registr(){
    return <div>
<form action="">
    <input type="text" placeholder="Your login"/>
    <input type="text" placeholder="Your password"/>
    <input type="text" placeholder="Your email"/>
    <button>Registrate</button>
</form>

<h3>If you already have an account, you can <Link to="/login">Sign up</Link></h3>

    </div>
}