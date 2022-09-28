import React, { useEffect, useState } from 'react';

import DialogsWrapper from 'layout/DialogsWrapper';

// redux
import { Provider } from 'react-redux';

// store

import './App.scss';
import 'styles/global.scss';
import 'styles/typography.scss';
import Routes from './routes';
import { store } from './redux/store';

const App = () => {
  const [viewport, setViewport] = useState('desktop'); // mobile, ipad, desktop

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setViewport('desktop');
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setViewport('ipad');
    } else {
      setViewport('mobile');
    }
  }, []);

  useEffect(() => {
    const resizeFunction = () => {
      if (window.innerWidth >= 1024) {
        setViewport('desktop');
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setViewport('ipad');
      } else {
        setViewport('mobile');
      }
    };
    window.addEventListener('resize', resizeFunction);
  }, []);

  // useEffect(() => {
  //   console.log('viewport=====', viewport);
  //   console.log('store ', store);
  // }, [viewport]);

  return (
    <div className='App'>
      <Provider store={store}>
        <DialogsWrapper>
          <Routes viewport={viewport} />
        </DialogsWrapper>
      </Provider>
    </div>
  );
};

export default App;
