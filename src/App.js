import PureCompo from "./HOC&Pure/PureCompo";
import ParentHOC from "./HOC&Pure/ParentHOC";
import HOCCall from "./HOC&Pure/HOCCall";
import { HOCCallBlue, HOCCallGreen } from "./HOC&Pure/HOCCall";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>HANDSON-5</h1>
      <PureCompo />
      <ParentHOC />
      <HOCCall value={ParentHOC} />
      <HOCCallBlue value={ParentHOC} />
      <HOCCallGreen value={ParentHOC} />
    </div>
  );
}

export default App;
