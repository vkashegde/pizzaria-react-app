/* eslint-disable no-unused-vars */
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[25vw] bg-white p-5 h-full ${
          activeCart ? "translate-x-0  " : "translate-x-full"
        }  transition-all duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center ">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-500 font-bold p-1 text-xl rounded-md  hover:text-red-300
          hover:border-red-300"
          />
        </div>

        {/* cart items */}

        <div className="h-[70vh] overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((food) => {
              console.log("food:", food);
              return (
                <CartItem
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  img={food.img}
                  qty={food.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your cart is empty
            </h2>
          )}
        </div>

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: {totalQty} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : ${totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[25vw] my-2" />

          <button
            onClick={() => navigate("/success")}
            className="mb-5 bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[26vw]"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaBasketShopping
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-6xl p-3 fixed bottom-10 right-4 ${
          totalQty > 0 ? "animate-bounce delay-500 transition-all" : ""
        } `}
      />
    </>
  );
};

export default Cart;
