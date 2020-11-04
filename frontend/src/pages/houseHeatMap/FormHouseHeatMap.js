import React from 'react';
import validate from './validateInfo';
import useForm from '../../actions/useForm';
import './Form.css';

const FormHouseHeatMap = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>House form</h1>
        <div className="form-inputs">
          <label htmlFor="zipCode" className="form-label">
            Zip-code
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              data-cy="zipCode"
              className="form-input"
              placeholder="Enter your zipCode"
              value={values.zipCode}
              onChange={handleChange}
            />
          </label>
          {errors.zipCode && <p>{errors.zipCode}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="number" className="form-label">
            House number
            <input
              id="number"
              type="number"
              name="number"
              data-cy="number"
              className="form-input"
              placeholder="Enter with house's number"
              value={values.number}
              onChange={handleChange}
            />
          </label>
          {errors.number && <p>{errors.number}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="latitude" className="form-label">
            Latitude
            <input
              id="latitude"
              type="number"
              step="any"
              name="latitude"
              data-cy="latitude"
              className="form-input"
              placeholder="Enter with latitude"
              value={values.latitude}
              onChange={handleChange}
            />
          </label>
          {errors.latitude && <p>{errors.latitude}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="longitude" className="form-label">
            Longitude
            <input
              id="longitude"
              type="number"
              step="any"
              name="longitude"
              data-cy="longitude"
              className="form-input"
              placeholder="Enter with longitude"
              value={values.longitude}
              onChange={handleChange}
            />
          </label>
          {errors.longitude && <p>{errors.longitude}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="residentNumber" className="form-label">
            Number of resident in home
            <input
              id="residentNumber"
              type="number"
              name="residentNumber"
              data-cy="residentNumber"
              className="form-input"
              placeholder="Enter with resident number"
              value={values.residentNumber}
              onChange={handleChange}
            />
          </label>
          {errors.residentNumber && <p>{errors.residentNumber}</p>}
        </div>
        <button data-cy="save" className="form-input-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default FormHouseHeatMap;
