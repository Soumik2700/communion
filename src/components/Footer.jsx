import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 p-5 flex flex-col items-center text-gray-300 text-sm">
            <p className="mb-2">&copy; {currentYear} Soumik Sinha. All rights reserved.</p>

            {/* Social Icons (Optional) */}
            <div className="flex gap-4">
                <a href="https://github.com/Soumik2700" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/soumik-singha-9a34a11ab/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
