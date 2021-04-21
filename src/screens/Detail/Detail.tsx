import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './Detail.css';

interface ParamTypes {
  detailId: string
}

 export const Detail: React.FC = () =>  {

  let history = useHistory();

  const {detailId} = useParams<ParamTypes>()

  const [currentRecipe, setCurrentRecipe] = useState<any>()

  useEffect(() => {
    fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${detailId}`, {
      "method" : "GET",
      "headers": {
        "x-rapidapi-key": "ad92e4ec72msh022b8f226039b70p1d095ajsn153c21f6105f",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setCurrentRecipe(data);
    })
    .catch(() => history.push('/'))

  },[detailId, history])



  const instructionsList = currentRecipe?.instructions.map((c: any) => {
    return (
      <li key={c.id} className='instruction'>
        <div>{c.display_text}</div>
      </li>
    );
  });

  if (!currentRecipe) {
    return <div/>
  }

  return (
    <div id='containerDetail'> 
      <h2 id='title'>{currentRecipe?.description ? currentRecipe?.description : 'Pas de description'} </h2>
      <ol id='containerInstructions'>{instructionsList}</ol>
    </div>
  );
}


