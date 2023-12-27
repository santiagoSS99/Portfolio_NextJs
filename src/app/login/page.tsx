import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <article className="flex justify-center items-center h-screen ">
      <form className="flex flex-col justify-center items-center w-auto p-8 h-auto shadow-2xl rounded-3xl backdrop-blur bg-softwhite">
        <h1 className="font-black text-2xl my-4">Login</h1>
        <section className="flex relative justify-center w-full">
          <input type="text" placeholder="Username" required className="w-full border-2 p-3 my-3 rounded-full"/>
          <FaUser className="absolute right-3 top-7"/>
        </section>
        <section className="flex relative justify-center w-full">
          <input type="password" placeholder="Password" required className="w-full border-2 p-3 my-3 rounded-full"/>
          <FaLock className="absolute right-3 top-7"/>
        </section>
        <section className="flex justify-between w-full top-7">
          <label className="inline-flex items-center" >
            <input type="checkbox" className="m-1 justify-center"/>
            Remember me
          </label>
          <a href="">Forgot Password?</a>
        </section>

        <section className="mt-3">
          <button type="submit" className="px-6 py-1 rounded-3xl text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Login</button>
        </section>

        <section className="mt-5 mb-5">
          <p>
            Dont have an account? <a className="font-bold" href="">Register</a>
          </p>
        </section>
      </form>
    </article>
  );
};

export default Login;
