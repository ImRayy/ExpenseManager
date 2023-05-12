import { DocumentData } from "firebase/firestore";

const ammountCalcHandler = (data: DocumentData[]) => {
  let totalIncome = 0;
  if (data) {
    for (let i = 0; i < (data?.length ?? 0); i++) {
      totalIncome += Number(data[i]?.amount);
    }
  }
  return totalIncome;
};

interface dateTimeProps {
  time: boolean;
}
const dateTime = ({ time }: dateTimeProps) => {
  const date = new Date();
  let dateTime = "";
  if (time) {
    dateTime = date.toISOString().split(":").splice(0, 2).join(":");
  } else {
    dateTime = date
      .toISOString()
      .split(":")
      .splice(0, 2)
      .join(":")
      .split("T")[0];
  }
  return dateTime;
};

export { ammountCalcHandler, dateTime };
