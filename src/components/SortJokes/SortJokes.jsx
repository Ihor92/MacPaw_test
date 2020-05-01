import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

export default class SortJokes extends Component {
  render() {
    return (
      <div>
        <header className="sortJokes">
          <div className="logo">
            Msi 2020
          </div>
        </header>
        <section>
          <h1>Hey!</h1>
          <h3>Let’s try to find a joke for you:</h3>

          <SearchForm />
          
        </section>
      </div>
    )
  }
}