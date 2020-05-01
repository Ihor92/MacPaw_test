import React, { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    return (
      <div>
        <form onChange="">
            <input
              type="radio"
              name="searchMethod"
              value="random"
              id="random"
            />
            <label htmlFor="random">Random</label>
            <br />
            
            <input
              type="radio"
              name="searchMethod"
              value="caterogies"
              id="caterogies"
            />
            <label htmlFor="caterogies">From caterogies</label>
            <div className="caterogiesButtons">
              <button>Animal</button>
              <button>Career</button>
              <button>Celebrity</button>
              <button>Dev</button>
            </div>

            <input
              type="radio"
              name="searchMethod"
              value="search"
              id="search"
            />
            <label htmlFor="search">Search</label><br/>
            <input
              type="text"
              placeholder="Free text search..."
            />
            <br/>
            <button onSubmit="">Get a joke</button>
          </form>
      </div>
    )
  }
}