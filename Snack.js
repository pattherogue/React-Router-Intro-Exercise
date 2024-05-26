import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Snack() {
  const { name } = useParams();

  return (
    <div>
      <h2>{name}</h2>
      <p>This is the {name} snack.</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Snack;
