import React from 'react';

export const SearchBar = ({ onInputChange }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-light-green ma3"
        type="text"
        placeholder="search robots"
        onChange={onInputChange}
      />
    </div>
  );
};
