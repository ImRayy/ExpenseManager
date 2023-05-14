import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { auth } from "@/lib/clientApp";
import Google from "../icons/Google";
import Github from "../icons/Github";
import Button from "../ui/Button";
import React from "react";

const ThirdPartyProviders = () => {
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const buttonClass = "h-16 w-full shadow-md shadow-black bg-zinc-800";
  return (
    <div className="p-4">
      <span className="mb-6 block text-gray-400">
        Login with one of the following options:
      </span>
      <div className="flex gap-4">
        <Button
          className={`${buttonClass}`}
          rounded="lg"
          onClick={() => signInWithGoogle()}
        >
          <Google className="h-8 w-8" />
        </Button>
        <Button
          className={`${buttonClass}`}
          rounded="lg"
          onClick={() => signInWithGithub()}
        >
          <Github className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default ThirdPartyProviders;
