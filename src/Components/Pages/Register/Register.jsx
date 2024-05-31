
import loginImage from "../../../assets/Data_security_05-removebg-preview.png";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";



const Register = () => {


  const [showPass, setShowPass] = useState(false);

  const { createUsers ,updateUserProfile} = useContext(AuthContext)
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();
  const location = useLocation();


  const onSubmit = (userData) => {
      const { email, password,fullName,photoURL } = userData

      createUsers(email, password)
          .then(result => {
              // console.log(result.user)
              updateUserProfile(fullName, photoURL);
              if (result.user) {
                navigate(location?.state ? location.state : '/login')
                toast.success("register successfully")
              }

          })
          .catch(error => {
              console.error(error);
          })
  }




  return (
  <div>

<Helmet>
        <title>volunteer Register</title>
      </Helmet>
      <div className="hero  min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-32">
        <div className="text-center lg:text-left">
          <img src={loginImage} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="relative sm:max-w-sm w-[800px] h-[700px] ">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-300 shadow-md h-[700px]">
              <label className="block  text-sm text-gray-700 text-center font-semibold">
                <h1 className="text-5xl font-bold">Register now!</h1>
              </label>

              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="space-y-6 p-8"
              >
                <div className="space-y-2 text-sm relative">
                  <label htmlFor="username" className="block  text-indigo-600">
                    YourName
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring
"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <label htmlFor="email" className="block  text-indigo-600">
                    Your Email
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring
"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <label htmlFor="photoURL" className="block  text-indigo-600">
                    photoURL
                  </label>
                  <input
                    type="url"
                    placeholder="photoURL"
                    className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                    {...register("photoURL")}
                  />
                  {errors.photoURL && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>

                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>

                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: true,

                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                        message:
                          "Password must contain at least one uppercase and one lowercase letter",
                      },
                    })}
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute text-xl top-12 right-4"
                  >
                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>

                  {errors.password && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>

                <div className="text-center">
                  <input
                    className="btn btn-block bg-orange-400 text-black"
                    type="submit"
                  />
                </div>
              </form>
              <h2 className="text-center">
                 Allready have  Account 
                  <Link to="/login">
                    <span className="text-blue-500 font-bold"> Login</span>
                  </Link>
                </h2>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
