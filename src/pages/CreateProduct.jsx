
// import React, { useState } from "react";
// import axios from "axios";
// import {
//     Leaf,
//     ImagePlus,
//     X,
//     Package,
//     IndianRupee,
//     FileText,
//     Boxes,
//     Tag,
//     Star,
//     Sparkles,
// } from "lucide-react";
// import Layout from "../Layout/Layout";

// const CreateProduct = () => {

//     const [product, setProduct] = useState({
//         title: "",
//         brand: "",
//         category: "",
//         description: "",
//         price: "",
//         discount: "",
//         size: "",
//         stock: "",
//         section: "", // IMPORTANT: no default selling
//     });

//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // ================= INPUT CHANGE =================

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setProduct((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // ================= SECTION CHANGE =================

//     const handleSectionChange = (section) => {
//         setProduct((prev) => ({
//             ...prev,
//             section: section,
//         }));

//         console.log("Selected Section:", section);
//     };

//     // ================= IMAGE =================

//     const handleImageChange = (e) => {
//         const file = e.target.files?.[0];

//         if (!file) return;

//         setImage(file);
//         setPreview(URL.createObjectURL(file));
//     };

//     // ================= REMOVE IMAGE =================

//     const removeImage = () => {
//         setImage(null);
//         setPreview(null);
//     };

//     // ================= RESET =================

//     const resetForm = () => {
//         setProduct({
//             title: "",
//             brand: "",
//             category: "",
//             description: "",
//             price: "",
//             discount: "",
//             size: "",
//             stock: "",
//             section: "", // IMPORTANT
//         });

//         setImage(null);
//         setPreview(null);
//     };

//     // ================= SUBMIT =================

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // SECTION REQUIRED
//         if (!product.section) {
//             alert("Please select a product section");
//             return;
//         }

//         // IMAGE REQUIRED
//         if (!image) {
//             alert("Please select a product image");
//             return;
//         }

//         try {
//             setLoading(true);

//             const formData = new FormData();

//             formData.append("title", product.title);
//             formData.append("brand", product.brand);
//             formData.append("category", product.category);
//             formData.append("description", product.description);
//             formData.append("price", product.price);
//             formData.append("discount", product.discount || 0);
//             formData.append("size", product.size);
//             formData.append("stock", product.stock);

//             // VERY IMPORTANT
//             formData.append("section", product.section);

//             formData.append("image", image);

//             console.log("========== PRODUCT DATA ==========");
//             console.log("Title:", product.title);
//             console.log("Section:", product.section);
//             console.log("Stock:", product.stock);
//             console.log("==================================");

//             const res = await axios.post(
//                 "http://localhost:5000/api/Products/createProduct",
//                 formData
//             );

//             console.log("Product Response:", res.data);

//             if (res.data.success === false || res.data.status === false) {
//                 alert(
//                     res.data.message ||
//                     "Product not created"
//                 );
//                 return;
//             }

//             alert(
//                 `Product added successfully in ${product.section} section!`
//             );

//             resetForm();

//         } catch (error) {

//             console.error(
//                 "Error creating product:",
//                 error
//             );

//             if (error.response) {

//                 console.log(
//                     "Server Response:",
//                     error.response.data
//                 );

//                 alert(
//                     error.response.data.message ||
//                     "Something went wrong while adding product!"
//                 );

//             } else {

//                 alert(
//                     "Server is not responding!"
//                 );
//             }

//         } finally {

//             setLoading(false);

//         }
//     };

//     // ================= SECTION DATA =================

//     const sectionOptions = [
//         {
//             value: "selling",
//             title: "Best Selling",
//             description:
//                 "Show this product in best selling products",
//             icon: Star,
//         },
//         {
//             value: "featured",
//             title: "Featured",
//             description:
//                 "Show this product in featured products",
//             icon: Sparkles,
//         },
//         {
//             value: "popular",
//             title: "Popular",
//             description:
//                 "Show this product in popular products",
//             icon: Tag,
//         },
//     ];

//     // ================= SECTION NAME =================

//     const getSectionName = () => {

//         if (product.section === "selling") {
//             return "Best Selling";
//         }

//         if (product.section === "featured") {
//             return "Featured";
//         }

//         if (product.section === "popular") {
//             return "Popular";
//         }

//         return "Not Selected";
//     };

//     return (
//         <Layout>

//             <div className="min-h-screen bg-[#f6f8f3] px-4 py-6 sm:px-6 lg:px-8">

//                 <div className="mx-auto max-w-7xl">

//                     {/* ================= HEADER ================= */}

//                     <div className="mb-7 rounded-3xl bg-[#3f7d20] px-6 py-7 text-white shadow-sm sm:px-8">

//                         <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

//                             <div className="flex items-center gap-4">

//                                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
//                                     <Leaf size={28} />
//                                 </div>

//                                 <div>

//                                     <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
//                                         Organic Store
//                                     </p>

//                                     <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
//                                         Create Product
//                                     </h1>

//                                     <p className="mt-1 text-sm text-white/80">
//                                         Add a new product to your store
//                                     </p>

//                                 </div>

//                             </div>

//                             <div className="hidden rounded-2xl bg-white/10 px-5 py-3 text-sm sm:block">
//                                 Keep product information accurate
//                             </div>

//                         </div>

//                     </div>

//                     {/* ================= FORM ================= */}

//                     <form onSubmit={handleSubmit}>

//                         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

//                             {/* ================= LEFT ================= */}

//                             <div className="space-y-6 lg:col-span-2">

//                                 {/* PRODUCT INFORMATION */}

//                                 <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

//                                     <div className="mb-7 flex items-center gap-3">

//                                         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
//                                             <Package size={21} />
//                                         </div>

//                                         <div>

//                                             <h2 className="text-lg font-bold text-gray-900">
//                                                 Product Information
//                                             </h2>

//                                             <p className="text-sm text-gray-500">
//                                                 Add the basic details of your product
//                                             </p>

//                                         </div>

//                                     </div>

//                                     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

//                                         {/* TITLE */}

//                                         <div className="md:col-span-2">

//                                             <label className="mb-2 block text-sm font-semibold text-gray-700">
//                                                 Product Name
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 name="title"
//                                                 value={product.title}
//                                                 onChange={handleChange}
//                                                 placeholder="e.g. Fresh Organic Apples"
//                                                 required
//                                                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                             />

//                                         </div>

//                                         {/* BRAND */}

//                                         <div>

//                                             <label className="mb-2 block text-sm font-semibold text-gray-700">
//                                                 Brand
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 name="brand"
//                                                 value={product.brand}
//                                                 onChange={handleChange}
//                                                 placeholder="e.g. Organic Farms"
//                                                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                             />

//                                         </div>

//                                         {/* CATEGORY */}

//                                         <div>

//                                             <label className="mb-2 block text-sm font-semibold text-gray-700">
//                                                 Category
//                                             </label>

//                                             <select
//                                                 name="category"
//                                                 value={product.category}
//                                                 onChange={handleChange}
//                                                 required
//                                                 className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                             >

//                                                 <option value="">
//                                                     Select Category
//                                                 </option>

//                                                 <option value="Fruits & Vegetables">
//                                                     Fruits & Vegetables
//                                                 </option>

//                                                 <option value="Dairy & Eggs">
//                                                     Dairy & Eggs
//                                                 </option>

//                                                 <option value="Meat & Poultry">
//                                                     Meat & Poultry
//                                                 </option>

//                                                 <option value="Seafood">
//                                                     Seafood
//                                                 </option>

//                                                 <option value="Bakery">
//                                                     Bakery
//                                                 </option>

//                                                 <option value="Canned Goods">
//                                                     Canned Goods
//                                                 </option>

//                                                 <option value="Frozen Foods">
//                                                     Frozen Foods
//                                                 </option>

//                                                 <option value="Pasta & Rice">
//                                                     Pasta & Rice
//                                                 </option>

//                                                 <option value="Snacks">
//                                                     Snacks
//                                                 </option>

//                                                 <option value="Beverages">
//                                                     Beverages
//                                                 </option>

//                                                 <option value="Spices">
//                                                     Spices
//                                                 </option>

//                                             </select>

//                                         </div>

//                                         {/* SIZE */}

//                                         <div>

//                                             <label className="mb-2 block text-sm font-semibold text-gray-700">
//                                                 Weight / Quantity
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 name="size"
//                                                 value={product.size}
//                                                 onChange={handleChange}
//                                                 placeholder="e.g. 500 g, 1 kg, 250 ml"
//                                                 required
//                                                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                             />

//                                         </div>

//                                         {/* STOCK */}

//                                         <div>

//                                             <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
//                                                 <Boxes size={15} />
//                                                 Available Stock
//                                             </label>

//                                             <input
//                                                 type="number"
//                                                 name="stock"
//                                                 value={product.stock}
//                                                 onChange={handleChange}
//                                                 placeholder="e.g. 50"
//                                                 min="0"
//                                                 required
//                                                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                             />

//                                         </div>

//                                     </div>

//                                 </div>

//                                 {/* ================= SECTION ================= */}

//                                 <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

//                                     <div className="mb-6 flex items-center gap-3">

//                                         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
//                                             <Tag size={20} />
//                                         </div>

//                                         <div>

//                                             <h2 className="text-lg font-bold text-gray-900">
//                                                 Product Section
//                                             </h2>

//                                             <p className="text-sm text-gray-500">
//                                                 Choose where this product should appear
//                                             </p>

//                                         </div>

//                                     </div>

//                                     <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

//                                         {sectionOptions.map((option) => {

//                                             const Icon = option.icon;

//                                             const selected =
//                                                 product.section === option.value;

//                                             return (

//                                                 <button
//                                                     key={option.value}
//                                                     type="button"
//                                                     onClick={() =>
//                                                         handleSectionChange(
//                                                             option.value
//                                                         )
//                                                     }
//                                                     className={`
//                                                         relative rounded-2xl border p-5 text-left
//                                                         ${selected
//                                                             ? "border-[#3f7d20] bg-[#f1f7ec] ring-2 ring-[#dcebcf]"
//                                                             : "border-gray-200 bg-white hover:border-[#b8cda8]"
//                                                         }
//                                                     `}
//                                                 >

//                                                     {selected && (

//                                                         <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#3f7d20] text-xs text-white">
//                                                             ✓
//                                                         </span>

//                                                     )}

//                                                     <div
//                                                         className={`
//                                                             flex h-10 w-10 items-center justify-center rounded-xl
//                                                             ${selected
//                                                                 ? "bg-[#3f7d20] text-white"
//                                                                 : "bg-gray-100 text-gray-500"
//                                                             }
//                                                         `}
//                                                     >
//                                                         <Icon size={19} />
//                                                     </div>

//                                                     <h3 className="mt-4 text-sm font-bold text-gray-900">
//                                                         {option.title}
//                                                     </h3>

//                                                     <p className="mt-1 text-xs leading-5 text-gray-500">
//                                                         {option.description}
//                                                     </p>

//                                                 </button>

//                                             );

//                                         })}

//                                     </div>

//                                     {/* SELECTED SECTION */}

//                                     <div className="mt-5 rounded-xl bg-[#f1f6eb] px-4 py-3">

//                                         <p className="text-sm text-gray-600">
//                                             Selected Section:
//                                             <span className="ml-2 font-bold text-[#3f7d20]">
//                                                 {getSectionName()}
//                                             </span>
//                                         </p>

//                                     </div>

//                                 </div>

//                                 {/* ================= DESCRIPTION ================= */}

//                                 <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

//                                     <div className="mb-5 flex items-center gap-3">

//                                         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
//                                             <FileText size={20} />
//                                         </div>

//                                         <div>

//                                             <h2 className="text-lg font-bold text-gray-900">
//                                                 Product Description
//                                             </h2>

//                                             <p className="text-sm text-gray-500">
//                                                 Tell customers about the product
//                                             </p>

//                                         </div>

//                                     </div>

//                                     <textarea
//                                         name="description"
//                                         value={product.description}
//                                         onChange={handleChange}
//                                         rows="7"
//                                         placeholder="Describe the product, freshness, quality and benefits..."
//                                         required
//                                         className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                     />

//                                 </div>

//                                 {/* ================= PRICING ================= */}

//                                 <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

//                                     <div className="mb-6 flex items-center gap-3">

//                                         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
//                                             <IndianRupee size={20} />
//                                         </div>

//                                         <div>

//                                             <h2 className="text-lg font-bold text-gray-900">
//                                                 Product Pricing
//                                             </h2>

//                                             <p className="text-sm text-gray-500">
//                                                 Set price and discount
//                                             </p>

//                                         </div>

//                                     </div>

//                                     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

//                                         {/* PRICE */}

//                                         <div>

//                                             <label className="mb-2 block text-sm font-semibold text-gray-700">
//                                                 Selling Price
//                                             </label>

//                                             <div className="relative">

//                                                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
//                                                     ₹
//                                                 </span>

//                                                 <input
//                                                     type="number"
//                                                     name="price"
//                                                     value={product.price}
//                                                     onChange={handleChange}
//                                                     placeholder="Enter price"
//                                                     min="0"
//                                                     required
//                                                     className="w-full rounded-xl border border-gray-200 py-3 pl-9 pr-4 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                                 />

//                                             </div>

//                                         </div>

//                                         {/* DISCOUNT */}

//                                         <div>

//                                             <label className="mb-2 block text-sm font-semibold text-gray-700">
//                                                 Discount Offer
//                                             </label>

//                                             <div className="relative">

//                                                 <input
//                                                     type="number"
//                                                     name="discount"
//                                                     value={product.discount}
//                                                     onChange={handleChange}
//                                                     placeholder="e.g. 10"
//                                                     min="0"
//                                                     max="100"
//                                                     className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
//                                                 />

//                                                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
//                                                     %
//                                                 </span>

//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                             {/* ================= RIGHT ================= */}

//                             <div className="space-y-6">

//                                 {/* IMAGE */}

//                                 <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6">

//                                     <div className="mb-5">

//                                         <h2 className="text-lg font-bold text-gray-900">
//                                             Product Image
//                                         </h2>

//                                         <p className="mt-1 text-sm text-gray-500">
//                                             Upload a clear product photo
//                                         </p>

//                                     </div>

//                                     {!preview ? (

//                                         <label
//                                             htmlFor="productImage"
//                                             className="flex min-h-[310px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#cbdcc0] bg-[#fafcf8] px-5 text-center hover:border-[#6c9c4a] hover:bg-[#f3f8ee]"
//                                         >

//                                             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf5e8] text-[#3f7d20]">
//                                                 <ImagePlus size={29} />
//                                             </div>

//                                             <p className="mt-4 font-semibold text-gray-700">
//                                                 Upload Product Image
//                                             </p>

//                                             <p className="mt-2 text-xs leading-5 text-gray-500">
//                                                 JPG, PNG or WEBP
//                                                 <br />
//                                                 Use a clear product photo
//                                             </p>

//                                             <span className="mt-5 rounded-full bg-[#3f7d20] px-6 py-2.5 text-sm font-semibold text-white">
//                                                 Choose Image
//                                             </span>

//                                             <input
//                                                 id="productImage"
//                                                 type="file"
//                                                 accept="image/*"
//                                                 onChange={handleImageChange}
//                                                 className="hidden"
//                                             />

//                                         </label>

//                                     ) : (

//                                         <div className="overflow-hidden rounded-2xl border border-gray-200">

//                                             <div className="relative bg-[#fafcf8]">

//                                                 <img
//                                                     src={preview}
//                                                     alt="Product Preview"
//                                                     className="h-[310px] w-full object-contain p-5"
//                                                 />

//                                                 <button
//                                                     type="button"
//                                                     onClick={removeImage}
//                                                     className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md hover:bg-red-500 hover:text-white"
//                                                 >
//                                                     <X size={18} />
//                                                 </button>

//                                             </div>

//                                             <div className="border-t border-gray-200 bg-white px-4 py-3">

//                                                 <p className="truncate text-sm font-medium text-gray-700">
//                                                     {image?.name}
//                                                 </p>

//                                                 <p className="mt-1 text-xs font-medium text-green-600">
//                                                     Image selected successfully
//                                                 </p>

//                                             </div>

//                                         </div>

//                                     )}

//                                 </div>

//                                 {/* SUMMARY */}

//                                 <div className="rounded-3xl bg-[#f1f6eb] p-6">

//                                     <div className="flex items-center gap-3">

//                                         <Leaf
//                                             size={20}
//                                             className="text-[#3f7d20]"
//                                         />

//                                         <h3 className="font-bold text-gray-900">
//                                             Product Summary
//                                         </h3>

//                                     </div>

//                                     <div className="mt-5 space-y-3 text-sm">

//                                         <div className="flex justify-between gap-3">

//                                             <span className="text-gray-500">
//                                                 Section
//                                             </span>

//                                             <span className="font-semibold text-gray-800">
//                                                 {getSectionName()}
//                                             </span>

//                                         </div>

//                                         <div className="flex justify-between gap-3">

//                                             <span className="text-gray-500">
//                                                 Stock
//                                             </span>

//                                             <span className="font-semibold text-gray-800">
//                                                 {product.stock || "—"}
//                                             </span>

//                                         </div>

//                                         <div className="flex justify-between gap-3">

//                                             <span className="text-gray-500">
//                                                 Size
//                                             </span>

//                                             <span className="font-semibold text-gray-800">
//                                                 {product.size || "—"}
//                                             </span>

//                                         </div>

//                                     </div>

//                                 </div>

//                                 {/* ACTIONS */}

//                                 <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">

//                                     <button
//                                         type="submit"
//                                         disabled={loading}
//                                         className="w-full rounded-xl bg-[#3f7d20] py-3.5 text-sm font-semibold text-white hover:bg-[#326616] disabled:cursor-not-allowed disabled:opacity-60"
//                                     >
//                                         {loading
//                                             ? "Adding Product..."
//                                             : "Add Product"}
//                                     </button>

//                                     <button
//                                         type="button"
//                                         onClick={resetForm}
//                                         disabled={loading}
//                                         className="mt-3 w-full rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
//                                     >
//                                         Reset Form
//                                     </button>

//                                 </div>

//                             </div>

//                         </div>

//                     </form>

//                 </div>

//             </div>

//         </Layout>
//     );
// };

// export default CreateProduct;

import React, { useState } from "react";
import axios from "axios";
import {
    Leaf,
    ImagePlus,
    X,
    Package,
    IndianRupee,
    FileText,
    Boxes,
    Tag,
    Star,
    Sparkles,
    Hash,
} from "lucide-react";
import Layout from "../Layout/Layout";
import api from "../api/Api";

const CreateProduct = () => {

    // =====================================================
    // PRODUCT STATE
    // =====================================================

    const [product, setProduct] = useState({
        title: "",
        brand: "",
        sku: "",
        category: "",
        description: "",
        price: "",
        discount: "",
        size: "",
        stock: "",
        section: [],
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    // =====================================================
    // INPUT CHANGE
    // =====================================================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // =====================================================
    // SECTION CHANGE
    // =====================================================

    const handleSectionChange = (section) => {

        setProduct((prev) => {

            const alreadySelected =
                prev.section.includes(section);

            if (alreadySelected) {

                return {
                    ...prev,
                    section: prev.section.filter(
                        (item) => item !== section
                    ),
                };

            }

            return {
                ...prev,
                section: [
                    ...prev.section,
                    section,
                ],
            };
        });
    };

    // =====================================================
    // IMAGE CHANGE
    // =====================================================

    const handleImageChange = (e) => {

        const file = e.target.files?.[0];

        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    // =====================================================
    // REMOVE IMAGE
    // =====================================================

    const removeImage = () => {

        if (preview) {
            URL.revokeObjectURL(preview);
        }

        setImage(null);
        setPreview(null);
    };

    // =====================================================
    // RESET FORM
    // =====================================================

    const resetForm = () => {

        if (preview) {
            URL.revokeObjectURL(preview);
        }

        setProduct({
            title: "",
            brand: "",
            sku: "",
            category: "",
            description: "",
            price: "",
            discount: "",
            size: "",
            stock: "",
            section: [],
        });

        setImage(null);
        setPreview(null);
    };

    // =====================================================
    // SECTION NAME
    // =====================================================

    const getSectionName = () => {

        if (product.section.length === 0) {
            return "Not Selected";
        }

        const names = {
            selling: "Best Selling",
            featured: "Featured",
            popular: "Popular",
        };

        return product.section
            .map((item) => names[item])
            .join(", ");
    };

    // =====================================================
    // SUBMIT
    // =====================================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        // SECTION VALIDATION

        if (product.section.length === 0) {

            alert(
                "Please select at least one product section"
            );

            return;
        }

        // IMAGE VALIDATION

        if (!image) {

            alert(
                "Please select a product image"
            );

            return;
        }

        try {

            setLoading(true);

            const formData = new FormData();

            // =================================================
            // BASIC INFORMATION
            // =================================================

            formData.append(
                "title",
                product.title
            );

            formData.append(
                "brand",
                product.brand
            );

            formData.append(
                "sku",
                product.sku
            );

            formData.append(
                "category",
                product.category
            );

            formData.append(
                "description",
                product.description
            );

            // =================================================
            // PRICING
            // =================================================

            formData.append(
                "price",
                product.price
            );

            formData.append(
                "discount",
                product.discount || 0
            );

            // =================================================
            // INVENTORY
            // =================================================

            formData.append(
                "size",
                product.size
            );

            formData.append(
                "stock",
                product.stock
            );

            // =================================================
            // SECTIONS
            // =================================================

            product.section.forEach((section) => {

                formData.append(
                    "section",
                    section
                );

            });

            // =================================================
            // IMAGE
            // =================================================

            formData.append(
                "image",
                image
            );



            // =================================================
            // API
            // =================================================

            
            const res = await api.post("/Products/createproduct", formData)

            console.log(
                "Product Response:",
                res.data
            );

            // =================================================
            // RESPONSE
            // =================================================

            if (
                res.data.success === false ||
                res.data.status === false
            ) {

                alert(
                    res.data.message ||
                    "Product not created"
                );

                return;
            }

            alert(
                "Product added successfully!"
            );

            resetForm();

        } catch (error) {

            console.error(
                "Error creating product:",
                error
            );

            if (error.response) {

                console.log(
                    "Server Response:",
                    error.response.data
                );

                alert(
                    error.response.data.message ||
                    "Something went wrong while adding product!"
                );

            } else {

                alert(
                    "Server is not responding!"
                );
            }

        } finally {

            setLoading(false);
        }
    };

    // =====================================================
    // SECTION DATA
    // =====================================================

    const sectionOptions = [
        {
            value: "selling",
            title: "Best Selling",
            description:
                "Show this product in best selling products",
            icon: Star,
        },
        {
            value: "featured",
            title: "Featured",
            description:
                "Show this product in featured products",
            icon: Sparkles,
        },
        {
            value: "popular",
            title: "Popular",
            description:
                "Show this product in popular products",
            icon: Tag,
        },
    ];

    // =====================================================
    // RETURN
    // =====================================================

    return (
        <Layout>

            <div className="min-h-screen bg-[#f6f8f3] px-4 py-6 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    {/* ================================================= */}
                    {/* HEADER */}
                    {/* ================================================= */}

                    <div className="mb-7 rounded-3xl bg-[#3f7d20] px-6 py-7 text-white shadow-sm sm:px-8">

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                                    <Leaf size={28} />
                                </div>

                                <div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                                        Organic Store
                                    </p>

                                    <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                                        Create Product
                                    </h1>

                                    <p className="mt-1 text-sm text-white/80">
                                        Add a new product to your store
                                    </p>

                                </div>

                            </div>

                            <div className="hidden rounded-2xl bg-white/10 px-5 py-3 text-sm sm:block">
                                Keep product information accurate
                            </div>

                        </div>

                    </div>

                    {/* ================================================= */}
                    {/* FORM */}
                    {/* ================================================= */}

                    <form onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                            {/* ================================================= */}
                            {/* LEFT */}
                            {/* ================================================= */}

                            <div className="space-y-6 lg:col-span-2">

                                {/* ================================================= */}
                                {/* PRODUCT INFORMATION */}
                                {/* ================================================= */}

                                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

                                    <div className="mb-7 flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
                                            <Package size={21} />
                                        </div>

                                        <div>

                                            <h2 className="text-lg font-bold text-gray-900">
                                                Product Information
                                            </h2>

                                            <p className="text-sm text-gray-500">
                                                Add the basic details of your product
                                            </p>

                                        </div>

                                    </div>

                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                        {/* PRODUCT NAME */}

                                        <div className="md:col-span-2">

                                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Product Name
                                            </label>

                                            <input
                                                type="text"
                                                name="title"
                                                value={product.title}
                                                onChange={handleChange}
                                                placeholder="e.g. Fresh Organic Apples"
                                                //required
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                            />

                                        </div>

                                        {/* BRAND */}

                                        <div>

                                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Brand
                                            </label>

                                            <input
                                                type="text"
                                                name="brand"
                                                value={product.brand}
                                                onChange={handleChange}
                                                placeholder="e.g. Organic Farms"
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                            />

                                        </div>

                                        {/* SKU */}

                                        <div>

                                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                                                <Hash size={15} />
                                                SKU
                                            </label>

                                            <input
                                                type="text"
                                                name="sku"
                                                value={product.sku}
                                                onChange={handleChange}
                                                placeholder="e.g. APP-001"
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm uppercase outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                            />

                                            <p className="mt-1 text-xs text-gray-400">
                                                Unique product code
                                            </p>

                                        </div>

                                        {/* CATEGORY */}

                                        <div>

                                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Category
                                            </label>

                                            <select
                                                name="category"
                                                value={product.category}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                            >

                                                <option value="">
                                                    Select Category
                                                </option>

                                                <option value="Fruits & Vegetables">
                                                    Fruits & Vegetables
                                                </option>

                                                <option value="Dairy & Eggs">
                                                    Dairy & Eggs
                                                </option>

                                                <option value="Meat & Poultry">
                                                    Meat & Poultry
                                                </option>

                                                <option value="Seafood">
                                                    Seafood
                                                </option>

                                                <option value="Bakery">
                                                    Bakery
                                                </option>

                                                <option value="Canned Goods">
                                                    Canned Goods
                                                </option>

                                                <option value="Frozen Foods">
                                                    Frozen Foods
                                                </option>

                                                <option value="Pasta & Rice">
                                                    Pasta & Rice
                                                </option>

                                                <option value="Snacks">
                                                    Snacks
                                                </option>

                                                <option value="Beverages">
                                                    Beverages
                                                </option>

                                                <option value="Spices">
                                                    Spices
                                                </option>

                                            </select>

                                        </div>

                                        {/* SIZE */}

                                        <div>

                                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Weight / Quantity
                                            </label>

                                            <input
                                                type="text"
                                                name="size"
                                                value={product.size}
                                                onChange={handleChange}
                                                placeholder="e.g. 500 g, 1 kg, 250 ml"
                                                required
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                            />

                                        </div>

                                        {/* STOCK */}

                                        <div>

                                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                                                <Boxes size={15} />
                                                Available Stock
                                            </label>

                                            <input
                                                type="number"
                                                name="stock"
                                                value={product.stock}
                                                onChange={handleChange}
                                                placeholder="e.g. 50"
                                                min="0"
                                                required
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                            />

                                        </div>

                                    </div>

                                </div>

                                {/* ================================================= */}
                                {/* SECTION */}
                                {/* ================================================= */}

                                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

                                    <div className="mb-6 flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
                                            <Tag size={20} />
                                        </div>

                                        <div>

                                            <h2 className="text-lg font-bold text-gray-900">
                                                Product Sections
                                            </h2>

                                            <p className="text-sm text-gray-500">
                                                Select one or more sections
                                            </p>

                                        </div>

                                    </div>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                                        {sectionOptions.map((option) => {

                                            const Icon = option.icon;

                                            const selected =
                                                product.section.includes(
                                                    option.value
                                                );

                                            return (

                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() =>
                                                        handleSectionChange(
                                                            option.value
                                                        )
                                                    }
                                                    className={`
                                                        relative rounded-2xl border p-5 text-left transition
                                                        ${selected
                                                            ? "border-[#3f7d20] bg-[#f1f7ec] ring-2 ring-[#dcebcf]"
                                                            : "border-gray-200 bg-white hover:border-[#b8cda8]"
                                                        }
                                                    `}
                                                >

                                                    {selected && (

                                                        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#3f7d20] text-xs text-white">
                                                            ✓
                                                        </span>

                                                    )}

                                                    <div
                                                        className={`
                                                            flex h-10 w-10 items-center justify-center rounded-xl
                                                            ${selected
                                                                ? "bg-[#3f7d20] text-white"
                                                                : "bg-gray-100 text-gray-500"
                                                            }
                                                        `}
                                                    >
                                                        <Icon size={19} />
                                                    </div>

                                                    <h3 className="mt-4 text-sm font-bold text-gray-900">
                                                        {option.title}
                                                    </h3>

                                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                                        {option.description}
                                                    </p>

                                                </button>
                                            );
                                        })}

                                    </div>

                                    {/* SELECTED */}

                                    <div className="mt-5 rounded-xl bg-[#f1f6eb] px-4 py-3">

                                        <p className="text-sm text-gray-600">

                                            Selected Sections:

                                            <span className="ml-2 font-bold text-[#3f7d20]">
                                                {getSectionName()}
                                            </span>

                                        </p>

                                    </div>

                                </div>

                                {/* ================================================= */}
                                {/* DESCRIPTION */}
                                {/* ================================================= */}

                                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

                                    <div className="mb-5 flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
                                            <FileText size={20} />
                                        </div>

                                        <div>

                                            <h2 className="text-lg font-bold text-gray-900">
                                                Product Description
                                            </h2>

                                            <p className="text-sm text-gray-500">
                                                Tell customers about the product
                                            </p>

                                        </div>

                                    </div>

                                    <textarea
                                        name="description"
                                        value={product.description}
                                        onChange={handleChange}
                                        rows="7"
                                        placeholder="Describe the product, freshness, quality and benefits..."
                                        required
                                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                    />

                                </div>

                                {/* ================================================= */}
                                {/* PRICING */}
                                {/* ================================================= */}

                                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">

                                    <div className="mb-6 flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5e8] text-[#3f7d20]">
                                            <IndianRupee size={20} />
                                        </div>

                                        <div>

                                            <h2 className="text-lg font-bold text-gray-900">
                                                Product Pricing
                                            </h2>

                                            <p className="text-sm text-gray-500">
                                                Set price and discount
                                            </p>

                                        </div>

                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                        {/* PRICE */}

                                        <div>

                                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Selling Price
                                            </label>

                                            <div className="relative">

                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                                    ₹
                                                </span>

                                                <input
                                                    type="number"
                                                    name="price"
                                                    value={product.price}
                                                    onChange={handleChange}
                                                    placeholder="Enter price"
                                                    min="0"
                                                    required
                                                    className="w-full rounded-xl border border-gray-200 py-3 pl-9 pr-4 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                                />

                                            </div>

                                        </div>

                                        {/* DISCOUNT */}

                                        <div>

                                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Discount Offer
                                            </label>

                                            <div className="relative">

                                                <input
                                                    type="number"
                                                    name="discount"
                                                    value={product.discount}
                                                    onChange={handleChange}
                                                    placeholder="e.g. 10"
                                                    min="0"
                                                    max="100"
                                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 text-sm outline-none focus:border-[#6c9c4a] focus:ring-4 focus:ring-[#edf5e8]"
                                                />

                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                                    %
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* ================================================= */}
                            {/* RIGHT */}
                            {/* ================================================= */}

                            <div className="space-y-6">

                                {/* ================================================= */}
                                {/* IMAGE */}
                                {/* ================================================= */}

                                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6">

                                    <div className="mb-5">

                                        <h2 className="text-lg font-bold text-gray-900">
                                            Product Image
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Upload a clear product photo
                                        </p>

                                    </div>

                                    {!preview ? (

                                        <label
                                            htmlFor="productImage"
                                            className="flex min-h-[310px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#cbdcc0] bg-[#fafcf8] px-5 text-center hover:border-[#6c9c4a] hover:bg-[#f3f8ee]"
                                        >

                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf5e8] text-[#3f7d20]">
                                                <ImagePlus size={29} />
                                            </div>

                                            <p className="mt-4 font-semibold text-gray-700">
                                                Upload Product Image
                                            </p>

                                            <p className="mt-2 text-xs leading-5 text-gray-500">
                                                JPG, PNG or WEBP
                                                <br />
                                                Use a clear product photo
                                            </p>

                                            <span className="mt-5 rounded-full bg-[#3f7d20] px-6 py-2.5 text-sm font-semibold text-white">
                                                Choose Image
                                            </span>

                                            <input
                                                id="productImage"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />

                                        </label>

                                    ) : (

                                        <div className="overflow-hidden rounded-2xl border border-gray-200">

                                            <div className="relative bg-[#fafcf8]">

                                                <img
                                                    src={preview}
                                                    alt="Product Preview"
                                                    className="h-[310px] w-full object-contain p-5"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={removeImage}
                                                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md hover:bg-red-500 hover:text-white"
                                                >
                                                    <X size={18} />
                                                </button>

                                            </div>

                                            <div className="border-t border-gray-200 bg-white px-4 py-3">

                                                <p className="truncate text-sm font-medium text-gray-700">
                                                    {image?.name}
                                                </p>

                                                <p className="mt-1 text-xs font-medium text-green-600">
                                                    Image selected successfully
                                                </p>

                                            </div>

                                        </div>

                                    )}

                                </div>

                                {/* ================================================= */}
                                {/* SUMMARY */}
                                {/* ================================================= */}

                                <div className="rounded-3xl bg-[#f1f6eb] p-6">

                                    <div className="flex items-center gap-3">

                                        <Leaf
                                            size={20}
                                            className="text-[#3f7d20]"
                                        />

                                        <h3 className="font-bold text-gray-900">
                                            Product Summary
                                        </h3>

                                    </div>

                                    <div className="mt-5 space-y-3 text-sm">

                                        <div className="flex justify-between gap-3">

                                            <span className="text-gray-500">
                                                SKU
                                            </span>

                                            <span className="font-semibold text-gray-800">
                                                {product.sku || "—"}
                                            </span>

                                        </div>

                                        <div className="flex justify-between gap-3">

                                            <span className="text-gray-500">
                                                Section
                                            </span>

                                            <span className="text-right font-semibold text-gray-800">
                                                {getSectionName()}
                                            </span>

                                        </div>

                                        <div className="flex justify-between gap-3">

                                            <span className="text-gray-500">
                                                Stock
                                            </span>

                                            <span className="font-semibold text-gray-800">
                                                {product.stock || "—"}
                                            </span>

                                        </div>

                                        <div className="flex justify-between gap-3">

                                            <span className="text-gray-500">
                                                Size
                                            </span>

                                            <span className="font-semibold text-gray-800">
                                                {product.size || "—"}
                                            </span>

                                        </div>

                                        <div className="flex justify-between gap-3">

                                            <span className="text-gray-500">
                                                Price
                                            </span>

                                            <span className="font-semibold text-gray-800">
                                                {product.price
                                                    ? `₹${product.price}`
                                                    : "—"}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* ================================================= */}
                                {/* ACTIONS */}
                                {/* ================================================= */}

                                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full rounded-xl bg-[#3f7d20] py-3.5 text-sm font-semibold text-white hover:bg-[#326616] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {loading
                                            ? "Adding Product..."
                                            : "Add Product"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        disabled={loading}
                                        className="mt-3 w-full rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                                    >
                                        Reset Form
                                    </button>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </Layout>
    );
};

export default CreateProduct;