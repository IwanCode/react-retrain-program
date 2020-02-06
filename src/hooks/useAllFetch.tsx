import { useEffect, useState } from 'react';
import { api } from '../services';

function useAllFetch(urls: string[]) {
  const [state, setState] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    api.getAll(urls).then((data: any) => {
        setState({ data, loading: false });
    });
  }, [...urls]);

  return { ...state };
}

export default useAllFetch;
