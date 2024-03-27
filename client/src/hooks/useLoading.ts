import { useState } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoading = (status:boolean) => {
    setIsLoading(status);
  };

  return {
    isLoading,
    setLoading,
  };
};

export default useLoading;
