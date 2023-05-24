import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase/config";

const SignIn = () => {
  const style = { color: "#fff" };
  const navigate = useNavigate();

  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // const user = userCredential.user;
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.code, error.message);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer />

      <section className="bg-emerald-100 h-screen flex justify-center items-center overflow-hidden">
        <div className="-mt-40 shadow-xl p-20 pt-12 bg-black/5 rounded-2xl">
          <h2 className="text-primary text-4xl mb-6 font-bold text-center">
            Sign In
          </h2>
          <form ref={formRef} onSubmit={signInUser} className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-4 pr-12 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="p-4 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
            />
            <Link
              to="/resetpassword"
              className="underline text-sm text-right mb-4 text-black-100"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-primary py-2 px-8 outline-none w-5/6 text-white font-bold shadow-md shadow-[#58585885] rounded-xl flex self-center justify-center text-lg transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1"
            >
              Sign In
            </button>
          </form>
          <div className="flex flex-col items-center justify-center">
            <p>-- or --</p>
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center gap-2 bg-orange-600 px-2 py-3 outline-none w-5/6 text-white font-bold shadow-md shadow-[#58585885] rounded-xl self-center transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 mb-12"
            >
              <FaGoogle style={style} />
              Sign In with Google
            </button>

            <span className="flex flex-col items-center gap-1">
              <p>Don't have an account?</p>
              <button
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex items-center justify-center border-2 border-red-500 bg-white/80 px-4 py-3 outline-none w-full text-red-400 font-bold shadow-md shadow-[#3b71ca4d] rounded-xl self-center transition duration-300 ease-in-out hover:text-red-600 hover:border-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                <Link to="/signup" className="">
                  Create an Account
                </Link>
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
