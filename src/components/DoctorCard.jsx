import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/doctor/${doctor.id}`)}
      className="max-w-[300px] cursor-pointer rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 hover:shadow-lg "
    >
      <img className="w-full h-40 object-cover" src={doctor.image} alt={doctor.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Specialty:</span> {doctor.specialty}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Experience:</span> {doctor.experience}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
