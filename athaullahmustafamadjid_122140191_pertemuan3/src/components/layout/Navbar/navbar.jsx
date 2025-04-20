import { Link } from "react-router";
import React from "react";
import { User, BookOpen, House } from "lucide-react";

const menu = [
  {
    tittle: "Home",
    path: "/",
    icon: <House />,
  },
  {
    tittle: "Daftar Buku Anda",
    path: "/daftarbuku",
    icon: <BookOpen />,
  },
  {
    tittle: "Profil",
    path: "/profil",
    icon: <User />,
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-[15%] py-[30px]">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-poppins font-bold">
            {" "}
            <span className="text-[#d76e5e]">Your</span>
            <span className="text-[#234258]">Book</span>
          </h1>
        </div>

        {/* Menu */}
        <div className="flex gap-8">
          {menu.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>
                <div className="flex items-center space-x-3 hover:text-[#d76e5e] cursor-pointer">
                  {item.icon}
                  <p className="font-poppins text-md">{item.tittle}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
