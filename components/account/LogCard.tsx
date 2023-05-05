import { Download, ShoppingBag, DollarSign } from "lucide-react";
import Button from "../ui/Button";
import React from "react";
const LogCard = () => {
  return (
    <div className="w-full  space-y-4 rounded-xl bg-slate-100 p-4 text-black">
      <section className="flex gap-3">
        <Button size="sm" variant="solid_violet">
          <ShoppingBag size={16} />
          Shopping
        </Button>
        <Button size="sm">
          <DollarSign size={16} />
          Cash
        </Button>
      </section>
      <section className="flex items-center gap-4">
        <Button
          size="equal"
          className="bg-gradient-to-r from-green-500 to-lime-400"
        >
          <Download />
        </Button>
        <span className="text-xl font-bold">19,000.00 INR</span>
      </section>
    </div>
  );
};

export default LogCard;
