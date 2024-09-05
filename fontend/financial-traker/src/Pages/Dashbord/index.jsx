import React from "react";
import { useUser } from "@clerk/nextjs";
import { useFinancialRecords } from "../../contexts/financial.context";
import AddRecrodform from "./AddRecrodform";
import FinancialRecordTable from "./FinancialRecordTable";

const dashbord = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="text-center text-3xl md:text-4xl md:leading-snug font-bold my-2">
        Welcome {user?.firstName} ! Here are you finance:
      </div>
      <AddRecrodform />
      <div>Total Monthly: 1000฿</div>
      <FinancialRecordTable />
    </div>
  );
};

export default dashbord;
