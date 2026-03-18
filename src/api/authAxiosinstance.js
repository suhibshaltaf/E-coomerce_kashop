import axios from "axios";
import i18n from "../i18next.js";

const token = localStorage.getItem('accessToken');
console.log("token");

console.log(token);
const authAxiosinstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
    headers: {
        "Authorization": `Bearer ${token}`
    }
    
});

authAxiosinstance.interceptors.request.use( (config)=>{
config.headers["Accept-Language"]=i18n.language
return config;
})
export default authAxiosinstance; 