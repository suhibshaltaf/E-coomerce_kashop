import { createTheme } from "@mui/material";
const getThemo = (mode)=>{
    return  createTheme({
        palette:{
            mode:mode,
        primary:{
            main :'#33333f'
        }
    },
    typography:{
        h2 : {
            fontSize:"4rem",
            fontWeight:900
        }
    }
})
}

export default getThemo