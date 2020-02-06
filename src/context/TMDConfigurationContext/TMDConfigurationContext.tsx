import React, { createContext, useContext } from 'react';
import { useFetch } from '../../hooks';
import { TMDConfigurationContextInterface, ConfigurationApiInterface } from '../../interfaces';

const TMDConfigurationContext = createContext(null) as any;
// const TMDConfigurationContext = createContext<ConfigurationApiInterface | null>(null);

function TMDConfigurationContextProvider({
  children,
  loadComponet: LoadComponet,
}: TMDConfigurationContextInterface) {
  const { loading, data } = useFetch('configuration');

  return (
    <TMDConfigurationContext.Provider value={data}>
      {loading ? 'Loading...' : children}
    </TMDConfigurationContext.Provider>
  );
}

const useTMDContext = () => useContext(TMDConfigurationContext);

export { useTMDContext };
export default TMDConfigurationContextProvider;
