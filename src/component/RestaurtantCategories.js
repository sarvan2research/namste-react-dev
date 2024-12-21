import { useState } from "react";
import ItemList from "./ItemList";

const RestaurtantCategories = ({ data, isShowIndex, setSelectedIndex }) => {
  //console.log(data);
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    //setShowItems(!showItems);
    setSelectedIndex();
  };

  return (
    <div>
      <div className="w-6/12 shadow-lg mx-auto my-2 bg-gray-50 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {/* heading*/}
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{isShowIndex && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestaurtantCategories;
