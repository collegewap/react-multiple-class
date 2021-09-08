import { useState } from "react";

const ChildComp = (props) => {
  return <div className={`box ${props.status}`}>This is an error message</div>;
};

function App() {
  const [isWarning] = useState(true);
  return (
    <>
      <div className="box success">This is a success message</div>
      <div className={`box ${isWarning === true && "warning"}`}>
        This is a warning message
      </div>
      <ChildComp status="error" />
    </>
  );
}

export default App;
