import "./EventList.css";
import EventCard from "./EventCard";
import eventsData from "../utils/mockData";
import { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";

const EventList = () => {
    // Store all events (initial + new) in a master state.
    const [allEvents, setAllEvents] = useState(eventsData);
    const [data, setData] = useState(eventsData);
    const [filterQuery, setFilterQuery] = useState("");
    const [hasData, setHasData] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        category: "",
        location: "",
        imgUrl: "",
        description: "",
    });

    useEffect(() => {
        if (!filterQuery) {
            setData(allEvents);
            setHasData(true);
            return;
        }

        const filteredData = allEvents.filter(
            (event) =>
                event.category.toLowerCase() === filterQuery.toLowerCase() ||
                event.location.split(",")[1]?.trim().toLowerCase() === filterQuery.toLowerCase()
        );

        setData(filteredData);
        setHasData(filteredData.length > 0);
    }, [filterQuery, allEvents]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (Object.values(formData).some((field) => !field.trim())) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const newEvent = { id: Date.now(), ...formData };

        // Update the master state and the filtered data accordingly
        const updatedEvents = [...allEvents, newEvent];
        setAllEvents(updatedEvents);
        setData(updatedEvents);

        setIsOpen(false);
        setFormData({ title: "", date: "", category: "", location: "", imgUrl: "", description: "" });
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-500 to-gray-300 p-10 flex flex-col items-center">
            {/* Filter Buttons */}
            <div className="flex flex-col items-center">
                <ul className="flex flex-wrap gap-3 p-3">
                    {["All", "Religious", "Cultural", "Charity", "Educational", "Environmental", "India", "UK", "USA"].map(
                        (category) => (
                            <li key={category}>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg transition hover:bg-gray-700"
                                    onClick={() => setFilterQuery(category === "All" ? "" : category.toLowerCase())}
                                >
                                    {category}
                                </button>
                            </li>
                        )
                    )}
                </ul>

                {/* Toggle Form Button */}
                <button
                    className={`flex items-center gap-2 justify-center px-4 py-2 text-white transition duration-200 ${isOpen ? "bg-red-500 hover:bg-red-400" : "bg-blue-500 hover:bg-blue-400"
                        } font-bold rounded-lg mb-3`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Close" : "Add Event"} {!isOpen && <IoMdAdd />}
                </button>
            </div>

            {/* Conditional Rendering for Event List / Form */}
            {!isOpen ? (
                hasData ? (
                    <div className="listDiv gap-4">
                        {data.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <p className="text-white text-lg mt-5">No events found for this category.</p>
                )
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
                >
                    <h2 className="text-lg font-bold text-gray-700">Add New Event</h2>

                    <div>
                        <label className="block text-gray-700 font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            className="w-full p-2 border rounded"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            className="w-full p-2 border rounded"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            className="w-full p-2 border rounded"
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="religious">Religious</option>
                            <option value="cultural">Cultural</option>
                            <option value="charity">Charity</option>
                            <option value="educational">Educational</option>
                            <option value="environmental">Environmental</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            className="w-full p-2 border rounded"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Image URL</label>
                        <input
                            type="text"
                            name="imgUrl"
                            value={formData.imgUrl}
                            className="w-full p-2 border rounded"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            className="w-full p-2 border rounded"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-400 w-full"
                    >
                        Add Event
                    </button>
                </form>
            )}
        </section>
    );
};

export default EventList;
