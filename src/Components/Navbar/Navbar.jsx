import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div> 
            <nav className="flex justify-between py-6 shadow items-center px-4">
                <Logo></Logo>
                <ul className="flex gap-4">

                        
                    <li>
                    <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }
                            >
                            Home
                        </NavLink>
                    </li>
                        
                    
                    <li>
                    <NavLink
                            to="/favorite"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }
                            >
                            Favorite
                        </NavLink>
                    </li>

                    <li><NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }
                            >
                            login
                        </NavLink>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export default Navbar;