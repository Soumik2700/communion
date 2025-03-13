import React from "react";
import profileImg from "../assets/me.jpg"

const About = () => {
    return (
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg mb-6">
                    Hi, I'm <span className="text-blue-500 font-semibold">Soumik Sinha</span>, a passionate Web Developer with expertise in React, JavaScript, and Tailwind CSS.
                    I love building intuitive and interactive web applications. My goal is to create seamless user experiences through clean and efficient code.
                </p>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center gap-6">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
                />
            </div>

            {/* Skills Section */}
            <div className="mt-10 w-full max-w-lg">
                <h3 className="text-2xl font-semibold mb-4 text-center">Skills</h3>

                <div className="space-y-4">
                    {[
                        { name: "JavaScript", value: "85%" },
                        { name: "React.js", value: "80%" },
                        { name: "Tailwind CSS", value: "90%" },
                        { name: "Node.js", value: "70%" },
                    ].map((skill, index) => (
                        <div key={index} className="w-full">
                            <p className="text-lg font-medium">{skill.name}</p>
                            <div className="bg-gray-300 dark:bg-gray-700 h-3 rounded-lg relative">
                                <div
                                    className="bg-blue-500 h-3 rounded-lg"
                                    style={{ width: skill.value, transition: "width 1s ease-in-out" }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Button */}
            <div className="mt-10">
                <a href="#contact">
                    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition">
                        Contact Me
                    </button>
                </a>
            </div>
        </section>
    );
};

export default About;
