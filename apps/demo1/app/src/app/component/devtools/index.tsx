import { forwardRef } from 'react';
export  const Devtools = forwardRef<HTMLIFrameElement>((props, ref) =>{
  return (
    <iframe src="http://127.0.0.1:8890/" title="iframe" ref={ref} frameBorder={0}></iframe>
  );
})

