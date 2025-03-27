import React from "react";

const NavbarLogo = () => {
  const scrollToHero = () => {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div onClick={scrollToHero} className="cursor-pointer">
      <h1 className="text-white text-2xl sm:hidden md:block">Fahad Saleem</h1>
      <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden">
        FS
      </h1>
    </div>
  );
};

export default NavbarLogo;
