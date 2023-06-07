import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../ui/Button';
import Input from '../ui/Input';
import background from '../assets/images.jpg';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      toast.success('Successfully logged in! ');
      navigate('/info');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setError(toast.error('Invalid e-mail '));
      } else if (error.code === 'auth/weak-password') {
        setError(toast.error('Password must be longer than 6 characters '));
      } else if (error.code === 'auth/email-already-in-use') {
        setError(toast.error('This e-mail already exists '));
      } else {
        setError(toast.error('An error has occurred!'));
      }
    }
  };

  return (
    <>
      <img
        className='absolute -z-10 brightness-75 object-cover object-center top-0 left-0 h-screen w-screen'
        src={background}
        alt='img'
      />

      <div className='w-screen h-screen flex justify-center items-center max-w-xs m-auto'>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 border border-app'>
          <h2 className='text-center text-app text-2xl mb-4'>Register</h2>
          <div className='mb-4'>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='example@gmail.com'
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          <div className='mb-6'>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='password...'
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          <div className='flex flex-col items-center'>
            <Button type='submit'>Signup</Button>

            <Link
              to='/login'
              className='inline-block align-baseline font-bold text-sm text-app my-4'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
