import axios from "axios";

const api_uri = "http://localhost:8181";

export const signIn = (data) => axios.post(`${api_uri}/api/v1/auth/login`, data);
export const signUp = (data) => axios.post(`${api_uri}/api/v1/auth/register`,data);
export const booking = (data) => instance.post($`{api_uri}/api/v1/users/book, data`);
export const bookingList = () => instance.get($`{api_uri}/api/v1/users/book`);