import { Link } from "react-router-dom";

export function Login(){
    return <div className="loginPage">
        <form action="">
            <input type="text" placeholder="Your login"/>
            <input type="text" placeholder="Your password"/>
            <button>Sign in</button>
        </form>

        <h3>Don’t have an account yet? You can register<Link to="/Registration">Sign up</Link></h3>
        <h4><Link to="/">Back to home page</Link></h4>
    </div>
}