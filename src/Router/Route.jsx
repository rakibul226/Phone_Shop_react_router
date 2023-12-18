import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";


const myCreatedRoute = createBrowserRouter([
    
    {
        path :"/",
        element : <MainLayOut></MainLayOut>,
        children : [
            {
                path :"/",
                element  : <Home></Home>,
                loader:() => fetch('/public/phones.json')
            },
            {
                path :"/favorite",
                element  : <Favorite></Favorite>
            },
            {
                path :"/login",
                element  : <Login></Login>
            }

        ] 
    }
])

export default myCreatedRoute;