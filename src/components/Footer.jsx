const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="bg-black-200 w-full h-fit py-4 xs:px-4 sm:px-8 flex justify-center items-center text-white fixed bottom-0">
      &copy; {year} Banigo Kenebebh. All Rights Reserved.
    </div>
  );
};

export default Footer;
