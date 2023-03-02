import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function RecipePage() {
  const dispatch = useDispatch();

  const recipes = useSelector(store => store.recipe);

  useEffect(() => {
    dispatch({ type: 'FETCH_RECIPES' });
  }, []);


  return (
    <div className="container">
      <p>Recipe Page</p>
      { JSON.stringify(recipes)}
    </div>
  );
}

export default RecipePage;
