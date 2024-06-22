import {useState,useEffect} from 'react'; 
import  fetchDataFrmApi from '../../utils/tmdbService';

function useFetch(url) {
  const[loading,setLoading] =useState(false);
  const[error,setError] = useState(null);
  const[data,setData] = useState(null);

  useEffect(()=>{
      setLoading("Loadding...");
      setData(null);
      fetchDataFrmApi(url)
      .then((res)=>{
        setLoading(false)
        setData(res)
      })
      .catch((err)=>{
        setLoading(false);
        setError("Something went wrong! please check the implementation");
      })
  },[url]);

 return {data,loading,error};
}

export default useFetch
