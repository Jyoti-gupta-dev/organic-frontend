
import { useEffect, useState } from "react";
import { PackagePlus, Pencil, Trash2, Eye, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Products() {

  const navigate = useNavigate();


  const [search, setSearch] = useState("");


  const [products, setProducts] = useState([])
  // {
  //   id: 1,
  //   name: "Premium Laptop",
  //   category: "Electronics",
  //   price: 55000,
  //   stock: 10,
  //   status: "In Stock",
  //   image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  // },

  // {
  //   id: 2,
  //   name: "Smart Phone",
  //   category: "Mobile",
  //   price: 25000,
  //   stock: 5,
  //   status: "In Stock",
  //   image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  // },

  // {
  //   id: 3,
  //   name: "Wireless Headphone",
  //   category: "Accessories",
  //   price: 3000,
  //   stock: 0,
  //   status: "Out Of Stock",
  //   image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  // }
  useEffect(() => {
    getAllProducts()
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/Products/getAllProducts");

      console.log(res.data);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error)

    }

  }






  // const deleteProduct = (id)=>{

  //   const updatedProducts = products.filter(
  //     (product)=>product.id !== id
  //   );

  //   setProducts(updatedProducts);

  // };



  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );



  return (

    <div className="bg-white shadow rounded-lg">


      {/* Header */}

      <div className="bg-blue-500 text-white flex justify-between items-center px-6 py-4 rounded-t-lg">


        <h2 className="text-2xl font-semibold">
          Product Management
        </h2>


        <button className="bg-green-500 px-4 py-2 rounded flex items-center gap-2">

          <PackagePlus size={18} />

          Add Product

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

            placeholder="Search Product..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            className="border rounded-lg pl-10 py-2 px-4 w-full"

          />

        </div>

      </div>





      {/* Table */}

      <div className="overflow-x-auto">


        <table className="w-full">


          <thead className="bg-gray-100">

            <tr>

              <th className="p-4">
                Image
              </th>


              <th className="p-4">
                Name
              </th>


              <th className="p-4">
                Category
              </th>


              <th className="p-4">
                Price
              </th>


              <th className="p-4">
                Stock
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
              filteredProducts.map((product) => (


                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 text-center"
                >


                  <td className="p-4">

                    <img
                      src={`http://localhost:5000/uploads/${product.image}`}
                      className="w-16 h-16 rounded object-cover mx-auto"
                    />

                  </td>



                  <td className="p-4 font-semibold">
                    {product.name}
                  </td>



                  <td className="p-4">
                    {product.category}
                  </td>



                  <td className="p-4">
                    ₹{product.price}
                  </td>



                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${product.status === "In Stock"
                          ? "bg-green-500"
                          : "bg-red-500"
                        }`}
                    >

                      {product.status}

                    </span>

                  </td>




                  {/* Action */}

                  <td className="p-4">

                    <div className="flex justify-center gap-3">


                      <button className="text-blue-600">
                        <Pencil size={20} />
                      </button>


                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-600"
                      >

                        <Trash2 size={20} />

                      </button>


                    </div>

                  </td>





                  {/* View Button */}

                  <td className="p-4">


                    <button

                      onClick={() => navigate(`/product/${product._id}`)}

                      className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2 mx-auto"

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


export default Products;