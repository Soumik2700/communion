import "./EventList.css"
const EventCard = ({ event }) => {
    console.log(event);
    return (
        <div className="EventCardAnimation w-64 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform transform hover:scale-105">
            {/* Event Image */}
            <img
                className="w-full h-40 object-cover"  /* Reduced height */
                src={event.imgUrl}
                alt={event.title}
            />

            {/* Event Details */}
            <div className="p-3">  {/* Reduced padding */}
                <h2 className="text-md font-semibold text-gray-800">{event.title}</h2>
                <p className="text-xs text-gray-500">{event.location} • {event.date}</p>
                <p className="text-xs text-gray-600 mt-1">{event.description.slice(0, 60)}...</p>  {/* Shortened text */}

                {/* CTA Button */}
                <button className="mt-3 w-full bg-blue-600 text-white py-1 text-sm rounded-lg font-medium hover:bg-blue-700 transition-all">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default EventCard;
