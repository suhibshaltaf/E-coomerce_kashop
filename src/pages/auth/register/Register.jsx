import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../../validation/RegisterSchema.js';
import shoppingImg from '../../../assets/shopping.png';
import Googleicon from '../../../assets/Icon-Google.svg';
import { Link as RouterLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { common } from '@mui/material/colors';
import Loader from '../../../ui/Loader/Loader.jsx';

export default function Register() {

  const[serverErrors, setServerErrors] =useState({});
  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema),mode : `onBlur`
  });

  const registerform = async (values) => {
    try {
      const response = await axios.post(
        'https://knowledgeshop.runasp.net/api/auth/Account/Register',
        values
      );
     toast.success("Active registration!", {
      position: "top-right",
      autoClose: 3000,
      rtl: true,
    });
    } catch (error) {
      setServerErrors(error.response.data.errors);

    }
  };

  return (
    <Box display="flex" minHeight="100vh" py={5}>


      <Box
        flex={1}
        display={{ xs: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="center"
        bgcolor="#CBE4E8"
        padding={6}
      >
        <Box
          component="img"
          src={shoppingImg}
          alt="shoppingImg"
          width="100%"
        />
      </Box>

      <Box width={48} display={{ xs: 'none', md: 'block' }} />

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        gap={2}
      
      >  <Typography variant="h4" >
            Create an account
          </Typography>

          <Typography variant="body2" color="text.secondary" >
            Enter your details below
          </Typography>
{serverErrors.length > 0 && (
  <Box>
    {serverErrors.map((err, index) => (
      <Typography key={index} color="error" variant="body2">
        {err}
      </Typography>
    ))}
  </Box>
)}
       <Box
  width="70%"
  component="form"
  display="flex"
  flexDirection="column"
  gap={2} 
  onSubmit={handleSubmit(registerform)}
>
        
          <TextField
            {...register('userName')}
            fullWidth
            label="userName"
            variant="standard"
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />

          <TextField
            {...register('fullName')}
            fullWidth
            label="Full Name"
            variant="standard"
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />

          <TextField
            {...register('email')}
            fullWidth
            label="Email"
            variant="standard"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register('password')}
            fullWidth
            type="password"
            label="Password"
            variant="standard"
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            {...register('phoneNumber')}
            fullWidth
            label="Phone Number"
            variant="standard"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />

          <Button
            variant="contained"
            
            type="submit"
            style={{ backgroundColor: "#e04343" }}
            disabled={isSubmitting}>{isSubmitting ? <Loader size={20} color="inherit" /> : 'Create Account'}
            </Button>

          <Button
            fullWidth
           

            variant="outlined"  
color='white'          >
              <Box
          component="img"
          src={Googleicon}
          alt="register"
          width="10%"
          px={0.5}
        >
      </Box>
            Sign up with Google
          </Button>

          <Typography variant="body" align="center">
            Already have an account?<Link component={RouterLink} to="/login" color="inherit" style={{ cursor: 'pointer' }}> Log in</Link>
          </Typography>

        </Box>
      </Box>

    </Box>
  );
}
