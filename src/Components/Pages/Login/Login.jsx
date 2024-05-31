import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/Data_security_05-removebg-preview.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser, googleLogin} = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (userData) => {
    const { email, password } = userData;

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);

        if (result.user) {
          navigate(location?.state ? location.state : "/");
          toast.success("user login successFull");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid email or password, please Register and login");
      });
  };




  

  return (
<div>

<Helmet>
        <title>volunteer Login Now</title>
      </Helmet>
<div className="hero  min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-32">
        <div className="text-center lg:text-left">
          <img src={loginImage} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="relative sm:max-w-sm w-[600px] h-[600px] ">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-300 shadow-md h-[600px]">
              <label className="block  text-sm text-gray-700 text-center font-semibold">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </label>

              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="space-y-6 p-8"
              >
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

              <div>
                <h2 className="text-center">
                  You dont have Account
                  <Link to="/register">
                    <span className="text-blue-500 font-bold">Register</span>
                  </Link>
                </h2>
                {/* sign with google */}
                <button   onClick={() => { googleLogin()}}
                  type="button"
                  className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
                >
                  <p  className="flex items-center ">
                    
                    <span className="text-4xl">
                      <FcGoogle />
                    </span>
                    Continue with Google
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>


   
  );
};

export default Login;
