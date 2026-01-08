import Child4 from '../Child4';
import Child3 from '../Child3'
export default function Parent2({ Lastname }) {
  return (
    <div>
      <h1>Parent2</h1>
      <Child3 />
      <Child4 Lastname={Lastname} />
    </div>
  );
}
