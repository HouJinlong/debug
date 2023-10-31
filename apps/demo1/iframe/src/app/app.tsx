// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.scss';

export function App() {
  const [img, setImg] = useState(false);
  return (
    <div
      style={{
        paddingTop: '40px',
      }}
    >
      <h2>一个普普通通的标题</h2>
      <h2
        style={{
          color: 'red',
        }}
      >
        一个有样式的标题
      </h2>
      {img && <img src="https://ui-hiya-web.mehiya.com/logo.png" alt="" />}
      <br />
      <br />
      <button
        onClick={() => {
          setImg(true);
        }}
      >
        加载图片
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          console.log('打印console');
        }}
      >
        打印console
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          fetch('https://ui-hiya-web.mehiya.com/logo.png').then(res=>{
            console.log('res: ', res);
          })
        }}
      >
        fetch请求图片
      </button>
      <br />
      <br />
      <button
        onClick={() => {
         localStorage.setItem('test',String(+new Date()))
        }}
      >
        Local Storage
      </button>
    </div>
  );
}

export default App;
