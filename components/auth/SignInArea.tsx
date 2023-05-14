import ThirdPartyProviders from "./ThirdPartyProviders";
import EmailPass from "./EmailPass";
import React from "react";

const SignInArea = () => {
  return (
    <div className="flex flex-col justify-end  text-white">
      <ThirdPartyProviders />
      <EmailPass />
    </div>
  );
};

export default SignInArea;
