"use client"
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import Main from '@/components/Main';
export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
		const storedLoadingStatus = localStorage.getItem('isLoading');
		if (storedLoadingStatus === 'true') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
    setTimeout(() => {
      setIsLoading(true);
    }, 5000); 
  }, []);
  return (
    <div>
      {/*isLoading ? (
        <Main />
      ) : (
        <Loading />
      )*/}
			<Main />
    </div>
  );
};