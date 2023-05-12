import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navigation = () => {
  const style = { color: "#fff", fontSize: "1.5rem" };
  const Links = [
    { name: "Home", link: "/" },
    { name: "Contact us", link: "/" },
    { name: "Help", link: "/" },
    { name: "Login", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black-100 w-full h-fit py-4 xs:px-4 sm:px-8 flex justify-between items-center text-white">
      <figure>
        <img
          src="../src/assets/logo.svg"
          alt="logo"
          className="sm:w-[200px] xs:w-[150px]"
        />
      </figure>
      <nav>
        <div>
          <TfiMenu
            onClick={() => setOpen(!open)}
            className="hover:cursor-pointer md:hidden"
          />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-black-100 md:z-auto z-[1] left-0 h-screen md:h-auto md:w-auto sm:w-4/6 xs:w-full md:pl-0 pl-9 transition-all duration-500 ease-in top-0 ${
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
            <li key={link.name} className="md:ml-8 text-xl">
              <Link
                to={link.link}
                className="text-red-600 hover:text-red-800 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
