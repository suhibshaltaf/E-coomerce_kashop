import React, { useEffect, useTransition,  } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import  './i18next.js'
import { useTranslation } from 'react-i18next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.js'
import getThemo from './theme.js'
import useThemeStore from './store/useThemeStore.js'

export default function App() {
  const {i18n}=useTranslation();
  useEffect( ()=>{
    const dir = i18n.language === "ar" ?"rtl" :"ltr";
    document.documentElement.dir=dir;
},
[i18n.lang]
)
const mode =useThemeStore((state)=>state.mode);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getThemo(mode)}><CssBaseline />
      
        <RouterProvider router={router} />

      </ThemeProvider>
    </QueryClientProvider>
  )
}
