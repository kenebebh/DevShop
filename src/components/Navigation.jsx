import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navigation;
