import axios from "axios";

const token = localStorage.getItem('accessToken');
console.log("token");

console.log(token);
const authAxiosinstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
        "Accept-Language": "en",
        "Authorization": `Bearer ${token}`
    }
    
});
export default authAxiosinstance; 