import { useSelector } from "react-redux";

import CartCard from "./CartCard";
import { useState } from "react";

const Cart = ()=>{

    const products = useSelector((store)=>store.cart);
    if(products.length == 0){
        return null;
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