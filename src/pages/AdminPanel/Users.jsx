
// import { useEffect, useState } from "react";
// import { Pencil, Trash2, UserPlus, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Users() {

//   const navigate = useNavigate();


//   const [users, setUsers] = useState([])
//   //   {
//   //     id: 1,
//   //     name: "Jyoti Gupta",
//   //     email: "jyoti@gmail.com",
//   //     phone: "9876543210"
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Rahul Sharma",
//   //     email: "rahul@gmail.com",
//   //     phone: "9876543211"
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Ankit Kumar",
//   //     email: "ankit@gmail.com",
//   //     phone: "9876543212"
//   //   }

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const getAllUsers = async () => {
//     try {

//       const res = await axios.get(
//         "http://localhost:5000/api/user/getAllUsers"
//       );

//       console.log(res.data);

//       setUsers(res.data.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };






//   return (

//     <div className="bg-white shadow rounded-lg">


//       {/* Header */}
//       <div className="bg-blue-500 text-white flex justify-between items-center px-6 py-4 rounded-t-lg">

//         <h2 className="text-2xl font-semibold">
//           User Management
//         </h2>


//         <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded flex items-center gap-2">

//           <UserPlus size={18} />

//           Add User

//         </button>

//       </div>



//       {/* Table */}

//       <div className="overflow-x-auto">

//         <table className="w-full">


//           <thead className="bg-gray-100">

//             <tr>

//               <th className="p-4">
//                 Name
//               </th>

//               <th className="p-4">
//                 Email
//               </th>

//               <th className="p-4">
//                 Phone
//               </th>

//               <th className="p-4">
//                 Action
//               </th>

//               <th className="p-4">

//                 View
//               </th>

//             </tr>

//           </thead>



//           <tbody>


//             {
//               users.map((user) => (

//                 <tr
//                   key={user._id}
//                   className="border-b hover:bg-gray-50 text-center"
//                 >


//                   <td className="p-4">
//                     {user.name}
//                   </td>


//                   <td className="p-4">
//                     {user.email}
//                   </td>


//                   <td className="p-4">
//                     {user.phone}
//                   </td>




//                   {/* Action */}

//                   <td className="p-4">

//                     <div className="flex justify-center gap-3">


//                       <button className="text-blue-600 hover:text-blue-800">
//                         <Pencil size={20} />
//                       </button>



//                       <button
//                         onClick={() => deleteUser(user.id)}
//                         className="text-red-600 hover:text-red-800"
//                       >
//                         <Trash2 size={20} />
//                       </button>


//                     </div>

//                   </td>



//                   {/* View */}

//                   <td className="p-4">

//                     <button
//                       onClick={() => navigate(`/user/${user._id}`)}
//                       className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2 mx-auto hover:bg-indigo-700"
//                     >

//                       <Eye size={18} />

//                       View

//                     </button>

//                   </td>


//                 </tr>

//               ))
//             }



//             {
//               users.length === 0 && (

//                 <tr>

//                   <td
//                     colSpan="5"
//                     className="text-center py-8 text-gray-500"
//                   >
//                     No Users Found
//                   </td>

//                 </tr>

//               )
//             }


//           </tbody>


//         </table>

//       </div>


//     </div>

//   );

// }

// export default Users;
import { useEffect, useState } from "react";
import { Pencil, Trash2, UserPlus, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Users() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  // Get All Users
  const getAllUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/user/getAllUsers"
      );

      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/user/deleteUser/${id}`
      );

      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">

      {/* Header */}
      <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold">
          User Management
        </h2>

        <button
          onClick={() => navigate("/create-user")}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded flex items-center gap-2"
        >
          <UserPlus size={18} />
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
              <th className="p-4">View</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 text-center"
              >
                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.phone}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${user.role === "admin"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex justify-center gap-3">

                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => navigate(`/edit-user/${user._id}`)}
                    >
                      <Pencil size={20} />
                    </button>

                    <button
                      onClick={() => deleteUser(user._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>
                </td>

                {/* View */}
                <td className="p-4">
                  <button
                    onClick={() => navigate(`/user/${user._id}`)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded flex items-center gap-2 mx-auto"
                  >
                    <Eye size={18} />
                    View
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-gray-500"
                >
                  No Users Found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Users;