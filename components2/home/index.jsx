import { useState } from "react";

function Home() {

  const [count, Setcount] = useState(0)



  let num = 0;
  const counter = (type) => {
    if (type == "plus") Setcount(count + 1)
    else if (type == "minus") Setcount(count - 1)
    else console.log("Siz xato type yubordingiz...");
  }
  return (
    <div>
      <h1>Home component {count}</h1>
      <br />,
      <br />,
      <hr />,
      <br />,
      <br />,

      <button onClick={() => counter("plus")} >Click +</button>
      <button onClick={() => counter("minus")} >Click -</button>

    </div>
  );
}

export default Home