import SubChild1 from '../SubChild1'
import SubChild2 from '../SubChild2'
export default function Child1({ Firstname }) {
  return (
    <div>
      <h1>Child1</h1>
      <SubChild1 Firstname={Firstname} />
      <SubChild2 />
    </div>
  );
}
