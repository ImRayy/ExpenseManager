import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import Button from "@/components/ui/Button";
import { auth } from "@/lib/clientApp";
import React from "react";

const Signin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [authUser, authLoading, authError] = useAuthState(auth);
  console.log(authUser);

  return (
    <div>
      <Button onClick={() => signInWithGoogle()}>Login with google</Button>
    </div>
  );
};

export default Signin;
