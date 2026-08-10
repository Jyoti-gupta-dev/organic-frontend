import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()


    const [user, setUser] = useState({})



    useEffect(() => {
        getSingleUser()
    }, [])

    const getSingleUser = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/user/getSingleUser/${id}`)
            console.log(res.data);
            setUser(res.data.user)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <>
                {/* Header */}
                <div className="bg-blue-600 h-32 flex justify-center items-end">
                    <div className="w-28 h-28 rounded-full border-4 border-white bg-white flex items-center justify-center text-5xl font-bold text-blue-600 translate-y-14">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>
                    {/* image */}
                    {/* <div className="w-28 h-28 rounded-full border-4 border-white bg-gray-100 overflow-hidden flex items-center justify-center translate-y-14 shadow-lg">

                        <img
                            src={
                                user.image
                                    ? `http://localhost:5000/uploads/${user.image}`
                                    : "https://dummyimage.com/150x150/cccccc/000000&text=User"
                            }
                            alt={user.name}
                            className="w-full h-full object-contain"
                        />

                    </div> */}
                </div>

                {/* Content */}
                <div className="pt-20 pb-8 px-8">

                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        {user.name}
                    </h2>

                    <p className="text-center text-gray-500 mb-8">
                        {user.email}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Phone */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <h3 className="text-lg font-semibold mt-1">
                                {user.phone}
                            </h3>
                        </div>

                        {/* Role */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-500">Role</p>
                            <h3 className="text-lg font-semibold mt-1 capitalize">
                                {user.role}
                            </h3>
                        </div>

                        {/* Created At */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-500">Account Created</p>
                            <h3 className="text-lg font-semibold mt-1">
                                {new Date(user.createdAt).toLocaleDateString()}
                            </h3>
                        </div>

                        {/* Updated At */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-500">Last Updated</p>
                            <h3 className="text-lg font-semibold mt-1">
                                {new Date(user.updatedAt).toLocaleDateString()}
                            </h3>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex justify-center gap-4">

                        <button
                            onClick={() => navigate(-1)}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-2 rounded-lg"
                        >
                            Back
                        </button>

                        <button
                            onClick={() => navigate(`/edit-user/${user._id}`)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg"
                        >
                            Edit User
                        </button>

                    </div>

                </div>
            </>
        </>
    );
}

export default UserDetails;