import { doc, setDoc } from "firebase/firestore";
import { accountTypes } from "@/types/interface";
import { dateTime } from "./helpers";
import { db } from "./clientApp";

interface updateAccountDetailsProps {
  data: string[];
}

const updateAccountDetails = (
  type: "income" | "expense",
  accountId: string,
  uid: string,
  accDetails: updateAccountDetailsProps
) => {
  const accountRef = doc(
    db,
    "users",
    "6f664b96-b3b5-4410-9f19-2017c24fe234",
    "accounts",
    accountId,
    type,
    dateTime({ time: false })
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
