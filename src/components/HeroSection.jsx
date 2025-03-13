import { useNavigate } from "react-router-dom";
import "./HeroSection.css"

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-gray-500 to-gray-300 text-white px-6">
            {/* Welcome Message */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 welcomeMsg">
                Connecting People Across Faiths & Interests
            </h1>

            {/* Short Description */}
            <p className="text-lg md:text-xl max-w-2xl mb-6 description">
                Join a vibrant community and explore meaningful events that bring people together.
            </p>

            {/* CTA Button */}
            <button
                onClick={() => navigate("/events")}
                className="exploreBtn bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-200 transition-all"
            >
                Explore Events
            </button>
        </section>
    );
};

export default HeroSection;
