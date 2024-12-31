import { createContext } from "react";

export const doctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  return <doctorContext.Provider value=''>{children}</doctorContext.Provider>;
};
