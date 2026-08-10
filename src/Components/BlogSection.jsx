// import React from "react";
// import { CalendarDays, Folder } from "lucide-react";

// const blogs = [
//   {
//     id: 1,
//     image: "/images/blog1.jpg",
//     date: "22 AUG 2021",
//     category: "TIPS & TRICKS",
//     title: "Top 10 casual look ideas to dress up your kids",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eleifend viverra enim tincidunt donec quam.",
//   },
//   {
//     id: 2,
//     image: "/images/blog2.jpg",
//     date: "25 AUG 2021",
//     category: "TRENDING",
//     title: "Latest trends of wearing street wears supremely",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eleifend viverra enim tincidunt donec quam.",
//   },
//   {
//     id: 3,
//     image: "/images/blog3.jpg",
//     date: "28 AUG 2021",
//     category: "INSPIRATION",
//     title: "10 Different Types of comfortable clothes ideas",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eleifend viverra enim tincidunt donec quam.",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto py-16 px-5">
//       {/* Heading */}
//       <div className="flex items-center justify-between mb-10">
//         <h2 className="text-3xl font-bold text-gray-900">
//           Our Recent Blog
//         </h2>

//         <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
//           View All
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white rounded-xl overflow-hidden border border-grey hover:shadow-xl transition duration-300 group"
//           >
//             {/* Image */}
//             <div className="overflow-hidden">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               {/* Date & Category */}
//               <div className="flex items-center gap-5 text-xs text-gray-500 mb-4">
//                 <div className="flex items-center gap-1">
//                   <CalendarDays size={14} />
//                   {blog.date}
//                 </div>

//                 <div className="flex items-center gap-1">
//                   <Folder size={14} />
//                   {blog.category}
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl font-semibold leading-snug hover:text-green-600 cursor-pointer transition">
//                 {blog.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 mt-4 leading-7">
//                 {blog.description}
//               </p>

//               {/* Read More */}
//               <button className="mt-6 text-green-600 font-semibold hover:underline">
//                 Read More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogSection;


import React from "react";
import { CalendarDays, Folder } from "lucide-react";

// import blog1 from "../../Images/blog1.jpg";
// import blog2 from "../../Images/blog2.jpg";
// import blog3 from "../../Images/blog3.jpg";

const blogs = [
    {
        id: 1,
        // image: blog1,
        date: "22 AUG 2021",
        category: "TIPS & TRICKS",
        title: "Top 10 casual look ideas to dress up your kids",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eleifend viverra enim tincidunt donec quam.",
    },
    {
        id: 2,
        // image: blog2,
        date: "25 AUG 2021",
        category: "TRENDING",
        title: "Latest trends of wearing street wears supremely",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eleifend viverra enim tincidunt donec quam.",
    },
    {
        id: 3,
        // image: blog3,
        date: "28 AUG 2021",
        category: "INSPIRATION",
        title: "10 Different Types of comfortable clothes ideas for women",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eleifend viverra enim tincidunt donec quam.",
    },
];

const BlogSection = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">

            {/* Heading */}
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-gray-900">
                    Our Recent Blog
                </h2>

                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition duration-300">
                    View All
                </button>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >

                        {/* Image */}
                        {/* <div className="overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div> */}

                        {/* Content */}
                        <div className="p-5">

                            {/* Date & Category */}
                            <div className="flex items-center gap-5 text-[11px] text-gray-500 mb-3">

                                <div className="flex items-center gap-1">
                                    <CalendarDays size={13} />
                                    <span>{blog.date}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <Folder size={13} />
                                    <span>{blog.category}</span>
                                </div>

                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold leading-8 text-gray-900 hover:text-green-600 transition cursor-pointer">
                                {blog.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-6 mt-3">
                                {blog.description}
                            </p>

                            {/* Read More */}
                            <button className="mt-5 text-green-600 font-semibold hover:underline">
                                Read More →
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default BlogSection;