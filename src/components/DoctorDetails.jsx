import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const [doctor, setDoctor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`http://localhost:5000/doctors`);
        let data = await response.json();
        data = data.find(doctor => doctor.id === parseInt(id));
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };
    fetchDoctor();  
  }, [id]);
  

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={doctor.image} alt={doctor.name} />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{doctor.name}</h2>
          <p className="text-gray-600 text-sm mt-2">
            Specialty: <span className="font-medium">{doctor.specialty}</span>
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Experience: <span className="font-medium">{doctor.experience}</span>
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
