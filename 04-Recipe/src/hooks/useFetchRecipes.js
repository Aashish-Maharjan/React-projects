import axios from "axios";
import {useEffect,useState} from "react";
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
    const [recipes,setRecipes]=useState([]);

	useEffect(()=>{
		fetchRecipes();
	},[]);
	const fetchRecipes =async()=>{
		try {
			const response = await axios.request(options);
			setRecipes(response.data.result);
			
		} catch (error) {
			console.error(error);
		}
	}
}
export default useFetchRecipes