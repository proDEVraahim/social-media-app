import "./login.scss";

const Login = () => {
  return <div className="login">
    <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim 
                id est laborum.</p>
                <span>Don't you have an account?</span>
                <button>Register</button>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="password" name="" id="" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    </div>
  </div>;
};

export default Login;
