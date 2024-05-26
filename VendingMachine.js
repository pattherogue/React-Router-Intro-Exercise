import React from 'react';

function VendingMachine() {
  return (
    <div>
      <h2>Vending Machine</h2>
      <p>Select a snack:</p>
      <ul>
        <li>
          <a href="/snacks/chips">Chips</a>
        </li>
        <li>
          <a href="/snacks/candy">Candy</a>
        </li>
        <li>
          <a href="/snacks/soda">Soda</a>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
