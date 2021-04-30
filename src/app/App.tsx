import React, { useContext, useEffect } from 'react';
import './App.scss';
import '@patternfly/react-core/dist/styles/base.css';
import { GetStackDetails } from 'src/app/utils/apiCalls';
import AppLayout from './components/main-components/AppLayout/AppLayout';
import SummaryCard from './components/main-components/Summary/Summary';
import OverviewCard from './components/main-components/Overview/overview';
import Tableview from './components/main-components/Table/Table';
import GlobalStateProvider from './store/GlobalStateProvider';
import Context from './store/context';

function App() {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);
  GetStackDetails(globalDispatch);
  return (
    <GlobalStateProvider>
      <AppLayout
        Summary={<SummaryCard />}
        Overview={<OverviewCard />}
        Table={<Tableview />}
      />
    </GlobalStateProvider>
  );
}

export default App;
