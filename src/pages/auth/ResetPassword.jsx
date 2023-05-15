import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <section className="bg-emerald-100 h-screen flex flex-col gap-8 justify-center items-center">
      <div className="-mt-40 shadow-xl p-16 pt-12 bg-black/5 rounded-2xl sm:w-[500px] mb-8">
        <h2 className="text-primary text-4xl mb-6 font-bold text-center">
          Forgot Password?
        </h2>
        <div className="mb-4 ">
          <p>Don't worry, it happens to the best of us &#128517; </p>
          <p>
            Enter the email address associated with your account in the field
            below, and we'll send you an email with a link to reset your
            password.
          </p>
        </div>
        <form ref={formRef} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="p-4 pr-12 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-4"
          />

          <button
            type="submit"
            className="bg-primary py-2 px-8 outline-none w-5/6 text-white font-bold shadow-md shadow-[#58585885] rounded-xl flex self-center justify-center text-lg transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1"
          >
            Reset Password
          </button>
        </form>

        <div className="w-full text-right transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1">
          <Link to="/signin">
            <span className="text-3xl">&larr;</span>
            Back to Sign In
          </Link>
        </div>
      </div>

      <p>
        If you don't receive an email from us within a few minutes, please check
        your spam folder.
      </p>
    </section>
  );
};

export default ResetPassword;
