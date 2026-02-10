import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../../validation/RegisterSchema.js';
import shoppingImg from '../../../assets/shopping.png';
import Googleicon from '../../../assets/Icon-Google.svg';
import { Link as RouterLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
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
      console.log(response);
    } catch (error) {
      console.log(error);
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
        alignItems="center"
        justifyContent="center"
      >
       <Box
  width="70%"
  component="form"
  display="flex"
  flexDirection="column"
  gap={2} 
  onSubmit={handleSubmit(registerform)}
>
          <Typography variant="h4" >
            Create an account
          </Typography>

          <Typography variant="body2" color="text.secondary" >
            Enter your details below
          </Typography>

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
            fullWidth
            type="submit"
            style={{ backgroundColor: "#e04343" }}
          >
            Create Account
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
