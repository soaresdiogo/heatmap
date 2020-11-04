import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import './Form.css';
import FormHouseHeatMap from './FormHouseHeatMap';
import 'react-toastify/dist/ReactToastify.css';
import MapComponent from '../../components/Map/MapComponent';

import { houseService } from '../../services/houseService';

toast.configure();

const Form = () => {
  const [houses, setHouses] = useState([]);

  const fetchHouse = () => {
    houseService.findAll().then((values) => {
      values.data.map((house) => {
        return setHouses((prevState) => [
          ...prevState,
          {
            lat: house.latitude,
            lng: house.longitude,
            weight: house.residentNumber,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    fetchHouse();
  }, []);

  function submitForm() {
    fetchHouse();
  }

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <MapComponent data={houses} />
        </div>
        <FormHouseHeatMap submitForm={() => submitForm} />
      </div>
    </>
  );
};

export default Form;
