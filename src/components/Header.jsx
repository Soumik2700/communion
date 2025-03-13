import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
       <>
            <header className="w-full bg-gray-200 p-3 flex justify-between items-center text-sm md:text-base shadow-md">
                {/* Logo */}
                <img
                    onClick={()=> navigate("/")}
                    className="h-6 md:h-8"
                    src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
                    alt="CommunionHub Logo"
                />

                {/* Navigation */}
                <nav className="hidden md:flex gap-6 font-bold">
                    <Link to={"/"} className="text-gray-600 hover:text-blue-500 transition">Home</Link>
                    <Link to={"/events"} className="text-gray-600 hover:text-blue-500 transition">Events</Link>
                    <Link to={"/about"} className="text-gray-600 hover:text-blue-500 transiti   on">About</Link>
                </nav>

                {/* Sign in / Menu */}

                {isMobile ? <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <GiHamburgerMenu size={20} /> : <RxCross2 size={20} />}</button> : <>
                    <Link to={"/signin"}>
                        <div className="p-2 bg-gray-700 text-white font-bold rounded-3xl px-4 hover:bg-blue-600 transition-all" >
                            Sign in
                        </div>
                    </Link>
                </>}

            </header>
            {
                (isOpen && isMobile) && <Hamburger/>
            }
       </>
    );
};

export default Header;
