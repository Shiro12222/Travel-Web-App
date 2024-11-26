import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-black py-6">
    <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center md:justify-start">
            <Link to = "/" className="flex text-1xl font-bold tracking-tight text-black ">
                <span className="hidden md:flex items-center text-1xl font-bold tracking-tight text-black -mt">
                    Attractive Beauty Salon
                </span>
            </Link>
        </div>

        {/* another tab */}
        <div className="flex space-x-8 mx-2">
            <Link to="/services_client" className="flex text-sm font-bold tracking-tight text-black">
                <span className="hidden md:flex items-center text-sm font-bold tracking-tight text-black">
                Services
                </span>
            </Link>

            <Link to="/pricing_list_client" className="flex text-sm font-bold tracking-tight text-black">
                <span className="hidden md:flex items-center text-sm font-bold tracking-tight text-black">
                    Pricing List
                </span>
            </Link>

            <Link to="/contacts_client" className="flex text-sm font-bold tracking-tight text-black">
                <span className="hidden md:flex items-center text-sm font-bold tracking-tight text-black">
                Contacts
                </span>
            </Link>
            
        </div>
        <div className="hidden md:block">
            <MainNav/>
        </div>
    </div>
    </div>
  )
};

export default Header;