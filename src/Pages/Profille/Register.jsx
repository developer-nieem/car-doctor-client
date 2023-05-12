import Header from "../Shared/Header";
import img from '../../assets/login/login.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Register = () => {
const {createUser} =  useContext(AuthContext)
const registerHandler = (event) =>{
    event.preventDefault();

    const form =  event.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);

    createUser(email, pass)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.log(error.message);
    })
}

const {user} =  useContext(AuthContext);
console.log(user);
  return (
    <div className="md:w-[85%] mx-auto">
        <Header></Header>
      <div className="hero min-h-screen ">
        <div className="hero-content flex gap-8">
          <div className="">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-xl text-center font-bold">Sign Up</h1>
              <form onSubmit={registerHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              </form>
              <p className="text-center">Already have an account? <Link to='/login' className="text-blue-900 underline">Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
