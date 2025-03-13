import { Link } from "react-router-dom";

function Hamburger() {
    return (
        <section className="h-300px p-5 bg-gray-100 absolute min-w-screen">
            <ul className="font-bold text-gray-500">
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/events"}><li>Events</li></Link>
                <Link to={"/about"}><li>About</li></Link>
            </ul>

            <button className="mt-3 w-full bg-gray-700 text-white font-bold rounded-3xl hover:bg-blue-600 transition-all">
                Sign in
            </button>
        </section>
    );
}

export default Hamburger;