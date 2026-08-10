import React, { useState } from "react";
import axios from "axios";

function CreateProduct() {


  const [product, setProduct] = useState({
    title: "",
    brand: "",
    category: "",
    type: "",
    description: "",
    price: "",
    discount: "",
    size: "",
    sku: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };




  const handleImage = (e) => {
    // setImage(e.target.files[0]);
    const file =e.target.files[0]

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file))
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", product.title);
      formData.append("brand", product.brand);
      formData.append("category", product.category);
      formData.append("type", product.type);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("discount", product.discount);
      formData.append("size", product.size);
      formData.append("sku", product.sku);
      formData.append("image", image);

      const res = await axios.post(
        "http://localhost:5000/api/Products/createProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };





  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-pink-100 p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600">
            Add New Product
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the product details below
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Product Name */}
          <div>
            <label className="font-semibold text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter Product Name"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="font-semibold text-gray-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              placeholder="Brand Name"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            >
              <option value="">Select Category</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Beauty">Beauty</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="font-semibold text-gray-700">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Discount */}
          <div>
            <label className="font-semibold text-gray-700">
              Discount (%)
            </label>

            <input
              type="number"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Size */}
          <div>
            <label className="font-semibold text-gray-700">
              Size
            </label>

            <input
              type="text"
              name="size"
              value={product.size}
              onChange={handleChange}
              placeholder="S, M, L, XL"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* SKU */}
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700">
              SKU
            </label>

            <input
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleChange}
              placeholder="SKU123"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Write product description..."
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>


      
          <div className=" bg-pink-50 border border-pink-100 rounded-2xl p-6">

            <h2 className="text-lg font-semibold text-gray-800">
              Product Image
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Upload high-quality product image
            </p>

            <div className="border-2 border-dashed border-pink-300 rounded-2xl h-72 flex flex-col items-center justify-center bg-white">

            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0-12l-4 4m4-4l4 4"
                />
              </svg>

              <p className="text-gray-500 mt-3">
                upload image here
              </p>

              <input
                type="file"
                id="fileUpload"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />

              <label htmlFor="fileUpload">
                <span className="mt-5 inline-block cursor-pointer bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl">
                  Browse Image
                </span>
              </label>
            </div>

          
            {product && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Image Preview
                </h3>

                <div className="relative rounded-2xl overflow-hidden border shadow">

                  <img
                    // src={URL.createObjectURL(product.image)}
                    src={preview}
                    alt="preview"
                    className="w-full h-72 object-cover"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setProduct({ ...product, image: "" })
                    }
                    className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    ✕
                  </button>

                </div>
              </div>
            )}
          </div>


          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="reset"
              className="px-7 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 shadow-lg"
            >
              Add Product
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default CreateProduct