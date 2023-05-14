import StickyButton from "../ui/StickyButton";
import Input from "../ui/Input";
import React from "react";

const EmailPass = () => {
  const inputs = [
    {
      type: "email",
    },
    {
      type: "password",
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-4">
      {inputs.map((input, index) => (
        <Input
          key={index}
          id={input.type}
          type={input.type}
          name={input.type}
          label={input.type}
          placeholder={`Enter your ${input.type}`}
          className="w-full rounded-xl border-none bg-zinc-800 py-4 shadow-md shadow-black"
        />
      ))}
      <StickyButton
        label="Create Account"
        onClick={() => alert("placeholder for now")}
        bottomContent={
          <div className="mt-4 text-center font-medium text-gray-400">
            Already have an account?
            <span className="text-blue-400 underline"> Sign-In</span>
          </div>
        }
      />
    </div>
  );
};

export default EmailPass;
