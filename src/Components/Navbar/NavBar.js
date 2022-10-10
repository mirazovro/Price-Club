import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routs = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/Products" },
    { id: 3, name: "Orders", path: "/Orders" },
    { id: 4, name: "Contact", path: "/Contact" },
    { id: 5, name: "About", path: "/About" },
  ];
  return (
    <nav className="bg-purple-200 w-full">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul
        className={`md:flex justify-center absolute md:static duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routs.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
