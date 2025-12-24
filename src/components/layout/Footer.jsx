import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { footerItems } from "../../data/data";
import { IoMdCall, IoMdMail } from "react-icons/io";

const followIcons = [FaFacebookF, FaInstagram, FaWhatsapp];

const Footer = () => {
  return (
    <div
      className="w-full min-h-min object-cover"
      style={{ backgroundImage: `url('FooterBg.png')` }}
    >
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-2 text-white pt-16 pb-10 border-b ">
          <div className="space-y-8">
            <img
              src="footerLogo.png"
              alt="Logo"
              className="w-full max-w-[210px]"
            />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] bg-white rounded-full flex justify-center items-center">
                  <IoMdCall className="text-[#430C41] w-5 h-5" />
                </div>
                <div className="text-xl font-bold">+91 9812345698</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] bg-white rounded-full flex justify-center items-center">
                  <IoMdMail className="text-[#430C41] w-5 h-5" />
                </div>
                <div className="text-xl font-bold">info@example.com</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-bold uppercase">Follow Us On</div>
              <div className="flex items-center gap-3">
                {followIcons.map((Icon, index) => (
                  <div
                    className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center cursor-pointer"
                    key={index}
                  >
                    <Icon className="h-[18px] w-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {footerItems.map((item, index) => (
            <div className="space-y-3" key={index}>
              <div className="text-lg font-bold uppercase">{item.title}</div>
              <div className="space-y-2">
                {item.links.map((subItem, subIndex) => (
                  <div className="flex items-center gap-2" key={subIndex}>
                    <FaChevronRight />
                    <div className="cursor-pointer text-lg font-medium">
                      {subItem}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="py-6 text-center text-white font-medium">
          © 2025 All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
