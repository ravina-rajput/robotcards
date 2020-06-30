import React from 'react';
import { Card } from './Card';

export const CardList = ({ robots }) => {
  const showRobots = robots.map((robot, i) => {
    return <Card robot={robot} key={i} />;
  });
  return <div>{showRobots}</div>;
};
