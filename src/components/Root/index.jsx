import Parent1 from "../Parent1";
import Parent2 from "../Parent2";

export default function Root() {
  let Firstname = "Eshmat";
  let Lastname = "Toshmatov";
  return (
    <div>
      <h1>Root</h1>
      <Parent1 Firstname={Firstname} />
      <Parent2 Lastname={Lastname} />
    </div>
  );
}
