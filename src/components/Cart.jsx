import { useSelector } from "react-redux";
import { IoArrowUndoOutline } from "react-icons/io5";

import CartCard from "./CartCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ()=>{

    const products = useSelector((store)=>store.cart);
    const navigate = useNavigate();
    const handleNavigateClick = ()=>{
        navigate("/");
    }

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-52">
                <h2 className="text-xl font-semibold text-gray-500">Your cart is empty!</h2>
                <p className="text-gray-400">Add some items to see them here.</p>
                <button className="rounded-lg border border-green-700 w-28 flex justify-center my-2 text-gray-300 text-xl bg-green-500 px-4 py-2" onClick={handleNavigateClick}><IoArrowUndoOutline /></button>
            </div>
        );
    }

    const [cartItems, setCartItems] = useState(products);
    const [totalCartCost, setTotalCartCost] = useState(()=>
        cartItems.reduce((total,item)=>total+parseFloat(item.price),0)
);
    

    return (
        <div className="">
            <div className="my-4 flex items-center justify-center">
                <h2 className="font-semibold text-xl ">My Cart</h2>
            </div>
            <div className="border-t">
                {products.map((data)=><CartCard key={data.id} data={data} setTotalCartCost={setTotalCartCost} totalCartCost={totalCartCost}/>)}
            </div>
            <div className="max-w-[90%] mx-auto rounded-lg bg-green-500 flex justify-center gap-3 items-center h-10 mt-4">
                    <h2 className="font-semibold text-lg text-white">Go to Checkout</h2>
                    <div className="bg-green-600 text-gray-200 font-thin text-xs px-1 py-1 rounded-lg">
                        ${totalCartCost.toFixed(2)}
                    </div>
            </div>  
        </div>
    )
}

export default Cart;