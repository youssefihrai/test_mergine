import React, { useRef } from "react";
import { Button } from "react-admin";

import ReactToPrint from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

const PrintModule = () => {
  let componentRef = useRef();
  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <ComponentToPrint ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
};

export default PrintModule;
