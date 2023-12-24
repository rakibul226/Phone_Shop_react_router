import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";





const Favorite = () => {
    const [favorites,setFavorite] = useState([]);
    const [noDataFound,setNoDataFound] = useState(false);
    const [isShow,setIsShow] = useState(false);

    useEffect( ()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        
        if(favoriteItems){
            setFavorite(favoriteItems);
        }else{
            setNoDataFound("No Data Found");
        }
    },[])

    const handleRemove = ()=>{
      localStorage.clear();
      setFavorite([]);
      setNoDataFound("No data found")
    }

    return (
        <div>
          {noDataFound ? (
            <p>{noDataFound}</p>
          ) : (
            <div>
              {favorites.length > 0 && <button onClick={handleRemove} className="px-5 py-2 bg-red-400 block mx-auto my-2 rounded-sm text-white">Delete All Item</button>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                  isShow ? favorites.map((phone) => (
                    <FavoriteCard phone={phone} key ={phone.id} />
                  ))
                  :
                  favorites.slice(0,2).map((phone) => (
                    <FavoriteCard phone={phone} key ={phone.id}/>
                  ))
                }
              </div>
              <button onClick={()=>setIsShow(!isShow)} className="px-5 py-2 bg-red-400 block mx-auto my-2 rounded-sm text-white">{isShow ? "See less" : "See more"}</button>
            </div>
          )}
        </div> 
    );
};

export default Favorite;