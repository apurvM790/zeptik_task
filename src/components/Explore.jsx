import { IoIosSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";  
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { demoData } from "../data/demoData";
import Card from "./Card";
import { useEffect, useState } from "react";
import Filter from "./Filter";


const Explore = ()=>{

    const [filterToggle, setFilterToggle] = useState(false);
    const [filteredList, setFilteredList] = useState(demoData);

    const [noodle, setNoodle] = useState(false);
    const [chips, setChips] = useState(false);
    const [fruits, setFruits] = useState(false);
    const [vegetabels, setVegetables] = useState(false);
    const [beverages, setBeverages] = useState(false);

    const [lays, setLays] = useState(false);
    const [maggi, setMaggi] = useState(false);
    const [cocaCola, setCocaCola] = useState(false);
    const [chings, setChings] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");


    const applyFilter=()=>{
        let filteredItems = demoData;

        const isCategoryFiltered = noodle || chips || fruits || vegetabels || beverages;
        if(isCategoryFiltered){
            filteredItems=filteredItems.filter(item=> 
                (noodle && item.category === "noodles") ||
                (chips && item.category === "chips") ||
                (fruits && item.category === "fruit") ||
                (vegetabels && item.category === "vegetable") ||
                (beverages && item.category === "beverages"));
        }

        const isBrandFiltered = lays || maggi || cocaCola || chings;
        if(isBrandFiltered){
            filteredItems = filteredItems.filter(item => 
                (lays && item.brand === "lays") ||
                (maggi && item.brand === "maggi") ||
                (cocaCola && item.brand === "coca cola") ||
                (chings && item.brand === "chings"));
        }


        if(!isCategoryFiltered && !isBrandFiltered){
            setFilteredList(demoData);
        }
        else{
            setFilteredList(filteredItems);
        }

    }

    const handleSearchQuery = ()=>{
        let filteredItems = demoData;
        if(searchQuery.trim !== ""){
            filteredItems = filteredItems.filter(item=> item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        setFilteredList(filteredItems);
    }


    const handleFilterToggle = ()=>{
        setFilterToggle(true);
    }

    useEffect(()=>{
        handleSearchQuery();
    },[searchQuery]);

    return <> 
    {filterToggle ? <Filter setFilterToggle={setFilterToggle} 
    noodle={noodle} setNoodle={setNoodle}
    chips={chips} setChips={setChips}
    fruits={fruits} setFruits={setFruits}
    vegetabels={vegetabels} setVegetables={setVegetables}
    beverages={beverages} setBeverages={setBeverages}
    lays={lays} setLays={setLays}
    maggi={maggi} setMaggi={setMaggi}
    cocaCola={cocaCola} setCocaCola={setCocaCola}
    chings={chings} setChings={setChings}
    applyFilter={applyFilter}
    /> :(<div>
            {/* Search Bar */}
            <div className="flex flex-wrap gap-4 justify-center m-2">
                <div className="border-2 w-5/6 rounded-lg p-2 bg-gray-200 flex justify-between"> 
                    <label>
                <IoIosSearch className="size-5"/></label>
                <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="bg-gray-200 pl-1 flex-grow focus:outline-none focus:ring-0"/>
                <label>
                <MdCancel className="size-5"/>
                </label>
                </div>
                <div className="flex items-center" onClick={handleFilterToggle}>
                <PiSlidersHorizontalBold className="size-7"/>
                </div>

            </div>

            <div className="grid grid-cols-2 gap-3 px-2 md:grid-cols-3 lg:grid-cols-5 ">
                {filteredList.map((product)=>(<Card key={product.id} data={product}/>))}
            </div>
            
            
        </div>)}
        </>
    
}

export default Explore;