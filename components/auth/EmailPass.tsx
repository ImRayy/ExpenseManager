import Button from "../ui/Button";
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
      <div className="fixed bottom-0 left-0 w-full p-4 ">
        <Button
          variant="gradient_blue"
          rounded="lg"
          className="w-full shadow-md shadow-indigo-900"
        >
          Create Account
        </Button>
        <div className="mt-4 text-center font-medium text-gray-400">
          Already have an account?
          <span className="text-blue-400 underline"> Sign-In</span>
        </div>
      </div>
    </div>
  );
};

export default EmailPass;
