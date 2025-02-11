/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../redux/slices/cartSlice";

const CartItem = ({ id, name, price, qty, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-2">
      <img src={img} alt="" className="w-[50px] h-[50px] " />

      <div className="w-full">
        <div className="flex justify-between">
          <h2 className="font-bold text-gray-800">{name.slice(0, 12)}...</h2>
          <MdDelete
            onClick={() =>
              dispatch(removeFromCart({ id, name, price, qty, img }))
            }
            className=" text-gray-600 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-200"
          />
        </div>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹{price}</span>

          <div className="flex justify-center items-center gap-2 ">
            <AiOutlinePlus
              onClick={() =>
                dispatch(incrementQty({ id, name, price, qty, img }))
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlineMinus
              onClick={() => {
                dispatch(decrementQty({ id, name, price, qty, img }));
              }}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
