import React, { useState, useContext } from 'react';
import Context from '../../../store/context';

const Data = () => {
  const data = useContext(Context);
  const str = JSON.stringify(data, null, 4);
  console.log(str);
  console.log('heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
  return <div>Rafiu</div>;
};

export default Data;
