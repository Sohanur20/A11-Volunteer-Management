
import { toast } from "react-toastify";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdatePage = () => {
const updateVolunteerData = useLoaderData()
console.log(updateVolunteerData);

const { user } = useContext(AuthContext);
// console.log(user);
const [selectedDate, setSelectedDate] = useState(null);

const handleDateChange = (date) => {
setSelectedDate(date);
};

const {_id} = updateVolunteerData

const handleUpdatePostVolunteer = (e) => {
e.preventDefault();

const form = e.target;

const name = user?.displayName ;
const email = user?.email ;
const title = form.title.value ;
const thumbnail = form.thumbnail.value ;
const category = form.category.value ;
const location = form.location.value ;
const volunteerAdded = form.volunteerAdded.value ;
const date = form.date.value ;
const description = form.description.value ;


const volunteers = {name,email,title,thumbnail,category,location,volunteerAdded,date ,description}

console.log(volunteers);



fetch(`${import.meta.env.VITE_API_URL}/managePost/${_id}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(volunteers),
})
  .then((res) => res.json())
  .then((data) => {
    if (data?.modifiedCount > 0) {
      form.reset();
      toast.success("Update Successfully");
    }
  });
};






    return (
        <div className="bg-[#dd4a7be9] bg-fixed lg:p-24 p-2">
        <h2 className="text-3xl font-extrabold">User parsonal info</h2>
  
        <div>
          <h2 className="text-center my-20 font-bold">Add Volunteer Post</h2>
        </div>
  
        <form onSubmit={handleUpdatePostVolunteer}>
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
                  defaultValue={updateVolunteerData.title}
                 
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
                  defaultValue={updateVolunteerData.thumbnail}
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
             
                <select name="category"
              
                className="select select-bordered w-full">
                  <option  value="">Select Category</option>
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
                  defaultValue={updateVolunteerData.location}
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
  className="input input-bordered lg:w-[600px] w-[300px]"
  name="date"
  
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy" // Customize date format
          isClearable // Enable clear button
          showYearDropdown // Show dropdown for selecting years
          scrollableYearDropdown // Enable scrolling for year dropdown
          yearDropdownItemNumber={32} // Number of years to display in the dropdown
        />
        {selectedDate && (
          <p>You selected: {selectedDate.toLocaleDateString()}</p>
        )}
  
  
  
              </label>
            </div>
  
  
            <div className="col-span-full">
                      <label htmlFor="bio" className="text-sm">Description</label>
                      <textarea id="bio"
                       defaultValue={updateVolunteerData.description} name="description" placeholder="" className="w-full h-32 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                  </div>
  
  
  
  
  
  
  
          </div>
  
          <input type="submit" value="Update" className="btn btn-block" />
        </form>
      </div>
    );
};

export default UpdatePage;