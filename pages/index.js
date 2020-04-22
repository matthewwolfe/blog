import React from 'react';
import { mapping } from './posts';
import { Link } from '../src/Link';

function App() {
  return (
    <div>
      {Object.keys(mapping).map((url, index) => (
        <Link href={`/posts/${url}`} key={index}>
          {mapping[url].label}
        </Link>
      ))}
    </div>
  );
}

export default App;
