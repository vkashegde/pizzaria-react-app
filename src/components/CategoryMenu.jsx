/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FoodData from "../../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniquecategories = () => {
    const uniqueCategories = [
      "All",
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniquecategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div
        className={`my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden`}
      >
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
