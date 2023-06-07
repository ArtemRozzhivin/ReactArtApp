import React from 'react';
import Button from '../ui/Button';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Arts = ({ likedPaintings, setPaint }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='p-5'>
      <Button onClick={goBack} variant='outlined'>
        <div className='flex gap-1 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
          <div>Back</div>
        </div>
      </Button>
      <h2 className='text-center text-5xl mb-3'>{state.author} paintings</h2>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-2 lg:gap-2'>
        {state.pictures.map((item) => (
          <div className='flex flex-col items-center p-0 md:p-3 rounded-md' key={item.id}>
            <a
              className='hover:brightness-75 transition-all'
              href={item.image}
              target='_blank'
              rel='noreferrer'>
              <img
                className='w-full h-[250px] object-center object-cover rounded-md bg-white border-4 group-hover:border-app border-white transition-all'
                src={item.image}
                alt='img'
              />
            </a>
            <div className='w-full mt-2 flex items-center justify-between'>
              <div className='text'>{item.title}</div>
              <Button onClick={() => setPaint(item)} variant='text'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill={likedPaintings.includes(item) ? 'currentColor' : 'none'}
                  className='w-6 h-6'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Arts;
