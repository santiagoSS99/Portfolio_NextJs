import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <article className="flex justify-center items-center h-screen">
      <form className="flex flex-col justify-center items-center w-[45%] shadow-2xl rounded-3xl backdrop-blur bg-softwhite">
        <h1 className="font-black text-2xl">Login</h1>
        <section className="flex relative w-full justify-center">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </section>
        <section className="flex relative w-full justify-center">
          <input type="password" placeholder="Username" required />
          <FaLock className="icon" />
        </section>
        <section className="flex justify-center">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="">Forgot Password?</a>
        </section>

        <section>
          <button type="submit">Login</button>
        </section>

        <section>
          <p>
            Don't have an account? <a href="">Register</a>
          </p>
        </section>
      </form>
    </article>
  );
};

export default Login;
