import Input from "./Input"

function Login() {
    return (
        <div className="row justify-content-center mt-5">
        <div className="card w-25 shadow text-bg-info">
         <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form>
            <Input 
            For="username" 
            type="text" 
            id="username" 
            placeholder="enter username" 
            label="Username"
            />
            <Input 
            For="password" 
            type="password" 
            id="password" 
            placeholder="enter password" 
            label="Password"
            />
            <button 
            type="submit" 
            className="btn btn-primary"
            >
            Login
            </button>
           </form> 
         </div>
        </div>
       </div>
    )
}
export default Login;
