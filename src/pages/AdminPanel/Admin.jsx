
import { useEffect, useState } from "react";
import { UserPlus, Edit, Trash2, Eye, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Admin() {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");


  const [admins, setAdmins] = useState([])
  // {
  //   id: 1,
  //   name: "Jyoti Gupta",
  //   email: "jyoti@gmail.com",
  //   role: "Super Admin"
  // },
  // {
  //   id: 2,
  //   name: "Admin User",
  //   email: "admin@gmail.com",
  //   role: "Admin"
  // },
  // {
  //   id: 3,
  //   name: "Rahul Sharma",
  //   email: "rahul@gmail.com",
  //   role: "Admin"
  // }

  useEffect(() => {
    getAllAdmin()
  }, [])

  // const getAllAdmin = async () => {
  //   const res = await axios.get("http://localhost:5000/api/admin/getAllAdmin");
  //   }

  const getAllAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/getAllAdmin");
      console.log(res.data);
      setAdmins(res.data.data)


    } catch (error) {
      console.log(error)
    }

  }

  const deleteAdmin = (id) => {

    const updatedAdmins = admins.filter(
      (admin) => admin.id !== id
    );

    setAdmins(updatedAdmins);

  };



  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(search.toLowerCase()) ||
    admin.email.toLowerCase().includes(search.toLowerCase())
  );



  return (

    <div className="bg-white shadow rounded-lg">


      {/* Header */}

      <div className="bg-indigo-600 text-white flex justify-between items-center px-6 py-4 rounded-t-lg">


        <h2 className="text-2xl font-semibold">
          Admin Management
        </h2>


        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded flex items-center gap-2">

          <UserPlus size={18} />

          Add Admin

        </button>


      </div>



      {/* Search */}

      <div className="p-5">

        <div className="relative w-80">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />


          <input

            type="text"

            placeholder="Search Admin..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            className="border rounded-lg pl-10 px-4 py-2 w-full"

          />

        </div>

      </div>



      {/* Table */}

      <div className="overflow-x-auto">


        <table className="w-full">


          <thead className="bg-gray-100">


            <tr>

              <th className="p-4">
                ID
              </th>

              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Role
              </th>

              <th className="p-4">
                Action
              </th>

              <th className="p-4">
                View
              </th>


            </tr>


          </thead>




          <tbody>


            {
              filteredAdmins.map((admin) => (

                <tr
                  key={admin._id}
                  className="border-b hover:bg-gray-50 text-center"
                >


                  <td className="p-4">
                    {admin._id}
                  </td>


                  <td className="p-4">
                    {admin.name}
                  </td>


                  <td className="p-4">
                    {admin.email}
                  </td>


                  <td className="p-4">

                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">

                      {admin.role}

                    </span>

                  </td>




                  {/* Action */}

                  <td className="p-4">

                    <div className="flex justify-center gap-3">


                      <button className="text-blue-600 hover:text-blue-800">

                        <Edit size={20} />

                      </button>



                      <button
                        onClick={() => deleteAdmin(admin._id)}
                        className="text-red-600 hover:text-red-800"
                      >

                        <Trash2 size={20} />

                      </button>


                    </div>


                  </td>




                  {/* View */}

                  <td className="p-4">


                    <button

                      onClick={() => navigate(`/admin/${admin._id}`)}

                      className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2 mx-auto hover:bg-indigo-700"

                    >

                      <Eye size={18} />

                      View

                    </button>


                  </td>



                </tr>


              ))
            }



          </tbody>


        </table>


      </div>


    </div>

  );

}


export default Admin;