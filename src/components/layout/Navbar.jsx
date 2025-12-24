import { CiMenuBurger } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const navicons = [HiMagnifyingGlass, HiOutlineShoppingBag, FaRegCircleUser];

const Navbar = () => {
  return (
    <div className="w-full bg-[#FFF9EE]">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center gap-2">
        <button
          className="hidden sm:flex items-center gap-[10px] px-5 py-[10px] bg-[#FFECC8] font-semibold 
        text-[#432F43] border border-[#F9C255] rounded-full sm:rounded-[50px]"
        >
          <LuMenu className="w-7 h-7" />
          <div className="hidden sm:block">View All Menu</div>
        </button>
        <button className="w-12 h-12 flex sm:hidden justify-center items-center bg-[#FFECC8] text-[#432F43] border border-[#F9C255] rounded-full">
          <LuMenu className="w-7 h-7" />
        </button>

        <Link to="/">
          <img
            src="MainLogo.png"
            alt="MainLogo"
            className="w-[112px] sm:w-[156px] md:w-[211px] cursor-pointer"
          />
        </Link>
        <div className="flex items-center gap-4">
          {navicons.map((Icon, index) => (
            <button
              key={index}
              className="w-12 h-12 flex justify-center items-center bg-[#FFECC8] text-[#432F43] border border-[#F9C255] rounded-full"
            >
              <Icon className="w-7 h-7" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
