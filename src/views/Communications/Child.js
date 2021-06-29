import React from 'react';

const Child = ({handleAdd}) => {
  return (
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
  );
};

export default Child;
