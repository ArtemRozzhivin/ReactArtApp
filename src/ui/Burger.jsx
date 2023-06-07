import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import routes from '../routes/routes';
import { Divider, MenuItem, OutlinedInput, Select } from '@mui/material';
import { useAuth } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';

const Burger = ({ isVisible, onClickBurger }) => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const [error, setError] = useState(null);
  const [select, setSelect] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setError(toast.success('Goodbye!'));
    } catch (error) {
      setError(toast.error('An error has occurred!'));
    }
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const [age, setAge] = React.useState('');

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: '0' }}
            exit={{ x: '-100vw' }}
            transition={{ duration: 0.5 }}
            className='fixed top-0 left-0 bg-white w-full h-full z-30'>
            <div className='flex items-center justify-between p-2 w-full'>
              <div className='flex items-center gap-2'>
                <img className='w-20 bg-white' src={logo} alt='img' />
                <h1 className='text-2xl text-app'>Art App</h1>
              </div>
              <Button variant='text' onClick={() => onClickBurger(false)} small>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path strokeLinecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </Button>
            </div>

            <div className='flex mt-32 justify-center items-center'>
              <ul className='flex flex-col gap-5 h-full text-center items-center justify-center'>
                {routes.map((item) => (
                  <li key={item.name}>
                    <Link onClick={() => onClickBurger(false)} to={item.route}>
                      <Divider />
                      <Button variant='text'>{item.name}</Button>
                    </Link>
                  </li>
                ))}
                <div className='flex items-center gap-2'>
                  <Select value={20} label='user' input={<OutlinedInput />} onChange={handleChange}>
                    <MenuItem
                      value={20}
                      children={
                        <div>
                          {user === null ? (
                            'Loading...'
                          ) : (
                            <div className='flex items-center gap-1 text-sm'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='#407068'
                                class='w-6 h-6'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                                />
                              </svg>
                              {user.displayName || user.email}
                            </div>
                          )}
                        </div>
                      }
                    />
                    <MenuItem
                      value={10}
                      onClick={handleLogout}
                      children={
                        <div className='flex items-center gap-1 text-sm'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='#407068'
                            class='w-6 h-6'>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                          LogOut
                        </div>
                      }
                    />
                  </Select>
                </div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Burger;
