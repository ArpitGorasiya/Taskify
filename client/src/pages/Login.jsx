// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { Button, Loading, Textbox } from "../components";
// import { useLoginMutation } from "../redux/slices/api/authApiSlice";
// import { setCredentials } from "../redux/slices/authSlice";
// import { useEffect } from "react";

// const Login = () => {
//   const { user } = useSelector((state) => state.auth);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [login, { isLoading }] = useLoginMutation();

//   const handleLogin = async (data) => {
//     try {
//       const res = await login(data).unwrap();

//       dispatch(setCredentials(res));
//       navigate("/");
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   useEffect(() => {
//     user && navigate("/dashboard");
//   }, [user]);

//   return (
//     <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6] dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#302943] via-slate-900 to-black'>
//       <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
//         <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
//           <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
//             <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base dark:border-gray-700 dark:text-blue-400 border-gray-300 text-gray-600'>
//               Manage all your task in one place!
//             </span>
//             <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center dark:text-gray-400 text-blue-700'>
//               <span>Cloud-based</span>
//               <span>Task Manager</span>
//             </p>

//             <div className='cell'>
//               <div className='circle rotate-in-up-left'></div>
//             </div>
//           </div>
//         </div>

//         <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
//           <form
//             onSubmit={handleSubmit(handleLogin)}
//             className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white dark:bg-slate-900 px-10 pt-14 pb-14'
//           >
//             <div>
//               <p className='text-blue-600 text-3xl font-bold text-center'>
//                 Welcome back!
//               </p>
//               <p className='text-center text-base text-gray-700 dark:text-gray-500'>
//                 Keep all your credetials safe!
//               </p>
//             </div>
//             <div className='flex flex-col gap-y-5'>
//               <Textbox
//                 placeholder='you@example.com'
//                 type='email'
//                 name='email'
//                 label='Email Address'
//                 className='w-full rounded-full'
//                 register={register("email", {
//                   required: "Email Address is required!",
//                 })}
//                 error={errors.email ? errors.email.message : ""}
//               />
//               <Textbox
//                 placeholder='password'
//                 type='password'
//                 name='password'
//                 label='Password'
//                 className='w-full rounded-full'
//                 register={register("password", {
//                   required: "Password is required!",
//                 })}
//                 error={errors.password ? errors.password?.message : ""}
//               />
//               <span className='text-sm text-gray-600 hover:underline cursor-pointer'>
//                 Forget Password?
//               </span>
//             </div>
//             {isLoading ? (
//               <Loading />
//             ) : (
//               <Button
//                 type='submit'
//                 label='Log in'
//                 className='w-full h-10 bg-blue-700 text-white rounded-full'
//               />
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button, Loading, Textbox } from "../components";
import { useLoginMutation } from "../redux/slices/api/authApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { useEffect } from "react";
import {
  Cloud,
  CheckCircle,
  Shield,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data) => {
    try {
      const res = await login(data).unwrap();

      dispatch(setCredentials(res));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Based",
      description: "Access your tasks from anywhere, anytime",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Efficient",
      description: "Lightning-fast performance for productivity",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics",
      description: "Track progress with detailed insights",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Task Management",
      description: "Organize and prioritize your work efficiently",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Streamline your workflow today!
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Smart Task
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">
                  Management
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Transform the way you work with our intelligent task management
                platform. Boost productivity, streamline workflows, and achieve
                your goals faster than ever before.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Login Form */}
          <div className="w-full lg:w-auto lg:min-w-[400px]">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  Welcome back!
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Sign in to access your workspace
                </p>
              </div>

              <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                <Textbox
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                  label="Email Address"
                  className="w-full"
                  register={register("email", {
                    required: "Email Address is required!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={errors.email ? String(errors.email.message) : ""}
                />

                <Textbox
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  label="Password"
                  className="w-full"
                  register={register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  error={
                    errors.password ? String(errors.password?.message) : ""
                  }
                />

                {isLoading ? (
                  <div className="flex justify-center py-4">
                    <Loading />
                  </div>
                ) : (
                  <Button
                    type="submit"
                    label="Sign In"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-lg shadow-lg focus:ring-blue-500"
                  />
                )}

                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Secure login • Protected workspace
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce"></div>
      <div className="fixed bottom-20 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed top-1/2 left-5 w-12 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-ping"></div>
    </div>
  );
};

export default Login;
