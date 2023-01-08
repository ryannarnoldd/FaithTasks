import React, { useState } from 'react';

const SearchBar = () => {
  const [date, setDate] = useState('');
  const minDate = '2022-01-01'; // January 1st, 2022
//   max date is today.
  const maxDate = new Date().toISOString().split('T')[0];

  const handleChange = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // let day, month, year;
    let [year, month, day] = date.split('-');
    console.log(year, month, day);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Select a date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleChange}
        min={minDate}
        max={maxDate}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchBar;