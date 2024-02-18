import { Link } from "react-router-dom"


export function Registr(){
    return <div className="registrationPage">
<form action="">
    <input type="text" placeholder="Your login"/>
    <input type="text" placeholder="Your password"/>
    <input type="text" placeholder="Your email"/>
    <button>Registrate</button>
</form>

<h3>If you already have an account, you can <Link to="/login">Sign in</Link></h3>
<h4><Link to="/">Back to home page</Link></h4>

    </div>
}