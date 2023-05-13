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
  hideDay?: boolean;
}
const dateTime = ({ time, hideDay }: dateTimeProps) => {
  const day = hideDay ? "hide" : "show";
  const currentDate = new Date().toISOString();

  let dateTime = "";
  if (time) {
    dateTime = currentDate.split(":").splice(0, 2).join(":");
  } else {
    if (day === "show") {
      dateTime = currentDate.split("T")[0];
    } else {
      dateTime = currentDate.split("-").splice(0, 2).join("-");
    }
  }
  return dateTime;
};

export { ammountCalcHandler, dateTime };
