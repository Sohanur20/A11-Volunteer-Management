import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "../../Shared/Features/Features";
AOS.init();

const ShowPost = () => {
  const [viewPosts, setViewPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/addVolunteer`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setViewPosts(data);
      });
  }, []);

  const handleSearch = () => {
    // Filter posts based on searchQuery
    const filteredPosts = viewPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setViewPosts(filteredPosts);
  };

  return (
    <div>
      <Helmet>
        <title>volunteer ViewPost</title>
      </Helmet>

      <div className="search-container text-center my-20 ">
       
<Features></Features>


        <input
          placeholder="Search by Post Title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2"
          type="text"
        />
        <button
          onClick={handleSearch}
      
          className="relative ml-10 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold btn-outline rounded-md shadow-2xl group"
        >
          <span className="absolute  inset-0 w-full h-full transition duration-300 ease-out  bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

         
          <span className="relative uppercase">search</span>
        </button>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {viewPosts.map((viewPost) => (
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            key={viewPost._id}
            className="card w-96 glass m-2 "
          >
            <figure>
              <img src={viewPost?.thumbnail} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{viewPost?.title}</h2>
              <p>Date / {viewPost?.date}</p>
              <p>
                {" "}
                <span className="font-semibold">No need Volunteer</span> :{" "}
                {viewPost?.volunteerAdded}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/viewPost/${viewPost?._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPost;
