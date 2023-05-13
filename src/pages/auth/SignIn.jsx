import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const style = { color: "#fff" };

  return (
    <section className="bg-emerald-100 h-screen flex justify-center items-center">
      <div className="-mt-40 shadow-xl p-20 pt-12 bg-black/5 rounded-2xl">
        <h2 className="text-primary text-4xl mb-6 font-bold text-center">
          Sign In
        </h2>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="p-4 pr-12 py-2 text-white placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-4 py-2 text-white placeholder:text-tertiary rounded-lg outline-none border-secondary border-[1px] font-medium mb-1"
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
          <button className="flex items-center justify-center gap-2 bg-orange-600 px-2 py-3 outline-none w-5/6 text-white font-bold shadow-md shadow-[#58585885] rounded-xl self-center transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 mb-12">
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
  );
};

export default SignIn;
