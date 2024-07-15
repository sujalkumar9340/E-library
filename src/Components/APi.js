
 import { useState, useEffect } from "react";
 import { setData, unsetData } from "./Redux/slices/State";

import axios from 'axios'
export const useAxios = (url,callApi,setCallApi,dispatch) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => { 
    if (callApi) {
      setIsLoading(true) 
    const fetchData = async () => {
      try{
      const response = await axios.get(url);
      dispatch(unsetData())
      dispatch(setData(response.data))
      setCallApi(false)
      setIsLoading(false)
    }catch(error){
      setIsLoading(false)
      setCallApi(false)
      console.log("incorrect data")
    }};
    fetchData();
  }
}, [url,callApi]);
  return {isLoading};
}
