import { Link } from "react-router-dom";

const PhoneCard = ({phone}) => {
  const {id,image,phone_name,brand_name,price} = phone || {}
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-96 mb-2">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
    <img
      src={image}
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between ">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {phone_name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
      ${price}
      </p>
    </div>
    <div className="mb-2 font-bold">
        {brand_name}
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      With plenty of talk and listen time, voice-activated Siri access, and an
      available wireless charging case.
    </p>
  </div>
  <div className="p-6 pt-0">
   <Link to={`/phones/${id}`}>
   <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 bg-gray-300"
      type="button">
      View Details
    </button>
   </Link>
  </div>
</div>
    );
};

export default PhoneCard;