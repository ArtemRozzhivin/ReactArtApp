import React, { useEffect, useState } from 'react';
import Header from '../componets/Header/Header';
import { Outlet } from 'react-router-dom';
import Burger from '../ui/Burger';
import Footer from '../componets/Footer/Footer';

const Main = ({ userName, setUserName }) => {
  const body = document.querySelector('body');
  const [visibleBurger, setVisibleBurger] = useState(false);

  // якщо увімкнутий бургер вимкнути скрол
  useEffect(() => {
    if (visibleBurger && body) {
      body.style.overflow = 'hidden';
    } else {
      if (body) body.style.overflow = 'auto';
    }
  }, [visibleBurger]);

  const onClickVisibleBurger = (visible) => {
    setVisibleBurger(visible);
  };

  return (
    <>
      <Header
        onClickVisibleBurger={onClickVisibleBurger}
        userName={userName}
        setUserName={setUserName}
      />

      <div className='max-w-container m-auto  justify-center bg-light flex-auto h-full flex flex-col gap-5 md'>
        <Outlet />
        <Burger
          userName={userName}
          setUserName={setUserName}
          isVisible={visibleBurger}
          onClickBurger={onClickVisibleBurger}
        />
      </div>

      <Footer />
    </>
  );
};

export default Main;
