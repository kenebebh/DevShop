import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";

const SignUp = () => {
  const style = { color: "#fff" };
  const formRef = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.password === form.confirmPassword) {
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          toast.success("You have Successfully created an Account");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.code, error.message);
        });
    } else {
      toast.error("Passwords do not match!!");
    }
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
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
      <section className="bg-emerald-100 h-screen flex justify-center items-center">
        <div className="-mt-16 shadow-xl p-20 py-10 bg-black/5 rounded-2xl">
          <h2 className="text-primary text-4xl mb-8 font-bold text-center">
            Create An Account
          </h2>
          <form ref={formRef} onSubmit={registerUser} className="flex flex-col">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="p-4 pr-12 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="p-4 pr-12 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-4 pr-12 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="p-4 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="p-4 py-2 text-black placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-8"
            />

            <button
              type="submit"
              className="bg-primary py-2 px-8 outline-none w-5/6 text-white font-bold shadow-md shadow-[#58585885] rounded-xl flex self-center justify-center text-lg transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1"
            >
              Create Account
            </button>
          </form>
          <div className="flex flex-col items-center justify-center">
            <p>-- or --</p>
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center gap-2 bg-orange-600 px-2 py-3 outline-none w-5/6 text-white font-bold shadow-md shadow-[#58585885] rounded-xl self-center transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 mb-10"
            >
              <FaGoogle style={style} />
              Sign Up with Google
            </button>

            <span className="flex flex-col items-center gap-1">
              <p>Already have an account?</p>
              <button
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex items-center justify-center border-2 border-red-500 bg-white/80 px-4 py-3 outline-none w-full text-red-400 font-bold shadow-md shadow-[#3b71ca4d] rounded-xl self-center transition duration-300 ease-in-out hover:text-red-600 hover:border-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                <Link to="/signin" className="">
                  Sign In to Your Account
                </Link>
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
