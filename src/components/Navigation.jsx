import { NavLink, useNavigate, Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";
import { useSelector } from "react-redux";
import { selectUserName, selectEmail } from "../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "./HideLinks";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const email = useSelector(selectEmail);

  const [displayName, setDisplayName] = useState("");
  const [open, setOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const [openAcctDropdown, setOpenAcctDropdown] = useState(false);
  const [openHelpDropdown, setOpenHelpDropdown] = useState(false);

  const menuRef = useRef();
  const acctRef = useRef();
  const helpRef = useRef();
  const helpMenuRef = useRef();

  window.addEventListener("click", (e) => {
    if (
      e.target !== menuRef.current &&
      e.target !== acctRef.current &&
      e.target !== helpRef.current &&
      e.target !== helpMenuRef.current
    ) {
      setOpenAcctDropdown(false);
      setOpenHelpDropdown(false);
    }
  });

  //Monitor currently signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // const uid = user.uid;
        console.log(userName);
        if (user.displayName !== null) {
          const names = user.displayName.split(" ");
          setDisplayName(names[1]);
        } else {
          setDisplayName(userName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch]);

  const style = { color: "#fff", fontSize: "1.5rem" };

  const AcctLinks = [
    { name: "My Account", link: "/account" },
    { name: "My Orders", link: "/orders" },
    { name: "Saved Items", link: "/items" },
  ];

  const HelpLinks = [
    { name: "FAQs", link: "/help" },
    { name: "Returns & Refunds", link: "/help" },
    { name: "Order Cancellations", link: "/help" },
  ];

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
        <a href="/">
          <img
            src="../src/assets/logo.svg"
            alt="logo"
            className="sm:w-[180px] xs:w-[120px]"
          />
        </a>
      </figure>

      <div className="relative">
        <input
          type="search"
          name="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search for an item..."
          className="h-auto md:w-[280px] lg:w-[400px] rounded text-secondary border-0 px-3 py-2 leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none relative"
        />
        <button
          type="submit"
          className="bg-primary text-white rounded h-full  sm:px-2 lg:px-4 py-2 absolute right-0 hover:bg-primary/90 hover:text-purple-700 transition-all duration-200 "
        >
          Search
        </button>
      </div>

      <nav className="flex items-center">
        {/* Display name dropdown */}
        <ShowOnLogin>
          {displayName !== "" && (
            <div
              className="flex items-center min-w lg:text-xl md:text-lg text-orange-600 md:min-w-fit px-4 w-auto hover:cursor-pointer relative"
              ref={acctRef}
              onClick={() => setOpenAcctDropdown(!openAcctDropdown)}
            >
              <FaRegUserCircle />
              Hi, {displayName}
              <IoMdArrowDropdown />
            </div>
          )}
          {openAcctDropdown && (
            <div
              className="bg-white p-4 pr-8 w-fit shadow-lg absolute top-16 after:content-[''] after:absolute after:left-1/3 after:-top-4 after:border-8 after:border-y-transparent after:border-t-transparent after:border-x-transparent after:border-b-white"
              ref={menuRef}
            >
              <ul>
                {AcctLinks.map((link) => (
                  <li
                    key={link.name}
                    onClick={() => setOpenAcctDropdown(false)}
                    className="p-2 text-lg cursor-pointer rounded hover:text-white text-tertiary  w-full duration-500 hover:bg-primary/50 relative"
                  >
                    <Link to={link.link} className="">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <div className="w-full hover:bg-primary/50 py-2 rounded ">
                  <Link
                    onClick={logoutUser}
                    className="p-2 text-lg cursor-pointer rounded hover:text-white text-tertiary duration-500 w-full"
                  >
                    Logout
                  </Link>
                </div>
              </ul>
            </div>
          )}
        </ShowOnLogin>

        {/* Menu icon */}
        <div>
          <TfiMenu
            onClick={() => setOpen(!open)}
            className="hover:cursor-pointer md:hidden"
          />
        </div>

        <div
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

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `underSpecial text-primary duration-500 pb-1 text-lg lg:text-xl`
                : "md:ml-4 text-lg lg:ml-8 lg:text-xl hover:text-green-300 duration-500 relative"
            }
          >
            Home
          </NavLink>

          {/* Help dropdown */}
          <div>
            <div
              className="md:ml-4 text-lg lg:ml-8 lg:text-xl hover:text-green-300 flex items-end duration-500 relative hover:cursor-pointer"
              onClick={() => setOpenHelpDropdown(!openHelpDropdown)}
              ref={helpRef}
            >
              Help
              <IoMdArrowDropdown />
            </div>

            {openHelpDropdown && (
              <div
                className="bg-white py-4 px-2 w-fit shadow-lg absolute top-16 after:content-[''] after:absolute after:left-1/4 after:-top-4 after:border-8 after:border-y-transparent after:border-t-transparent after:border-x-transparent after:border-b-white"
                ref={helpMenuRef}
              >
                <ul>
                  {HelpLinks.map((link) => (
                    <li
                      key={link.name}
                      onClick={() => setOpenHelpDropdown(false)}
                      className="p-2 text-lg cursor-pointer rounded hover:text-white text-tertiary w-full duration-500 hover:bg-primary/50 relative"
                    >
                      <Link to={link.link} className="">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <ShowOnLogout>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? `underSpecial text-primary duration-500 pb-1 text-lg lg:text-xl ml-8`
                  : "md:ml-4 text-lg lg:ml-8 lg:text-xl hover:text-green-300 duration-500 relative"
              }
            >
              Sign In/Signup
            </NavLink>
          </ShowOnLogout>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? `underSpecial text-primary duration-500 pb-1 text-lg lg:text-xl ml-8`
                : "md:ml-2 text-lg lg:ml-8 lg:text-xl hover:text-green-300 duration-500 relative"
            }
          >
            Cart
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
// underline underline-offset-8
