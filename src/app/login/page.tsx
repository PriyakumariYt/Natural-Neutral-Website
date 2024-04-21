
// "use client";
// import Link from "next/link";
// import React, {useEffect} from "react";
// import {useRouter} from "next/navigation";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom";
// const login = () => {
//   const router = useRouter();
//   // const navigate = useNavigate()
//   const [user, setUser] = React.useState({
//       email: "",
//       password: "",
     
//   })
//   const [buttonDisabled, setButtonDisabled] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);


//   const onLogin = async () => {
//       try {
//           setLoading(true);
//           const response = await axios.post("/api/login", user);
//           console.log("Login success", response.data);
//           toast.success("Login success");
//           alert("login succesfull")
//           // navigate('/')
          
//           router.push("/");
//       } catch (error:any) {
//           console.log("Login failed", error.message);
//           alert("login failed")
//           toast.error("Login error")
//           toast.error(error.message);
//       } finally{
//       setLoading(false);
//       }
//   }

//   useEffect(() => {
//       if(user.email.length > 0 && user.password.length > 0) {
//           setButtonDisabled(false);
//       } else{
//           setButtonDisabled(true);
//       }
//   }, [user]);
// return (
//     <div className="font-[sans-serif] text-[#333] max-w-7xl mx-auto h-screen">
//           <h1>{loading ? "Processing" : "Login"}</h1>
//     <div className="grid md:grid-cols-2 items-center gap-8 h-full">
//       <form className="max-w-lg max-md:mx-auto w-full p-6"  >
//         <div className="mb-10">
//           <h3 className="text-4xl font-extrabold">Sign in</h3>
//           <p className="text-sm mt-6">
//             Immerse yourself in a hassle-free login journey with our intuitively
//             designed login form. Effortlessly access your account.
//           </p>
//         </div>
//         <div>
//           <label className="text-[15px] mb-3 block">Email</label>
//           <div className="relative flex items-center">
//             <input
//               id="email"
//               type="text"
//               value={user.email}
//               onChange={(e) => setUser({...user, email: e.target.value})}
              
//               className="w-full text-sm bg-gray-100 px-4 py-4 rounded-md outline-blue-600"
//               placeholder="Enter email"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#bbb"
//               stroke="#bbb"
//               className="w-[18px] h-[18px] absolute right-4"
//               viewBox="0 0 682.667 682.667"
//             >
//               <defs>
//                 <clipPath id="a" clipPathUnits="userSpaceOnUse">
//                   <path d="M0 512h512V0H0Z" data-original="#000000" />
//                 </clipPath>
//               </defs>
//               <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
//                 <path
//                   fill="none"
//                   strokeMiterlimit={10}
//                   strokeWidth={40}
//                   d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
//                   data-original="#000000"
//                 />
//                 <path
//                   d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
//                   data-original="#000000"
//                 />
//               </g>
//             </svg>
//           </div>
//         </div>
//         <div className="mt-6">
//           <label className="text-[15px] mb-3 block">Password</label>
//           <div className="relative flex items-center">
//             <input
//                id="password"
//                type="password"
//                value={user.password}
//                onChange={(e) => setUser({...user, password: e.target.value})}
//               className="w-full text-sm bg-gray-100 px-4 py-4 rounded-md outline-blue-600"
//               placeholder="Enter password"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#bbb"
//               stroke="#bbb"
//               className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
//               viewBox="0 0 128 128"
//             >
//               <path
//                 d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
//                 data-original="#000000"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 justify-between mt-4">
//           <div className="flex items-center">
         
//           </div>
//           <div className="text-sm">
//             <a
//               href="#"
//               className="text-white hover:underline"
//             >
//               Forgot your password?
//             </a>
//           </div>
//         </div>
//         <div className="mt-10">
//           <button
//           onClick={onLogin}
//            className="w-full shadow-xl py-3 px-4 text-sm font-semibold rounded text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none"
//           >
//             Log in
//           </button>
//         </div>
//         <p className="text-sm mt-10 text-center">
//           Don't have an account
//           <Link
//             href="#"
//             className="text-white font-semibold hover:underline ml-1"
//           >
//             Register here
//           </Link>
//         </p>
//       </form>
//       <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#048367] before:to-[#35b6d6] before:h-full before:w-3/4 before:right-0 before:z-0">
//         <img
//           src="https://images.pexels.com/photos/2044070/pexels-photo-2044070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative"
//           alt="Dining Experience"
//         />
//       </div>
//     </div>
//   </div>
  
//   )
// }

// export default login

// 2nd
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; 
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/login", user);
            console.log("Login success", response.data);
            toast.success("Login successful");
            router.push("/");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error("Login failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Disable button if email or password is empty
        const isDisabled = !user.email || !user.password;
        setButtonDisabled(isDisabled);
    }, [user]);

    return (
        <div className="font-sans text-[#fff6f6] max-w-7xl mx-auto h-screen">
            {/* <h1>{loading ? "Processing" : "Login"}</h1> */}
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                <form className="max-w-lg max-md:mx-auto w-full p-6">
                    <div className="mb-10">
                        <h3 className="text-4xl font-extrabold">Sign in</h3>
                    </div>
                    <div>
                        <label className="text-[15px] mb-3 block">Email</label>
                        <div className="relative flex items-center">
                            <input
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                              required className="w-full text-sm bg-gray-100 text-gray-900 px-4 py-4 rounded-md outline-blue-600"
                                // required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                placeholder="Enter email"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="text-[15px] mb-3 block">Password</label>
                        <div className="relative flex items-center">
                            <input
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                required className="w-full text-sm bg-gray-100 text-gray-900 px-4 py-4 rounded-md outline-blue-600"
                                // required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            onClick={onLogin}
                            className="w-full shadow-xl py-3 px-4 text-sm font-semibold rounded text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none"
                        >
                            Log in
                        </button>
                    </div>
                </form>
                {/* Image */}
                <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#048367] before:to-[#35b6d6] before:h-full before:w-3/4 before:right-0 before:z-0">
       <img
          src="https://images.pexels.com/photos/2044070/pexels-photo-2044070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative"
          alt="Dining Experience"
        />
      </div>

            </div>
        </div>
    );
};

export default Login;



