import React, {useState} from 'react';
import Child from './Child';

const  Parent = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }
  return (
      <div>
        <Child handleAdd={handleAdd} />
        {count}
      </div>
  );
}

export default Parent;
