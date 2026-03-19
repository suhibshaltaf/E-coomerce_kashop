import axios from "axios";
import i18n from "../i18next.js";
import useAuthStore from "../store/useAuthStore.js";




const authAxiosinstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',   withCredentials:true,
  
});

authAxiosinstance.interceptors.request.use( (config)=>{
  const {token} = useAuthStore.getState();

config.headers["Accept-Language"]=i18n.language;
config.headers["Authorization"]=`Bearer ${token}`;

return config;
})

authAxiosinstance.interceptors.response.use((response)=>response, async (error)=>{

  const originalRequest=error.config;

  if(error.response.status===401 && !originalRequest._retry){
    originalRequest._retry=true;
    try { 
            const refreshResponse=await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/RefreshToken',{},
              {  withCredentials:true }
              

           );
           console.log("refreshResponse");
           const NewAccessToken=refreshResponse.data.accessToken;
         useAuthStore.getState().setToken(NewAccessToken);
           originalRequest.headers.Authorization=`Bearer ${NewAccessToken}`
return authAxiosinstance(originalRequest);
    } catch (error) {return Promise.reject(error);

    }
  }

return Promise.reject(error);
}
);




export default authAxiosinstance; 