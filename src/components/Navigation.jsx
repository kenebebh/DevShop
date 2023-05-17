import { NavLink, useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch;
  const [displayName, setDisplayName] = useState("");

  //Monitor currently signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        const names = user.displayName.split(" ");
        setDisplayName(names[1]);

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, []);

  const style = { color: "#fff", fontSize: "1.5rem" };
  const Links = [
    { name: "Home", link: "/" },
    { name: "Contact us", link: "/contact" },
    { name: "Order History", link: "/history" },
    { name: "Admin", link: "/admin" },
  ];

  const SetLinks = [
    { name: "Sign In/Sign Up", link: "/signin" },
    { name: "Cart", link: "/cart" },
  ];
  const [open, setOpen] = useState(false);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(REMOVE_ACTIVE_USER());
        toast.success("Logout Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-black-200 w-full h-fit py-4 xs:px-4 sm:px-8 flex justify-between items-center text-white">
      <figure>
        <img
          src="../src/assets/logo.svg"
          alt="logo"
          className="sm:w-[200px] xs:w-[120px]"
        />
      </figure>
      <nav className="flex items-center">
        {displayName !== "" && (
          <div className="flex items-center text-xl text-orange-600 md:w-48 w-auto">
            <FaRegUserCircle />
            Hi, {displayName}
          </div>
        )}
        <div>
          <TfiMenu
            onClick={() => setOpen(!open)}
            className="hover:cursor-pointer md:hidden"
          />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[1] left-0 h-screen md:h-auto md:w-full sm:w-4/6 xs:w-full md:pl-0 pl-9 transition-all duration-500 ease-in top-0  ${
            open ? "left-0" : "left-[-1000px]"
          }`}
        >
          <figure className="-ml-9 md:hidden flex justify-between w-full items-center">
            <img
              src="../src/assets/logoTrans.png"
              alt="logo"
              width={200}
              height={200}
            />
            <IoMdClose
              style={style}
              onClick={() => setOpen(!open)}
              className="hover:cursor-pointer"
            />
          </figure>
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 text-lg lg:ml-8 lg:text-xl hover:text-green-300 duration-500 relative"
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? `underSpecial text-primary duration-500 pb-1` : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {SetLinks.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 text-lg lg:ml-8 lg:text-xl hover:text-green-300 duration-500 relative"
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? `underSpecial text-primary duration-500 pb-1` : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <NavLink
            onClick={logoutUser}
            className="md:ml-4 text-lg lg:ml-8 lg:text-xl hover:text-green-300 duration-500 relative"
          >
            Logout
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
// underline underline-offset-8
