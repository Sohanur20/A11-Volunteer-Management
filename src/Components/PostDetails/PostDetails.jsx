import { Helmet } from "react-helmet";
import {  useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
AOS.init();
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Work from "../../Shared/Work/Work";


const PostDetails = () => {

  

const post = useLoaderData()
// console.log(post);

const { thumbnail,description,title,category,date,  volunteerAdded,  location} = post 

const [openModal, setOpenModal] = useState(false);
useEffect(() => {
    if (openModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflowY = 'auto';
    }
    return () => document.body.style.overflow = 'auto';
}, [openModal]);




const { user } = useContext(AuthContext);
// console.log(user);
const [selectedDate, setSelectedDate] = useState(null);

const handleDateChange = (date) => {
  setSelectedDate(date);
};

const handleAddPostVolunteer = (e) => {
  e.preventDefault();

  const form = e.target;

  const name = user?.displayName;
  const email = user?.email;
  const title = form.title.value;
  const thumbnail = form.thumbnail.value;
  const category = form.category.value;
  const location = form.location.value;
  const volunteerAdded = form.volunteerAdded.value;
  const date = form.date.value;
  const description = form.description.value;
  const status = form.status.value;

  const volunteers = {
    name,
    email,
    title,
    thumbnail,
    category,
    location,
    volunteerAdded,
    date,
    description,
    status
  };

  console.log(volunteers);

  fetch(`${import.meta.env.VITE_API_URL}/addVolunteerModal`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(volunteers),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.insertedId) {
        form.reset();
        toast.success("Added Successfully");
      }
    });
};







    return (
       <div>

      <Helmet>
        <title>Post Details</title>
      </Helmet>
         <div>
             <div className="container  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 my-20">
      <div

        rel="noopener noreferrer"
        href="#"
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
      >
        <img

data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine"
          src={thumbnail}
          alt=""
          className="object-cover w-full  rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
        />
        <div 
        
        className="p-6 space-y-2 lg:col-span-5">
          <h3 
          data-aos="zoom-out-up"
          
          className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
         {title}
          </h3>
          <p 
          data-aos="zoom-out-up"
          >category : # {category}</p>
          <p 
          data-aos="zoom-out-up"
          >Date : {date}</p>
          <p data-aos="zoom-out-up">Location : {location}</p>
          <p data-aos="zoom-out-up">VolunteerAdded : {volunteerAdded}</p>
          <p data-aos="zoom-out-up">{description}</p>
        

          <div className="w-72 mx-auto flex items-center justify-center">
        {/* Pay Button */}
        <button onClick={() => setOpenModal(true)} className="relative m-10 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Be a Volunteer</span>
          </span></button>

{/* btn end */}





        <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
            <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-100'}`}>
                <main className="px-4 sm:px-6 lg:px-8 py-8">
                    <button onClick={() => {setOpenModal(false)}} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6">Close</button>
                 
{/* form */}

<form onSubmit={handleAddPostVolunteer} className="bg-zinc-600">
          {/* form name and quantity row */}
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-5">
            <div className="form-control ">
              <label className="label ">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group  border-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  disabled
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group border-2 ">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  disabled
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={title}
                  name="title"
                  placeholder="title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  defaultValue={thumbnail}
                  name="thumbnail"
                  placeholder="Url --"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>

              <select name="category" className="select select-bordered w-full">
                <option value="">Select Category</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="social_service">Social Service</option>
                <option value="animal_welfare">Animal Welfare</option>
              </select>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={location}
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">No. of volunteers needed</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="volunteerAdded"
                  placeholder="10"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* date picker */}

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <label className="input-group">
                <DatePicker
                  className="input input-bordered lg:w-[500px] w-[300px]"
                  name="date"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  isClearable 
                  showYearDropdown 
                  scrollableYearDropdown 
                  yearDropdownItemNumber={32} 
                />
                {selectedDate && (
                  <p>You selected: {selectedDate.toLocaleDateString()}</p>
                )}
              </label>
            </div>


            <div className="form-control ">
              <label className="label">
                <span className="label-text">Statuse</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="status"
                  defaultValue={'requested'}
                  disabled
                  placeholder="10"
                  className="input input-bordered w-full"
                />
              </label>
            </div>



            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description
              </label>
              <textarea
                id="bio"
                name="description"
                placeholder=""
                className="w-full h-32 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              ></textarea>
        
            </div>




            
          </div>

          <input type="submit" value="Submit" className="btn btn-block" />
        </form>







                </main>
            </div>
        </div>
    </div>
        
    


        </div>
      </div>

      </div>
        </div>
      
      <Work></Work>
      
       </div>
    );
};

export default PostDetails;


