import { CDN_URL } from "../utils/constants";

const RestCards = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    restData?.info;
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestCards;

export const withPromotionCards = (RestCards) => {
  return (props) => (
    <div>
      <label className="absolute bg-black text-white rounded-md m-1 p-1">
        Promoted
      </label>
      <RestCards {...props} />
    </div>
  );
};
