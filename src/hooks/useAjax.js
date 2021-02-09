import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = () => {
  console.log("useAjax !!!")

  const [response, setResponse] = useState({});

  const setRequestParams = (options) => {

    const method = options.method;
    
    let req = { 
      method: options.method,
      url: options.url,
      headers: options.headers
    };

    if (method === /^post$||^put$/i) req = { ...req, body:  options.body };
    return req;
  };

  const useAxios = async (options) => {
    console.log("useAxios!!")
    console.log("options >>>> ", options)
    let results = await axios(
      options
    ).catch(function (error) {
      console.log("error: ");
      console.log(error)
    })
    console.log("results.data -->  ", results.data)
    setResponse(results.data);
  };

  return [useAxios, response];
};

export default useAjax;
