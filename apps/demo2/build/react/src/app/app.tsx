// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.scss';

export function App() {
  const [i, setI] = useState(0);
  return (
    <button
      onClick={() => {
        console.log(i);
        setI(i + 1);
      }}
    >
      按钮{i}
    </button>
  );
}

export default App;
