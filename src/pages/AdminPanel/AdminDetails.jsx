
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Mail, ShieldCheck, CircleCheck } from "lucide-react";

function AdminDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [admin, setAdmin] = useState({});

    useEffect(() => {
        getSingleAdmin();
    }, []);

    const getSingleAdmin = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/admin/singleadmin/${id}`
            );
            console.log(admin);
            console.log(admin.image)

            setAdmin(res.data.admin);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10">

            <div className="bg-white rounded-2xl shadow-xl overflow-visible">

                {/* Header */}
                <div className="bg-indigo-600 h-28 relative">

                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-5 top-5 flex items-center gap-2 text-white"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>

                </div>

                {/* Profile */}
                <div className="flex flex-col items-center -mt-16 px-8 pb-8">

                    <div className="flex flex-col items-center pt-6 px-8 pb-8">

                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">

                            <img
                                src={
                                    admin.image
                                        ? `http://localhost:5000/uploads/${admin.image}`
                                        : "https://dummyimage.com/150x150/cccccc/000000&text=Admin"
                                }
                                alt={admin.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h2 className="text-3xl font-bold mt-4">
                            {admin.name}
                        </h2>

                        <p className="text-gray-500">
                            {admin.role}
                        </p>

                    </div>

                    <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="bg-gray-50 rounded-xl p-5 flex items-center gap-4">

                            <Mail className="text-indigo-600" />

                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-semibold">{admin.email}</p>
                            </div>

                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 flex items-center gap-4">

                            <ShieldCheck className="text-indigo-600" />

                            <div>
                                <p className="text-sm text-gray-500">Role</p>
                                <p className="font-semibold">{admin.role}</p>
                            </div>

                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 flex items-center gap-4 md:col-span-2">

                            <CircleCheck className="text-green-600" />

                            <div>
                                <p className="text-sm text-gray-500">Status</p>

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${admin.isActive
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {admin.isActive ? "Active" : "Inactive"}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDetails;