import { toast } from 'react-toastify';
import axios from 'axios';

toast.configure();

function findAll() {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      toast.error(error, { autoClose: 5000 });
    });
}

function create(house) {
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_HOST}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: house,
  };
  return axios(config)
    .then(() => {
      toast.success('successful', { autoClose: 5000 });
    })
    .catch((error) => {
      toast.error(error, { autoClose: 5000 });
    });
}

export const houseService = {
  findAll,
  create,
};
