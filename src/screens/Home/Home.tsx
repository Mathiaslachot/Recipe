import React, { useEffect, useState } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { Props } from './Home.props'


 export const Home: React.FC<Props> = () =>  {

  const [recipes, setRecipes] = useState<any[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    fetch(`https://tasty.p.rapidapi.com/recipes/list`, {
      "method" : "GET",
      "headers": {
        "x-rapidapi-key": "ad92e4ec72msh022b8f226039b70p1d095ajsn153c21f6105f",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "useQueryString": "true"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setRecipes(data?.results)
    })

  },[])

  const linkList = recipes?.map((c) => {
    return (
      <li key={c?.id} id='container'>
        <img src={c?.thumbnail_url} alt="ImgRecipe" className='img'/>
        <Link to={`/details/${c?.id}`} className='link'>{c?.name}</Link>
      </li>
    );
  });

  const handleSubmit = (event: any) => {
    event.preventDefault()

    fetch(`https://tasty.p.rapidapi.com/recipes/list?q=${search}`, {
      "method" : "GET",
      "headers": {
        "x-rapidapi-key": "ad92e4ec72msh022b8f226039b70p1d095ajsn153c21f6105f",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "useQueryString": "true"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setRecipes(data?.results)
    })

    setSearch('')
  }

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            Search :
            <input type="text" value={search} onChange={event => setSearch(event.target.value)} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>

        {recipes?.length > 0 
        ? 
          <ul id='gallery'>{linkList}</ul>
        :  
        <div>Pas de recette</div>
        }
      </div>
  );
}


