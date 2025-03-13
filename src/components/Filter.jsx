import { BsX } from "react-icons/bs";

const Filter = ({ setFilterToggle, noodle, setNoodle, 
    chips, setChips, fruits, setFruits, vegetabels, setVegetabels, 
    beverages, setBeverages, lays, setLays, maggi, setMaggi, cocaCola, setCocaCola, chings, setChings, applyFilter})=>{

    const handleclick = ()=>{
        setFilterToggle(false);
    }

    const handleApplyFilter = ()=>{
        applyFilter();
        setFilterToggle(false);
    }

    return (
        <div className="my-4">
            <div className="flex items-center justify-between w-full px-2">
                <h2 className="font-semibold text-3xl cursor-pointer" onClick={handleclick}><BsX /></h2>
                <h2 className="font-bold text-2xl italic absolute left-1/2 transform -translate-x-1/2">Filters</h2>
            </div>

            <div className="bg-gray-200 p-4 my-6 rounded-t-xl">
                <div>
                    <h1 className="font-semibold text-3xl">Categories</h1>
                    <div className="flex flex-col m-2 space-y-2">
                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={noodle} onChange={()=>setNoodle(!noodle)}/>
                            <span className="font-light text-base">Noodles & Pasta</span>
                        </label>

                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={chips} onChange={()=>setChips(!chips)}/>
                            <span className="font-light text-base">Chips & Crisps</span>
                        </label>

                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={fruits} onChange={()=>setFruits(!fruits)}/>
                            <span className="font-light text-base">Fruits</span>
                        </label>

                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={vegetabels} onChange={()=>setVegetabels(!vegetabels)}/>
                            <span className="font-light text-base">Vegetabels</span>
                        </label>

                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={beverages} onChange={()=> setBeverages(!beverages)}/>
                            <span className="font-light text-base">Beverages</span>
                        </label>
                    </div>
                </div>
                <div className="my-3">
                    <h1 className="font-semibold text-3xl">Brand</h1>
                    <div className="flex flex-col m-2 space-y-2">
                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={lays} onChange={()=>setLays(!lays)}/>
                            <span className="font-light text-base">Lays</span>
                        </label>
                        
                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={maggi} onChange={()=>setMaggi(!maggi)}/>
                            <span className="font-light text-base">Maggi</span>
                        </label>
                        
                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={cocaCola} onChange={()=> setCocaCola(!cocaCola)}/>
                            <span className="font-light text-base">Coca Cola</span>
                        </label>
                        
                        <label className="flex items-center w-40">
                            <input type="checkbox" className="w-4 h-4 m-2" checked={chings} onChange={()=>setChings(!chings)}/>
                            <span className="font-light text-base">Chings</span>
                        </label>
                        
                    </div>
                </div>
            <div className="flex items-center my-10">
                <button className="w-full  rounded-lg p-2 text-gray-100 font-medium mx-3 bg-green-400 hover:bg-green-600" onClick={handleApplyFilter}>Apply Filter</button>
            </div>
            </div>

            


        </div>
    )
}

export default Filter;