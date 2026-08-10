import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";


function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();


  // Static Product Data
  const [product, setProduct] = useState({})
  // {
  //   id: 1,
  //   name: "Premium Laptop",
  //   category: "Electronics",
  //   price: 55000,
  //   oldPrice: 65000,
  //   rating: 4.8,
  //   stock: "In Stock",
  //   image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  //   description:
  //     "Powerful laptop with high performance processor, 16GB RAM and long battery life. Best for coding, designing and professional work."
  // },

  // {
  //   id: 2,
  //   name: "Smart Phone",
  //   category: "Mobile",
  //   price: 25000,
  //   oldPrice: 30000,
  //   rating: 4.5,
  //   stock: "In Stock",
  //   image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  //   description:
  //     "Latest smartphone with premium display, powerful camera and fast performance."
  // },


  // {
  //   id: 3,
  //   name: "Wireless Headphone",
  //   category: "Accessories",
  //   price: 3000,
  //   oldPrice: 4500,
  //   rating: 4.7,
  //   stock: "Out Of Stock",
  //   image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  //   description:
  //     "Wireless headphone with deep bass, noise cancellation and comfortable design."
  // }




  // const product = products.find(
  //   (item)=>item.id === Number(id)
  // );

  useEffect(() => {
    getSingleProduct()
  }, []);

  const getSingleProduct = async () => {
    try {
      // const res = await axios.get("http://localhost:5000/api/Products/getSingleProduct/${id}");
      // console.log(res.data);
      const res = await axios.get(`http://localhost:5000/api/Products/getSingleProduct/${id}`
      );

      console.log(res.data)

      setProduct(res.data.data);

    } catch (error) {
      console.log(error)
    }
  }



  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate("/products")}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 mb-6"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Product Details Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Side - Product Image */}
          <div className="bg-gray-50 flex justify-center items-center p-8">

            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.title}
              className="w-80 h-full object-contain"
            />

          </div>

          {/* Right Side - Product Information */}
          <div className="p-8">

            <h1 className="text-4xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-500 mt-2">
              {product.category}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">

              <span className="text-4xl font-bold text-green-600">
                ₹{product.price}
              </span>

              <span className="text-xl text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>

            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-5">

              <Star
                size={20}
                className="text-yellow-500 fill-yellow-500"
              />

              <span className="font-medium">
                {product.rating}
              </span>

            </div>

            {/* Stock */}
            <div className="mt-5">

              <span
                className={`px-4 py-2 rounded-full text-white font-medium ${product.stock === "In Stock"
                    ? "bg-green-500"
                    : "bg-red-500"
                  }`}
              >
                {product.stock}
              </span>

            </div>

            {/* Product Information */}
            <div className="mt-8 space-y-3">

              <div className="flex">
                <span className="font-semibold w-32">
                  Brand :
                </span>
                <span>{product.brand}</span>
              </div>

              <div className="flex">
                <span className="font-semibold w-32">
                  Category :
                </span>
                <span>{product.category}</span>
              </div>

              <div className="flex">
                <span className="font-semibold w-32">
                  Type :
                </span>
                <span>{product.type}</span>
              </div>

              <div className="flex">
                <span className="font-semibold w-32">
                  Size :
                </span>
                <span>{product.size}</span>
              </div>

              <div className="flex">
                <span className="font-semibold w-32">
                  SKU :
                </span>
                <span>{product.sku}</span>
              </div>

            </div>

            {/* Description */}
            <div className="mt-8">

              <h3 className="text-xl font-semibold mb-2">
                Description
              </h3>

              <p className="text-gray-600 leading-7">
                {product.description}
              </p>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">

              <button
                onClick={() => navigate(`/edit-product/${product._id}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Update Product
              </button>

              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Delete Product
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

}


export default ProductDetails;