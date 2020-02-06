import { createContext, useContext } from 'react';

const HomeContext = createContext(null);
const useHomeContext = () => useContext(HomeContext);

export { useHomeContext };

export default HomeContext;
