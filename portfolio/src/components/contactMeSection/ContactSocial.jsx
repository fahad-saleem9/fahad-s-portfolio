import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        Link="https://github.com/fahad-saleem9"
        Icon={FaGithub}
      />
      <SingleContactSocial
        Link="https://www.linkedin.com/in/fahad-saleem-923402274/"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        Link="https://www.instagram.com/your_instagram_username/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
