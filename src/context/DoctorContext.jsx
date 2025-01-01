import React ,{ useState, useEffect } from 'react';
import { createContext } from 'react';

export const doctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/doctors');
        const data = await response.json();
        setDoctorData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);
  return (
    <doctorContext.Provider value={{ doctorData, loading }}>{children}</doctorContext.Provider>
  );
};
