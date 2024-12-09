// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const LoginPage = () => {
//   return (
//     <div className="flex flex-col items-center py-10">
//       <Image 
//       src="/images/img2.png" 
//       alt="Nike" 
//       width={40} 
//       height={10}
//       className="pb-5" 
//        />
//       <h2 className="uppercase w-40 text-center font-bold pb-5">
//         YOUR ACCOUNT FOR EVERYTHING NIKE
//       </h2>
//       <form action="" className="flex flex-col w-96">
//         <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Email Address" />
//         <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Password" />
//         <div className="flex justify-between items-center py-5">
//           <div>
//             <input type="checkbox" id="remember" />
//             <label className="ml-2 pl-2 cursor-pointer text-text-secondary-gray" htmlFor="remember">
//                 Keep me signed in
//             </label>
//           </div>
//           <div>
//             <span>
//               <a href="#" className="text-[#BCBCBC]">Forgotten your password?</a>
//             </span>
//           </div>
//         </div>
//         <p className="text-text-secondary-gray text-center pb-6">By logging in, you agree to Nike's <Link className="underline" href="#">Privacy Policy</Link> and <Link className="underline" href="#">Terms of Use</Link>.</p>
//         <Button text="SIGN IN" classNames="rounded-sm py-3"/>
//         <p className="text-center"> <span className="text-text-secondary-gray">Not a Member? </span><span className="underline">Join Us.</span></p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Nike Logo */}
      <Image
        src="/images/img2.png"
        alt="Nike"
        width={40}
        height={10}
        className="pb-5"
      />
      
      {/* Title */}
      <h2 className="uppercase w-40 text-center font-bold pb-5">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>
      
      {/* Form */}
      <form className="flex flex-col w-96">
        {/* Email Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Email Address"
        />
        
        {/* Password Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="password"
          placeholder="Password"
        />
        
        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center py-5">
          <div>
            <input type="checkbox" id="remember" />
            <label
              className="ml-2 cursor-pointer text-text-secondary-gray"
              htmlFor="remember"
            >
              Keep me signed in
            </label>
          </div>
          <div>
            <a href="#" className="text-[#BCBCBC]">
              Forgotten your password?
            </a>
          </div>
        </div>
        
        {/* Terms and Conditions */}
        <p className="text-text-secondary-gray text-center pb-6">
          By logging in, you agree to Nike's{" "}
          <Link className="underline" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline" href="#">
            Terms of Use
          </Link>
          .
        </p>
        
        {/* Sign In Button */}
        <Button className="rounded-sm py-3 w-full">
          SIGN IN
        </Button>
        
        {/* Join Us */}
        <p className="text-center mt-4">
          <span className="text-text-secondary-gray">Not a Member? </span>
          <Link className="underline" href="#">
            Join Us.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
