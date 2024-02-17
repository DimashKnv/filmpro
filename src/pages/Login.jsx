import { Link } from "react-router-dom";

export function Login(){
    return <div>
        <form action="">
            <input type="text" placeholder="Your login"/>
            <input type="text" placeholder="Your password"/>
            <button>Sign in</button>
        </form>

        <h3>You can back go the home page <Link></Link></h3>
    </div>
}