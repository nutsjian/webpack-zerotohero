import React from "react";
import TechnicianSvg from "./technician_9KB.svg";
import PhysiotherapistSvg from "./physiotherapist_64KB.svg";
import MetadataTxt from "./metadata.txt";

function App() {

  React.useEffect(() => {
    console.log(MetadataTxt)
  }, [])

  return (
    <div>
      app renderred

      <div>
        <img src={TechnicianSvg} />
        <img src={PhysiotherapistSvg} />
        <div style={{
          color: "red"
        }}>
        </div>
      </div>
    </div>
  )
}

export default App;
