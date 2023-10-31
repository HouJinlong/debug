// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import SplitAny from 'react-split';
import { Iframe } from './component/iframe';
import { Devtools } from './component/devtools';
const Split: any = SplitAny;
export function App() {
  return (
    <Split
      sizes={[25, 75]}
      minSize={100}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
      className="split"
    >
      <Iframe />
      <Devtools />
    </Split>
  );
}

export default App;
