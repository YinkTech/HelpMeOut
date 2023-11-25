import React from "react";
import logo from "./../assets/img/logo.png";
import logindivide from "./../assets/img/logindivide.png";
import logontext from "./../assets/img/logontext.png";
import google from "./../assets/img/icon/Google.svg";
import facebook from "./../assets/img/icon/Facebook.svg";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="" style={{ marginTop: "22px" }}>
        <img src={logo} alt={logo} />
      </div>

      <div className="my-5 md:my-10 w-[275px] md:w-[475px] h-[599px] flex flex-col justify-center mx-auto md:gap-[32px] gap-[20px]">
        <div
          className="flex flex-col text-center text-[14px] font-[400] text-[#434343]"
          style={{ lineHeight: "21px" }}
        >
          <h4
            className="text-[#141414] font-[700] text-[32px] "
            style={{ lineHeight: "48px" }}
          >
            Log in or Sign up
          </h4>
          <p>
            Join millions of others in sharing successful <br />
            moves on HelpMeOut.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div
            className="p-3 flex items-center justify-center"
            style={{ border: "1px solid #242424", borderRadius: "12px" }}
          >
            <img src={google} alt={google} className="mx-3" />
            <span className="font-semibold">Contine with Google</span>
          </div>
          <div
            className="p-3 flex items-center justify-center"
            style={{ border: "1px solid #242424", borderRadius: "12px" }}
          >
            <img src={facebook} alt={facebook} className="mx-3" />
            <span className="font-semibold">Contine with Facebook</span>
          </div>
        </div>

        <div className="mx-auto flex justify-center">
          <img src={logindivide} className="text-center" alt={logindivide} />
        </div>

        <div className="flex flex-col gap-[16px]">
          <div>
            <label
              htmlFor="email"
              className="block text-[14px] text-[#141414] mb-3 font-[500]"
              style={{ lineHeight: "16.42px", fontFamily: "sans-serif" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="h-[51px] w-full p-[16px] text-[#B6B3C6] font-[500] text-[16px]"
              style={{
                border: "1px solid #B6B3C6",
                borderRadius: "12px",
                lineHeight: "18.77px",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[14px] text-[#141414] mb-3 font-[500]"
              style={{ lineHeight: "16.42px", fontFamily: "sans-serif" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="h-[51px] w-full p-[16px] text-[#B6B3C6] font-[500] text-[16px]"
              style={{
                border: "1px solid #B6B3C6",
                borderRadius: "12px",
                lineHeight: "18.77px",
              }}
            />
          </div>
        </div>
        <div>
          <button
            className="w-full h-[53px] flex justify-center items-center bg-[#120B48] transition-all hover:opacity-90 text-white"
            style={{ padding: "16px, 20px, 16px, 20px", borderRadius: "8px" }}
          >
            <img src={logontext} alt={logontext} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
