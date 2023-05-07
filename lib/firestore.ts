import { accountDetailTypes, accountTypes } from "@/types/interface";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./clientApp";

const updateAccountDetails = (
  type: "income" | "expense",
  accountId: string,
  uid: string,
  accDetails: accountDetailTypes
) => {
  const accountRef = doc(
    db,
    "users",
    "0.653159755779475",
    "accounts",
    accountId,
    type,
    uid
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
