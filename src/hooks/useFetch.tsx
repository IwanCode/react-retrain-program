import { useEffect, useState } from 'react';
import { api } from '../services';

interface useFetchInterface {
  loading: boolean;
  data: any;
}

function useFetch(url: string) {
  const [state, setState] = useState<useFetchInterface>({
    loading: true,
    data: null,
  });

  useEffect(() => {
    api.get(url).then((data: any) => {
      setState({ data, loading: false });
    });
  }, [url]);

  return { ...state };
}

export default useFetch;
