import { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeProducts } from "../utils/cartSlice";

const CartCard = ({ data , setTotalCartCost, totalCartCost})=>{

    const dispatch = useDispatch();

    const [ totalCost, setTotalCost ] = useState(parseFloat(data.price));
    const [count, setCount] = useState(1);

    const handleIncrease = ()=>{ 
        setTotalCost(totalCost+parseFloat(data.price));
        setTotalCartCost(totalCartCost+parseFloat(data.price));
        setCount(count+1);
    }
    const handleDecrease = ()=>{
        setTotalCost(totalCost-parseFloat(data.price));
        setTotalCartCost(totalCartCost-parseFloat(data.price));
        setCount(count-1);
    }

    const handleClick = ()=>{
        setTotalCartCost(totalCartCost-totalCost);
        dispatch(removeProducts(data.id));
    }


    return (
        <div className="flex m-2 border-b">
                    <div className="w-[100px] h-[100px] m-2">
                        <img className="rounded-lg" src={data.image}/>
                    </div>
                    <div className="w-full ml-2">
                        <div className="flex justify-between items-center">
                            <h1 className="font-medium text-base">{data.name}</h1>
                            <h2 className="text-3xl" onClick={handleClick}><BsX /></h2>
                        </div>
                        <h2 className=" text-xs text-gray-400 font-extralight">{data.quantity+", Price"}</h2>
                        <div className="my-3 flex justify-between">
                            <div className="flex gap-3 items-center">
                                <h2 className="font-semibold rounded-lg cursor-pointer text-2xl pb-1 flex items-center justify-center border size-8 text-gray-500" onClick={count>1 ? handleDecrease : null}>-</h2>
                                <h2>{count}</h2>
                                <h2 className="font-semibold rounded-lg cursor-pointer text-2xl pb-1 flex items-center justify-center border size-8 text-green-400" onClick={handleIncrease}>+</h2>
                            </div>
                            <div className="">
                                <h2 className="font-semibold text-lg">{"$"+totalCost}</h2>
                            </div>
                        </div>

                    </div>
                </div>
    )
}

export default CartCard;