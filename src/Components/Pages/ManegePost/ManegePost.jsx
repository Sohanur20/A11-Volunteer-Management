// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { CiGrid31, CiGrid41 } from "react-icons/ci";
// AOS.init();

// const ManegePost = () => {
//   const { user } = useContext(AuthContext);
//   const [posts, setPost] = useState([]);
//   const [isTableLayout, setIsTableLayout] = useState(true); 

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/managePost/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         //    console.log(data);
//         setPost(data);
//       });
//   }, [user]);

// //   delete start

//   const handleDelete = (_id) => {
//     // console.log(_id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`${import.meta.env.VITE_API_URL}/managePost/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             // console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success",
//               });
//             }
//           });

//         const remaining = posts.filter((post) => post._id !== _id);
//         setPost(remaining);
//       }
//     });
//   };
// //   end delete


// const toggleLayout = () => {
//   setIsTableLayout((prevLayout) => !prevLayout); // Toggle layout mode
// };



//   return (
//     <div className="my-20">
//  <Helmet>
//         <title>Manage Your Posts</title>
//       </Helmet>



// <div className="flex justify-end mr-20 my-10">
// {isTableLayout ? <button
//            onClick={() => toggleLayout(!isTableLayout)}
//            className="relative p-0.5 text-center flex items-center justify-center font-bold overflow-hidden group rounded-md">
//               <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
//               <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
//                <span className="relative  text-white  flex gap-2"> <CiGrid31 className="text-3xl"/> <span className="mt-1">Table Layout</span> </span>
//             </span>
//          </button>
//          : 
//          <button
//          onClick={() => toggleLayout(!isTableLayout)}
//          className="relative p-0.5 text-center flex items-center justify-center font-bold overflow-hidden group rounded-md">
//             <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
//             <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
//              <span className="relative  text-white  flex gap-2"> <CiGrid41 className="text-3xl"/> <span className="mt-1">Card Layout</span> </span>
//           </span>
//        </button>}
// </div>
     
     

// {
//   isTableLayout ? (

//     <div className="overflow-x-auto">
//     <table className="min-w-full border border-gray-200 bg-white shadow-lg">

//       <thead>
//         <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
//           <th className="w-[50px] px-6 py-4 text-start ">
//             <input
//               type="checkbox"
//               id="myCheckbox"
//               className="flex h-6 w-6 items-center rounded-full  border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
//             />
//           </th>
//           <th className="px-6 py-4 text-start">Thumbnail</th>
//           <th className="px-6 py-4 text-start">Status</th>
//           <th className="px-6 py-4 text-start">Update Your Data</th>
//           <th className="px-6 py-4 text-start">Delete</th>
//         </tr>
//       </thead>
//       <tbody>
     

//         {posts.map((post) => (
//           <tr
//             key={post._id}
//             className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
//           >
//             <th className="px-6 py-4 text-start">
//               <input
//                 type="checkbox"
//                 id="myCheckbox"
//                 className="flex h-6 w-6  items-center rounded-full border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
//               />
//             </th>
//             <th className="px-6 py-4 text-start">
//               <img
//                 className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
//                 src={post.thumbnail}
//               />
//             </th>
//             <th className="px-6 py-4 text-start ">
//               {post.title} <br />{" "}
//               <span className="text-sm">{post.name}</span> <br />
//               <span className="text-sm">{post.email}</span>
//             </th>

//             <th className="px-6 py-4 text-start">

// <Link to={`/updateVolunteer/${post?._id}`}>
// <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="mr-2 h-6 w-6"
//                 >
//                   {" "}
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />{" "}
//                 </svg>
//               Update
//               </button>

// </Link>

           
//             </th>
//             <th className="px-6 py-4 text-start">
//               <button
//                 onClick={() => handleDelete(post._id)}
//                 className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="mr-2 h-6 w-6"
//                 >
//                   {" "}
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />{" "}
//                 </svg>
//                 Delete
//               </button>
//             </th>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>

//   ) : (

//     <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
//     {posts.map((post) => (
//       <div
//         key={post._id}
//         className="justify-center  flex"
        
//       >
//         {/* Card content */}

