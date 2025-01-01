import React, { useContext } from 'react';
import DoctorCard from './DoctorCard';
import { doctorContext } from '../context/DoctorContext';

const DoctorList = () => {
  const { doctorData, loading } = useContext(doctorContext);

  return loading ? (
   <p>Loading...</p>
  ) : doctorData.length === 0 ? (
    <div>
      <img
        src="https://www.jaivijaybookcentre.com/public/frontend/images/no-record.png"
        alt="Doctor not found"
        className="w-[300px] m-auto object-cover"
      />
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 mx-auto max-w-[1200px]">
      {doctorData.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
