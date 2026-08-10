import { Users, Package, ShoppingCart, IndianRupee } from "lucide-react";

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-lg shadow">
          <Users className="text-blue-500 mb-2" size={35} />
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-gray-500">Total Users</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <Package className="text-green-500 mb-2" size={35} />
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-gray-500">Total Products</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <ShoppingCart className="text-orange-500 mb-2" size={35} />
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-gray-500">Total Orders</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <IndianRupee className="text-red-500 mb-2" size={35} />
          <h2 className="text-3xl font-bold">₹0</h2>
          <p className="text-gray-500">Revenue</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;