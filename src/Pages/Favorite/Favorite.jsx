import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";


const Favorite = () => {
    const [favorites,setFavorite] = useState([]);
    const [noDataFound,setNoDataFound] = useState(false);

    useEffect( ()=>{

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        
        if(favoriteItems){
            setFavorite(favoriteItems);
        }else{
            setNoDataFound("No Data Found");
        }
    },[])


    return (
        <div>
          {noDataFound ? (
            <p>{noDataFound}</p>
          ) : (
            <div>
              <h2 className="text-2xl text-center">All category phones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((phone) => (
                  <FavoriteCard phone={phone} />
                ))}
              </div>
            </div>
          )}
        </div>
      );
      
};

export default Favorite;