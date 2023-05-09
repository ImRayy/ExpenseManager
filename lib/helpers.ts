import { DocumentData } from "firebase/firestore";

const ammountCalcHandler = (data: DocumentData[]) => {
  let totalIncome = 0;
  for (let i = 0; i < (data?.length ?? 0); i++) {
    totalIncome += Number(data[i]?.amount);
    return totalIncome;
  }
};

export { ammountCalcHandler };
