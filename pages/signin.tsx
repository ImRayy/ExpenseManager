import { useAuthState } from "react-firebase-hooks/auth";
import SignInArea from "@/components/auth/SignInArea";
import useUser from "@/components/hooks/useUser";
import Header from "@/components/ui/Header";
import { useRouter } from "next/router";
import { auth } from "@/lib/clientApp";
import React from "react";

const Signin = () => {
  const router = useRouter();
  const { createUser } = useUser();
  const [authUser, authLoading, authError] = useAuthState(auth, {
    onUserChanged: async (user) => {
      if (!user) return;
      createUser(user);
    },
  });

  if (authError) {
    return (
      <div>
        <p>Error. {authError.message}</p>
      </div>
    );
  }

  if (authLoading || authUser) {
    authUser && router.push("/dashboard");
    return <div>Loading ...</div>;
  }

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
