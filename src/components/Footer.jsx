import { BsShop } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiMenuSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { NavLink } from "react-router-dom";


const Footer = ()=>{

    return (
        <div className="fixed bottom-0 w-full bg-white shadow-md border-t flex justify-around p-3 text-gray-700">
            <div className="flex flex-col items-center p-1">
                <BsShop  className="size-6"/>
                <p className="font-normal text-sm">Shop</p>
            </div>
            <NavLink to="/" className={({isActive})=>(isActive ? "text-green-600" : "text-gray-500")+" flex flex-col items-center p-1"}>
                <RiMenuSearchLine className="size-6"/>
                <p className="font-normal text-sm">Explore</p>
            </NavLink>
            <NavLink to="/cart" className={({isActive}) => (isActive ? "text-green-600" : "text-gray-500")+" flex flex-col items-center p-1"}>
                <HiOutlineShoppingCart className="size-6"/>
                <p className="font-normal text-sm">Cart</p>
            </NavLink>
            <div className="flex flex-col items-center p-1">
                <FaRegHeart className="size-6"/>
                <p className="font-normal text-sm">Favourite</p>
            </div>
            <div className="flex flex-col items-center p-1">
                <LuUser className="size-6"/>
                <p className="font-normal text-sm">Account</p>
            </div>
        </div>
    )
}

export default Footer;