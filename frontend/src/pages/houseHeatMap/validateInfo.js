export default function validateInfo(values) {
  const errors = {};

  if (!values.zipCode.trim()) {
    errors.zipCode = 'ZipCode is required';
  }

  if (!values.number.trim()) {
    errors.number = 'Number is required';
  }

  if (!values.latitude.trim()) {
    errors.latitude = 'Latitude is required';
  }

  if (!values.longitude.trim()) {
    errors.longitude = 'Longitude is required';
  }

  if (!values.residentNumber.trim()) {
    errors.residentNumber = 'Number of resident in home';
  }

  return errors;
}
