import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-black-100 w-full h-fit py-4 flex justify-between items-center text-white">
      <figure>
        <img src="../src/assets/logo.svg" alt="logo" width={200} height={200} />
      </figure>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Navigation;
