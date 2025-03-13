import { useDispatch } from "react-redux";
import { addProducts } from "../utils/cartSlice";

const Card = ({ data })=>{
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(addProducts(data));
    }

    return (
        <div className=" m-2 p-2 w-[160px] rounded-md border-2">
            <div className="w-[140px] h-[140px]">
                <img src={data.image}/>
            </div>
            <div className="m-1">
                <h2 className="font-semibold text-sm">{data.name}</h2>
                <p className="font-light text-xs text-gray-400">{data.quantity+", Price"}</p>
            </div>
            <div className="flex m-1 flex-wrap justify-between items-center">
                <h2 className="font-bold">{"$"+data.price}</h2>
                <div className="bg-green-400  rounded-lg size-8 pb-1 flex justify-center items-center cursor-pointer hover:bg-green-600" onClick={handleClick}>
                <h2 className="font-bold text-3xl text-white">+</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;