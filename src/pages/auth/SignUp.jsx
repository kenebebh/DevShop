import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const style = { color: "#fff" };

  return (
    <section className="bg-emerald-100 h-screen flex justify-center items-center">
      <div className="-mt-16 shadow-xl p-20 py-10 bg-black/5 rounded-2xl">
        <h2 className="text-primary text-4xl mb-8 font-bold text-center">
          Create An Account
        </h2>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="First Name"
            className="p-4 pr-12 py-2 text-white placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-4 pr-12 py-2 text-white placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 pr-12 py-2 text-white placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-4 py-2 text-white placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="p-4 py-2 text-white placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-8"
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
          <button className="flex items-center justify-center gap-2 bg-orange-600 px-2 py-3 outline-none w-5/6 text-white font-bold shadow-md shadow-[#58585885] rounded-xl self-center transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 mb-10">
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
  );
};

export default SignUp;
