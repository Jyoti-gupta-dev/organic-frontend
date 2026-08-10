
import { Bell, Search } from "lucide-react";

function Navbar() {
    return (
        <header className="h-16 bg-white shadow-md px-6 flex items-center justify-between">
            {/* Left Side */}
            <h2 className="text-2xl font-bold text-gray-800">
                Dashboard
            </h2>

            {/* Right Side */}
            <div className="flex items-center gap-6">

                {/* Search */}
                <div className="relative">
                    <Search
                        size={18}
                        className="absolute left-3 top-3 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Notification */}
                <button className="relative">
                    <Bell size={24} className="text-gray-600" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                </button>

                {/* Profile Image */}

                <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Admin"
                    className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-gray-300"
                />
            </div>
        </header>
    );
}

export default Navbar;