import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const Bootstrap =()=> {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default Bootstrap;
