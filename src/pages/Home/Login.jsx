import { Link, useLocation, useNavigate } from "react-router-dom";
import GetContext from "../🟢 Provider/GetContext";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
 const {signIn} = GetContext()

 console.log(location)


  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
  
    console.log(location)

    signIn(email, password)
    .then(()=> navigate(location.state?location.state: '/'))
    .catch(err => console.error(err))
  };

  return (
    <div>
      <form onSubmit={handleSignIn} className="w-2/4 mx-auto mt-20">
        <h1 className="text-5xl font-bold text-center py-8">Sign in please</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email" // Added name attribute
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password" // Added name attribute
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <p className="text-center pt-2 ">
          Do not have account? <Link to="/register" className="text-blue-600 ">Register</Link>
        </p>
    </div>
  );
};

export default Login;
