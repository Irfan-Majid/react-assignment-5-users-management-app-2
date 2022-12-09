import {useState,useEffect} from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    fetchData(url)
  }, [])
  
  const fetchData = async (url) => {
    try{
      const response = await fetch(url);
      const datae = await response.json();
      setData(datae);
      setIsLoading(false);
    }catch(err){
      setError(err);
      setIsLoading(false);
    }
  }
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  return {
    data,
    isLoading,
    error
  }
};

export default useFetch;
