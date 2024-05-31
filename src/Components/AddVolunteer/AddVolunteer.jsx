/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */

import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddVolunteer = () => {
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

    const volunteersModal = {
      name,
      email,
      title,
      thumbnail,
      category,
      location,
      volunteerAdded,
      date,
      description,
    };

    console.log(volunteersModal);

    
    fetch(`${import.meta.env.VITE_API_URL}/addVolunteer`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(volunteersModal),
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
        <title>volunteer Add a NeedVolunteerPost</title>
      </Helmet>

      <div className="bg-[#424f47] bg-fixed lg:p-24 p-2">
        <h2 className="text-3xl font-extrabold">Add Volunteer Post</h2>

        

        <form onSubmit={handleAddPostVolunteer}>
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
      </div>
    </div>
  );
};

export default AddVolunteer;
