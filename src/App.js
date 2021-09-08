import { useState } from "react";

function App() {
  const [isWarning] = useState(true);
  return (
    <>
      <div className="box success">This is a success message</div>
      <div className={`box ${isWarning === true && "warning"}`}>
        This is a success message
      </div>
    </>
  );
}

export default App;
