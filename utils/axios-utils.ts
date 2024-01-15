import axios from "axios";

const client = axios.create({
  baseURL: "https://blackdiamoundevents-api-production.up.railway.app/api/v1/",
});

export const request = ({ clerkId, ...options }: any) => {
  if (clerkId) {
    // Set the Authorization header with the JWT token
    client.defaults.headers.common.Authorization = `Bearer ${clerkId}`;
  }

  client.defaults.withCredentials = true;

  return client(options);
};
