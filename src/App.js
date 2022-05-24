import './App.css';


import axios from 'axios';
import {useState} from "react";
import RecipeTile from './RecipeTile';

 function App(){
 const [query,setquery]=useState("");
 const[recipes,setrecipes]=useState([]);
 const[healthLabels,sethealthLabels]=useState("vegan");


  const YOUR_APP_ID= "98ae43c9";
  const YOUR_APP_KEY="5dadbe216d63560310fe00f37bd98dec";

  var url=`https:api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabels}`;

  async function getRecipe(){
    var result= await axios.get(url)
    setrecipes(result.data.hits);
    console.log(result.data);
  }
const onSubmit=(e) => {
  e.preventDefault();
  getRecipe();
}
  return (
    <div className="app">
    <h1 onClick={getRecipe}>FOOD RECIPE PLAZA</h1>
    <form className='app_searchForm' onSubmit={onSubmit}>
      <input  className='app_search' type="text" placeholder='Enter ingridients' value={query} onChange={(e)=>setquery(e.target.value)}/>
      <input type="submit" value="submit"  className='app_submit'/>

      <select className='app_healthLabels'>
        <option onClick={()=>sethealthLabels("vegan")}>vegan</option>
        <option onClick={()=>sethealthLabels("vegetarian")}>vegetarian</option>
        <option onClick={()=>sethealthLabels("paleo")}>paleo</option>
        <option onClick={()=>sethealthLabels("dairy-free")}>dairy-free</option>
        <option onClick={()=>sethealthLabels("peanut-free")}>peanut-free</option>
        <option onClick={()=>sethealthLabels("tree-nut-free")}>tree-nut-free</option>
        <option onClick={()=>sethealthLabels("sugar-conscious")}>sugar-conscious</option>
        <option onClick={()=>sethealthLabels("egg-free")}>egg-free</option>
        <option onClick={()=>sethealthLabels("fish-free")}>fish-free</option>
        <option onClick={()=>sethealthLabels("shellfish-free")}>shellfish-free</option>
        <option onClick={()=>sethealthLabels("alcohol-free")}>alcohol-free</option>
        <option onClick={()=>sethealthLabels("sugar-conscious")}>sugar-conscious</option>
        <option onClick={()=>sethealthLabels("gluten-free")}>gluten-free</option>
        <option onClick={()=>sethealthLabels("wheat-free")}>wheat-free</option>
        <option onClick={()=>sethealthLabels("soy-free")}>soy-free</option>
        <option onClick={()=>sethealthLabels("sugar-conscious")}>sugar-conscious</option>
      </select>

    </form>
    <div class="food">
      {recipes.map(recipe =>{
       return <RecipeTile recipe={recipe}/>
        {/* return <p>{recipe["recipe"]["label"]}</p> */}
      })}
  
     </div>
      </div>
  );
  
}

export default App;
