/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const VolunteerNeedsPost = () => {
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/addVolunteer`)
      .then((res) => res.json())
      .then((data) => {
        setVolunteer(data);
      });
  }, []);

  return (
    <div className="text-center">
     

      {/* grid map */}

<h1 className="font-bold text-5xl my-32">Volunteer Needs Now</h1>


      <div   className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {volunteer.slice(0, 6).map((volunt) => (
          <section
            key={volunt._id}
            className="dark:bg-gray-100 dark:text-gray-800"
          >
            {/* card */}
            <div 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            
            >
              <div
                rel="noopener noreferrer"
                className="max-w-sm mx-auto h-[400px] border-2 rounded-lg shadow-xl group hover:no-underline focus:no-underline dark:bg-gray-50 "
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={volunt.thumbnail}
                />
                <div className="p-6 space-y-2">
                  <p># {volunt.category} </p>

                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {volunt.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    Date : {volunt.date}
                  </span>
                </div>

                <div className=" mr-5">
                  <Link to={`/viewPost/${volunt?._id}`}>
                    <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-white">
                          View Details
                        </span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Link to="/viewPost">
        <button className="relative m-10 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">SEE MORE</span>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default VolunteerNeedsPost;
