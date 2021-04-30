import axios from 'axios';
import React, { useContext, useEffect } from 'react';

import { stageApiKey, stageApiUrl, localDevURL } from './constants';
import { Logger } from './logger';

function GetStackDetails(
  globalDispatch: any,
  requestId = 'ed16d5db91d64e8d8d0ea6d1ba6b727e',
) {
  // @ts-ignore
  useEffect(() => {
    const url = `${stageApiUrl}/api/v2/stack-analyses/${requestId}?user_key=${stageApiKey}`;
    const config = {
      headers: {
        UUID: '2527bcb9-9db1-4c8f-b304-c3b232ebd22f',
      },
    };
    const devUrl = localDevURL;
    axios
      .get(devUrl)
      .then((res: { data: any }) => {
        globalDispatch({ type: 'APIData', data: res.data });
        console.log(res.data);
        console.log('heeuyyyyybuddy');
      })
      .catch((err) => {
        Logger.log(err);
      });
  }, []);
}

export { GetStackDetails };
