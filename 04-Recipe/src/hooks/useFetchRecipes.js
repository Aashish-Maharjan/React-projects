import axios from "axios";
import {useState} from "react";
const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20'
        },
    headers: {
      'x-rapidapi-key': '528b902d9dmsh61a9d41626d9e66p1dc07bjsn0779192f925e',
      'x-rapidapi-host': 'tasty.p.rapidapi.com'
    }
  };
const useFetchRecipes=()=>{
    const [recipes,setRecipes]=useState(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

	const fetchRecipes =async(searchTerm)=>{
    console.log(searchTerm,"in the recipes ")
    setLoading(true);
    setError(null);
    setRecipes(null);
		try {
      const reqOptions ={...options}
      if(searchTerm){
        reqOptions.params.q=searchTerm
      }
			const response = await axios.request(reqOptions);
      setRecipes(response.data.result);
      setLoading(false)
			
		} catch (err) {
      setError(err.message);
      setLoading(false);
		}
  }
  return[fetchRecipes,{data:recipes,loading,error}];
}
export default useFetchRecipes