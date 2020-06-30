import React from 'react';

export const Card = ({ robot }) => {
  return (
    <div className="bg-light-green dib tc pa3 ma3 br3 grow shadow-4 bw2">
      <img src={`https://robohash.org/${robot.id}`} alt="robots" />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};
