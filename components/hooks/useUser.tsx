import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/clientApp";
import { User } from "firebase/auth";

export const useUser = () => {
  const createUser = async (user: User) => {
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      createdAt: new Date().toISOString(),
    });
  };

  return { createUser };
};

export default useUser;
