/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-full  sm:w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg ">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-300 ease-in-out"
      />

      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>

      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-2 text-yellow-400" /> {rating}
        </span>

        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, img, qty: 1 }));

            handleToast();
          }}
          className="p-2 ml-2 text-white bg-green-500  hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
