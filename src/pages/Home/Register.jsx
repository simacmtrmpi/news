
import { Link } from "react-router-dom";
import GetContext from "../🟢 Provider/GetContext";

const Register = () => {

  const {createUser} = GetContext()

// create account here
const handleRegister = (e) =>{ 
      e.preventDefault()

      const formData = new FormData(e.currentTarget);
      const email = formData.get('email');
      const password = formData.get('password')

      createUser(email,password)
      .then(result => console.log(result.user))
      .catch(err => console.error(err))

      
}


  return (
    <div>
      <div className="py-8">
        <form onSubmit={handleRegister} className="w-2/4 mx-auto">
          <h1 className="text-5xl font-bold text-center py-4">
            Register please
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name" // Added name attribute
              placeholder="Enter your name here"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="imgURL" // Added name attribute
              placeholder="Place your image url.."
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
              Register
            </button>
          </div>
        </form>
        <p className="text-center pt-2 ">
          Do not have account? <Link to="/login" className="text-blue-600 ">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
