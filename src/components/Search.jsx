import React, { useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      // setText('');
    }
  };
  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          className='form-input'
          type='text'
          value={text}
          placeholder='type favorite meal'
          onChange={handleChange}
        />
        <button className='btn' type='submit'>
          Search
        </button>
        <button className='btn btn-hipster' type='btn' onClick={() =>fetchRandomMeal()}>
          Surprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
