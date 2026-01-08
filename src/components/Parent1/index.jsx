import Child1 from "../Child1";
import Child2 from "../Child2";

export default function Parent1({ Firstname }) {
  return (
    <div>
      <h1>Parent1</h1>
      <Child1 Firstname={Firstname} />
      <Child2 />
    </div>
  );
}
