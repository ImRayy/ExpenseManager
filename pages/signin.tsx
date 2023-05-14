import SignInArea from "@/components/auth/SignInArea";
import Header from "@/components/ui/Header";
import React from "react";

const Signin = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-zinc-900">
      <Header
        isFixed={true}
        showPathName={true}
        customButtonClass="rounded-xl bg-zinc-800 text-white border-none shadow-md shadow-black hover:bg-zinc-700"
      />
      <div className="fixed bottom-36 w-full">
        <SignInArea />
      </div>
    </div>
  );
};

export default Signin;
