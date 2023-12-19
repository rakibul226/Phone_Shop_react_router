import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Phone from "../Components/Phones/Phone";


const myCreatedRoute = createBrowserRouter([
    
    {
        path :"/",
        element : <MainLayOut></MainLayOut>,
        errorElement:<Error></Error>,
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
            },
            {
                path :"/phones/:id",
                element : <Phone></Phone>,
                loader:() => fetch('/public/phones.json')
            }

        ] 
    }
])

export default myCreatedRoute;