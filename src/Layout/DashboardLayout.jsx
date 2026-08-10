
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Right Side */}
            <div className="flex flex-col flex-1">
                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}