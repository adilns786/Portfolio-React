import React from "react";

function Contact() {
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-12">
            {/* Left part */}
            <div className="flex flex-col justify-between md:w-1/2 mb-6 md:mb-0">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="mb-4">
                        I'm excited to connect with you! Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message. I'll get back to you as soon as possible.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com/yourprofile" className="text-blue-500 hover:text-blue-700">
                            Twitter
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" className="text-blue-700 hover:text-blue-900">
                            LinkedIn
                        </a>
                        <a href="https://github.com/yourprofile" className="text-gray-800 hover:text-gray-900">
                            GitHub
                        </a>
                        <a href="https://instagram.com/yourprofile" className="text-pink-500 hover:text-pink-700">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            {/* Right part */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <form className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded-md shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
