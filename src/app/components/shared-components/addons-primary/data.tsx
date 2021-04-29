import React, { useState, useContext } from 'react';
import Context from '../../../store/context';

const Data = () => {
  const data = useContext(Context);
  console.log(data);
  console.log('heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
  return <div>Rafiu</div>;
};

export default Data;
