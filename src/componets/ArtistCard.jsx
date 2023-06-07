import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const PersonCard = () => {
  const { state } = useLocation();

  return (
    <div className='p-5 md:p-10 lg:p-20'>
      <div className='mb-8'>
        <Link to={-1}>
          <Button variant='outlined'>
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
        </Link>
      </div>

      <div>
        <div className='flex flex-col md:flex-row gap-5 lg:gap-10'>
          <a
            href={state.image}
            target='_blank'
            rel='noreferrer'
            className='flex-shrink-0 flex-grow-0 w-[270px] h-[320px]'>
            <img
              className='w-[270px] h-[320px] object-cover rounded-md bg-white'
              src={state.image}
              alt='img'
            />
          </a>
          <div className='flex flex-col gap-5'>
            <h2 className='text-4xl text-app'>{state.artistName}</h2>
            {state.biography ? <div>{state.biography}</div> : ''}
            <div>
              <span className='text-xl text-app'>Birthday:</span> {state.birthDayAsString}
              {state.deathDayAsString.length !== 0 ? (
                <div>
                  <span className='text-xl text-app'>Day of death:</span> {state.deathDayAsString}
                </div>
              ) : (
                ''
              )}
            </div>
            <div>
              <div>
                {state.periods.length !== 0 ? (
                  <div>
                    <div>Genres:</div>
                    {state.periods.map((item) => (
                      <span>{item.title}, </span>
                    ))}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div>
                {state.activeYearsCompletion !== null ? (
                  <div>
                    <span className='text-xl text-app'>Active years start - </span>
                    {state.activeYearsStart}
                  </div>
                ) : (
                  ''
                )}
                {state.activeYearsCompletion !== null ? (
                  <div>
                    <span className='text-xl text-app'>Active Years Completion - </span>
                    {state.activeYearsCompletion}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div>
                <span className='text-xl text-app'>Gender:</span> {state.gender}
              </div>
            </div>
            <Link
              className='w-full'
              to='pictures'
              state={{ pictures: state.arts, author: state.artistName, id: state.id }}>
              <Button fullwidth>
                <div className='flex gap-1 items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  View pictures
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
