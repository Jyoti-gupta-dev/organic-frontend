import React, { useState } from "react";
import { UserPlus, Upload, Eye, EyeOff } from "lucide-react";
import axios from "axios";

function CreateAdmin() {

    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        image: null
    });

    const [showPassword, setShowPassword] = useState(false)


    const [preview, setPreview] = useState(null);


    const handleChange = (e) => {

        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        });

    };


    const handleImage = (e) => {

        const file = e.target.files[0];

        if (file) {
            setAdmin({
                ...admin,
                image: file
            });
            setPreview(URL.createObjectURL(file));

        }
    };



    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", admin.name);
            formData.append("email", admin.email);
            formData.append("password", admin.password);
            formData.append("role", admin.role);
            formData.append("image", admin.image);
            const res = await axios.post("http://localhost:5000/api/admin/register", formData);

            console.log(res.data)
        } catch (error) {
            console.log(error)
        }


    };



    return (

        <div className="flex justify-center items-center min-h-[80vh]">


            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">


                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Create New Admin
                </h1>



                {/* Profile Image */}

                <div className="text-center mb-6">


                    <img

                        src={
                            preview
                                ? preview
                                : "https://via.placeholder.com/120"
                        }

                        className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 object-cover"

                    />


                    <label className="mt-4 inline-flex items-center gap-2 cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg">

                        <Upload size={18} />

                        Upload Photo


                        <input

                            type="file"

                            accept="image/*"

                            onChange={handleImage}

                            className="hidden"

                        />

                    </label>


                </div>




                <form onSubmit={handleSubmit}>


                    <input

                        type="text"

                        name="name"

                        value={admin.name}

                        onChange={handleChange}

                        placeholder="Admin Name"

                        className="w-full border p-3 rounded-lg mb-4"

                    />



                    <input

                        type="email"

                        name="email"

                        value={admin.email}

                        onChange={handleChange}

                        placeholder="Email"

                        className="w-full border p-3 rounded-lg mb-4"

                    />



                    {/* <input

                        type="password"

                        name="password"

                        value={admin.password}

                        onChange={handleChange}

                        placeholder="Password"

                        className="w-full border p-3 rounded-lg mb-4"

                    /> */}
                    <div className="relative">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={admin.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full border p-3 rounded-lg mb-4 pr-12"
                        />


                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 cursor-pointer text-gray-500"
                        >

                            {
                                showPassword
                                    ? <EyeOff size={20} />
                                    : <Eye size={20} />
                            }

                        </span>

                    </div>



                    <select
                        name="role"
                        value={admin.role}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg mb-5"
                    >
                        <option value="">Select Role</option>

                        <option value="admin">Admin</option>

                        <option value="superadmin">Super Admin</option>



                    </select>




                    <button

                        className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"

                    >

                        <UserPlus size={18} />

                        Create Admin

                    </button>



                </form>


            </div>


        </div>

    );

}


export default CreateAdmin;