import React from "react";
import Logo from "../../assets/logo.png";

const NavbarFirst = () => {
  return (
    <div>
      <div className=" bg-white">
        <div className="container py-4 md:py-1">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
            <div className="px-2 w-12 md:w-8 lg:w-60 ">
             <img src={Logo} alt="not found"  />
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarFirst;
