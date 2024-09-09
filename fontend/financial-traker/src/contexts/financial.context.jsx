import { createContext, useContext, useEffect, useState } from "react";
import FinancialServices from "../Services/financial.service";
import { useUser } from "@clerk/nextjs";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();
  const fetchRecords = async () => {
    if (!user) return;
    try {
      const response = await FinancialServices.getAllFinancialRecordsByUserId(
        user.id
      );
      if (response.status === 200) {
        setRecords(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecords();
  }, [user]);

 const AddRecord = async (record) => {
   try {
     const response = await FinancialServices.createFinancialRecord(record); // Corrected method name
     if (response.status === 200) {
       setRecords((prev) => [...prev, response.data]); // append new record to previous records
     }
   } catch (error) {
     console.log(error);
   }
 };

  const updateRecord = async (id, newRecord) => {
    try {
      const response = await FinancialServices.updateFinancialRecord(
        id,
        newRecord
      );
      if (response.status === 200) {
        (prev) =>
          prev.map((record) => {
            if (record.id === id) {
              return newRecord;
            } else {
              return record;
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (id) => {
    try {
      const response = await FinancialServices.deleteFinancialRecord(id);
      if (response.status === 200) {
        setRecords((prev) => prev.filter((record) => record.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FinancialRecordContext.Provider
      value={{ records, AddRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};

export const useFinancialRecords = () => useContext(FinancialRecordContext);
