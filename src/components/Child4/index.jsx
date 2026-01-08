import SubChild7 from "../SubChild7";
import SubChild8 from "../SubChild8";

export default function Child4({ Lastname }) {
  return (
    <div>
      <h1>Child4</h1>
      <SubChild7 />
      <SubChild8 Lastname={Lastname} />
    </div>
  );
}