//         <div
//             data-aos="fade-up"
//             data-aos-duration="4000"
//             key={post._id}
//             className="card w-96 glass m-2 "
//           >
//             <figure>
//               <img src={post?.thumbnail} alt="car!" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{post?.title}</h2>
//               <p>Date / {post?.date}</p>
//               <p>
//                 {" "}
//                 <span className="font-semibold">No need Volunteer</span> :{" "}
//                 {post?.volunteerAdded}
//               </p>
              
// <div className="flex justify-between ">
// <Link to={`/updateVolunteer/${post?._id}`}>
// <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="mr-2 h-6 w-6"
//                 >
//                   {" "}
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />{" "}
//                 </svg>
//               Update
//               </button>

// </Link>

// <button
//                 onClick={() => handleDelete(post._id)}
//                 className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="mr-2 h-6 w-6"
//                 >
//                   {" "}
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />{" "}
//                 </svg>
//                 Delete
//               </button>
// </div>

//             </div>
//           </div>




//       </div>
//     ))}
//   </div>
// )}
// </div>



//   )
// }




   


// export default ManegePost;



import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiGrid31, CiGrid41 } from "react-icons/ci";
import NODATA from "../NODATA/NODATA";
AOS.init();

const ManagePost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPost] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/managePost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/managePost/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              const remaining = posts.filter((post) => post._id !== _id);
              setPost(remaining);
            }
          });
      }
    });
  };

  const toggleLayout = () => {
    setIsTableLayout((prevLayout) => !prevLayout);
  };

  return (
    <div className="my-20">
      <Helmet>
        <title>Manage Your Posts</title>
      </Helmet>

      <div className="flex justify-end mr-20 my-10">
        {isTableLayout ? (
          <button
            onClick={toggleLayout}
            className="relative p-0.5 text-center flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white flex gap-2">
                <CiGrid31 className="text-3xl" />
                <span className="mt-1">Table Layout</span>
              </span>
            </span>
          </button>
        ) : (
          <button
            onClick={toggleLayout}
            className="relative p-0.5 text-center flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white flex gap-2">
                <CiGrid41 className="text-3xl" />
                <span className="mt-1">Card Layout</span>
              </span>
            </span>
          </button>
        )}
      </div>

      {posts.length === 0 ? (
        <div className="text-center text-gray-500">
          <NODATA></NODATA>
        </div>
      ) : isTableLayout ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white shadow-lg">
            <thead>
              <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
                <th className="w-[50px] px-6 py-4 text-start">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="flex h-6 w-6 items-center rounded-full border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
                  />
                </th>
                <th className="px-6 py-4 text-start">Thumbnail</th>
                <th className="px-6 py-4 text-start">Status</th>
                <th className="px-6 py-4 text-start">Update Your Data</th>
                <th className="px-6 py-4 text-start">Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post._id}
                  className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
                >
                  <th className="px-6 py-4 text-start">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      className="flex h-6 w-6 items-center rounded-full border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
                    />
                  </th>
                  <th className="px-6 py-4 text-start">
                    <img
                      className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
                      src={post.thumbnail}
                    />
                  </th>
                  <th className="px-6 py-4 text-start">
                    {post.title} <br /> <span className="text-sm">{post.name}</span> <br />
                    <span className="text-sm">{post.email}</span>
                  </th>
                  <th className="px-6 py-4 text-start">
                    <Link to={`/updateVolunteer/${post?._id}`}>
                      <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="mr-2 h-6 w-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Update
                      </button>
                    </Link>
                  </th>
                  <th className="px-6 py-4 text-start">
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="mr-2 h-6 w-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {posts.map((post) => (
            <div key={post._id} className="justify-center flex">
              <div data-aos="fade-up" data-aos-duration="4000" className="card w-96 glass m-2">
                <figure>
                  <img src={post?.thumbnail} alt="thumbnail" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post?.title}</h2>
                  <p>Date / {post?.date}</p>
                  <p>
                    <span className="font-semibold">No need Volunteer</span> : {post?.volunteerAdded}
                  </p>
                  <div className="flex justify-between">
                    <Link to={`/updateVolunteer/${post?._id}`}>
                      <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="mr-2 h-6 w-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="mr-2 h-6 w-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManagePost;

