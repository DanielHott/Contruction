import axios from 'axios';

const baseURL = 'https://work-cost-management.herokuapp.com';

const loginRelatedRequests = async (endpoint, body) => {
  const data = await axios.post((baseURL + endpoint), body);
  return data;
};

const construcctionGetRequests = async (endpoint) => {
  const data = await axios.get((baseURL + endpoint));
  return data;
};

export {
  loginRelatedRequests,
  construcctionGetRequests,
};