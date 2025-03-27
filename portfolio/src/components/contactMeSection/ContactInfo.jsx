import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      {/* Clickable Email */}
      <div className="flex items-center gap-2">
        <MdOutlineMail size={24} />
        <a href="mailto:fa7781824@gmail.com" className="hover:underline">
          fa7781824@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-2">
        <FaPhone size={24} />
        <span>03132528911</span>
      </div>

      <div className="flex items-center gap-2">
        <MdLocationOn size={24} />
        <span>Karachi, Pakistan</span>
      </div>
    </div>
  );
};

export default ContactInfo;
