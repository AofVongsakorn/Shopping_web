import { MdOutlineKeyboardArrowDown } from "react-icons/md"
// import all_products from "../data/all_products"
import Item from "../components/Item";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";


const Category = ({ category, banner }) => {

  const { all_products} = useContext(ShopContext)

  return (
    <div className="py-10 px-8 flex flex-col items-center gap-8">
      <div className="w-full h-[420px]">
        <img src={banner} alt="banner" className="w-full h-full" />
      </div>

      <div className="w-[85%] flex justify-between items-center text-lg" >
        <div>
          <span className="font-semibold">Showing 1-12</span>
          <span className="pl-1">out of 36 product</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-[2px] border-sky-200 rounded-3xl">Sort by <MdOutlineKeyboardArrowDown /></div>

      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14 '>
        {all_products.map((item) => {
          if (item.category === category) {
            return (
              < Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>

            );
          } else {
            return null;
          }
        })}

      </div>


    </div>
  )
}

export default Category