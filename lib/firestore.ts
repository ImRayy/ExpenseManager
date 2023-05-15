import { doc, setDoc } from "firebase/firestore";
import { accountTypes } from "@/types/interface";
import { db } from "./clientApp";

interface updateAccountDetailsProps {
  data: string;
}

const updateAccountDetails = (
  userUid: string,
  type: "income" | "expense",
  accountUid: string,
  accDetailsUid: string,
  accDetails: updateAccountDetailsProps
) => {
  const accountRef = doc(
    db,
    "users",
    userUid,
    "accounts",
    accountUid,
    type,
    accDetailsUid
  );
  setDoc(accountRef, accDetails, { merge: true });
};

const updateAccount = (
  userId: string,
  accountId: string,
  account: accountTypes
) => {
  const accountRef = doc(db, "users", userId, "accounts", accountId);
  setDoc(accountRef, account, { merge: true });
};

export { updateAccountDetails, updateAccount };
