import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const photo = form.get ('photo')
    const email = form.get('email');
    const password = form.get('password');
     console.log(name,photo,email,password)

  
  };
    return (
        <div>
        <div>
          <Navbar></Navbar>
        </div>
  
        <div className="hero bg-base-200 min-h-screen">
          <div>
            <div className="text-center ">
              <h1 className="text-3xl font-bold mb-10">Register Now</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleRegister}  className="card-body">
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    name="password"
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
                  <button className="btn btn-primary">Register</button>
                </div>
                <div className="mt-4">
                  <p>
                    Already have an account?{" "}
                    <Link className="text-green-500" to="/login">
                      
                    Login
                    </Link>
                  </p>  
                </div>
              </form>
            </div>
          </div> 
        </div>
      </div>
    );
};

export default Register;