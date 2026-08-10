
import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    User,
    UserPlus,
    Shield,
    Package,
    PlusCircle,
    ShoppingCart,
    Bell,
    MessageSquare,
    Star,
    Ticket,
    BarChart3,
    Settings,
    LogOut,
    CreditCard
} from "lucide-react";


function Sidebar() {

return (

    <div className="bg-indigo-700 text-white w-64 min-h-screen flex flex-col">


        {/* Logo */}

        <div className="text-3xl font-bold text-center py-6 border-b border-indigo-500">

            Admin Panel

        </div>



        {/* Menu */}

        <div className="flex flex-col mt-6 flex-1 overflow-y-auto">



            {/* Dashboard */}

            <Link
                to="/dashboard"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <LayoutDashboard size={20}/>

                Dashboard

            </Link>





            {/* Admin */}

            <Link
                to="/admin"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <Shield size={20}/>

                Admin

            </Link>



            <Link
                to="/create-admin"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <UserPlus size={20}/>

                Create Admin

            </Link>





            {/* Users */}

            <Link
                to="/user"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <User size={20}/>

                Users

            </Link>





            {/* Products */}

            <Link
                to="/products"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <Package size={20}/>

                Products

            </Link>



            <Link
                to="/add-product"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <PlusCircle size={20}/>

                Add Product

            </Link>





            {/* Orders */}

            <Link
                to="/orders"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <ShoppingCart size={20}/>

                Orders

            </Link>





            {/* Payments */}

            <Link
                to="/payments"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <CreditCard size={20}/>

                Payments

            </Link>





            {/* Notifications */}

            <Link
                to="/notifications"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <Bell size={20}/>

                Notifications

            </Link>





            {/* Messages */}

            <Link
                to="/messages"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <MessageSquare size={20}/>

                Messages

            </Link>





            {/* Reviews */}

            <Link
                to="/reviews"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <Star size={20}/>

                Reviews

            </Link>





            {/* Coupons */}

            <Link
                to="/coupons"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <Ticket size={20}/>

                Coupons

            </Link>





            {/* Reports */}

            <Link
                to="/reports"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <BarChart3 size={20}/>

                Reports

            </Link>





            {/* Settings */}

            <Link
                to="/settings"
                className="flex items-center gap-3 px-6 py-3 hover:bg-indigo-600"
            >

                <Settings size={20}/>

                Settings

            </Link>





            {/* Logout */}

            <button
                className="flex items-center gap-3 px-6 py-3 mt-auto hover:bg-red-600"
            >

                <LogOut size={20}/>

                Logout

            </button>


        </div>


    </div>

);

}


export default Sidebar;