function Hamburger(){
    return(
        <section className="h-300px p-5 bg-gray-100 absolute min-w-screen">
            <ul className="font-bold text-gray-500">
                <li>Home</li>
                <li>Events</li>
                <li>About</li>
            </ul>

            <button className="mt-3 w-full bg-gray-700 text-white font-bold rounded-3xl hover:bg-blue-600 transition-all">
                Sign in
            </button>
        </section>
    );
}

export default Hamburger;