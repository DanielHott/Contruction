import axios from 'axios';

const baseURL = 'https://work-cost-management.herokuapp.com/';

const loginRelatedRequests = async (endpoint, body) => {
  const data = await axios.post((baseURL + endpoint), body);
  return data;
};

export {
  loginRelatedRequests,
};