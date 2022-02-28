import React, {useState, useEffect} from 'react';
import './App.css';

function App() {


  const [post, setrecipes] = useState([]);
  const api_url = "https://api.spoonacular.com/recipes/complexSearch"

  useEffect(() => {
   getrecipes();
  }, [])

  const getrecipes = async () => {
    const response = await fetch(api_url)
    const data = await response.json()
    setrecipes(data.results)
  }
  return (
    <div className="App">
   <div> 
     <h1> Recipes </h1>
     <ul>
       {post.map((item) => (
         <il key = {item.id} > 
           {item.title} <br></br><img src={item.image} alt="recipe image"></img> <br></br>

         </il>
       ))}
     </ul>
   </div>
    </div>
  );
}

export default App;