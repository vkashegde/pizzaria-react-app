/* eslint-disable no-unused-vars */
import FoodCard from "./FoodCard";

import FoodData from "../../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = () => {
    toast.success("Item added to cart");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-10 justify-center items-center lg:justify-start mx-6 my-10 ">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return category === food.category;
          }
        }).map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })}

        {/*

        FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })


        */}
      </div>
    </>
  );
};

export default FoodItems;
