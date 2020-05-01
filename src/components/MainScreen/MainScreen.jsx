import React from 'react';
import './MainScreen.css';
import SortJokes from '../SortJokes/SortJokes';
import FavoriteJokes from '../FavoriteJokes/FavoriteJokes';

export default function MainScreen() {
  return (
    <div>
      <SortJokes />
      <FavoriteJokes />
    </div>
  )
}