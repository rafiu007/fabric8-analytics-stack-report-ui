import React, { useState, useContext } from 'react';
import Context from '../../../store/context';
import SelectableDataList from '../../shared-components/addons-primary/datalist';
const Data = () => {
  const data = useContext(Context);
  return (
    <div>
      {data.map((apiData: any) => (
        <SelectableDataList
          name={apiData.recommendation.companion.name}
          score={apiData.recommendation.companion.coocurrence_probablity}
        ></SelectableDataList>
      ))}
    </div>
  );
};
