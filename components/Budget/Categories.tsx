import { Book } from "lucide-react";
import Category from "./Category";
import React from "react";
const Categories = () => {
  return (
    <Category label="Bills & Fees" money={174500} percentage={76.23}>
      <span className="g-pink-400 rounded-full bg-pink-200 p-3 text-pink-500">
        <Book size={20} />
      </span>
    </Category>
  );
};

export default Categories;
