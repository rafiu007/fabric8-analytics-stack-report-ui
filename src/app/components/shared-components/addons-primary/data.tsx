import React, { useState, useContext } from 'react';
import Context from '../../../store/context';
import SelectableDataList from './datalist';
import 'rxjs/add/operator/map';

const Data = () => {
  const data = useContext(Context);
  const str = JSON.stringify(data, null, 4);
  console.log(str);
  return (
    <div>
      {data.globalState.APIData.map((apiData: any) => (
        <SelectableDataList
          name={apiData.recommendation.companion.name}
          score={apiData.recommendation.companion.coocurrence_probablity}
        />
      ))}
    </div>
  );
};

export default Data;
