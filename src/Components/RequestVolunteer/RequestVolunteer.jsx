
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";



const RequestVolunteer = () => {

    const [posts , setPost] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() =>{

        fetch(`${import.meta.env.VITE_API_URL}/addVolunteerModal`)
.then(res =>res.json())
.then(data =>{
    // console.log(data);
    setPost(data)
})

    },[user])


    const handleCancel = (_id) => {
        // console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, i remove it !",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_API_URL}/addVolunteerModal/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
    
            const remaining = posts.filter((post) => post._id !== _id);
            setPost(remaining);
          }
        });
      };
      
   
  

    return (
        <div>
        <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 bg-white shadow-lg">

      <thead>
        <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
          <th className="w-[50px] px-6 py-4 text-start ">
            <input
              type="checkbox"
              id="myCheckbox"
              className="flex h-6 w-6 items-center rounded-full  border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
            />
          </th>
          <th className="px-6 py-4 text-start">Thumbnail</th>
          <th className="px-6 py-4 text-start">Informetion</th>
          <th className="px-6 py-4 text-start">Status</th>
          <th className="px-6 py-4 text-start">Delete</th>
        </tr>
      </thead>
      <tbody>
     
      {posts.map(post => 
          
          <tr
            key={post._id}
            className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
          >
            <th className="px-6 py-4 text-start">
              <input
                type="checkbox"
                id="myCheckbox"
                className="flex h-6 w-6  items-center rounded-full border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
              />
            </th>
            <th className="px-6 py-4 text-start">
              <img
                className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
                src={post.thumbnail}
              />
            </th>
            <th className="px-6 py-4 text-start ">
              {post.title} <br />{" "}
              <span className="text-sm">{post.name}</span> <br />
              <span className="text-sm">{post.email}</span>
            </th>

            <th className="px-6 py-4 text-start">

<p className="text-blue-300 text-xl">{ post.status}</p>

            </th>
            
         <th>
          <button  onClick={() => handleCancel(post._id)} className="bg-red-500 btn m-4">Cancel</button>
          
          </th>
          </tr>
        
        )}
     
      </tbody>
    </table>
  </div>

       

  
        </div>
    );
};

export default RequestVolunteer;