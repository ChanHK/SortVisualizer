import { Fragment } from "react";
import Footer from "../components/Footer";
import DisplayBars from "../components/DisplayBars";
import { useState } from "react";

function Main() {
  const [array, setArray] = useState([]);

  return (
    <Fragment>
      <DisplayBars array={array} />
      <Footer getArray={(e) => setArray(e)} />
    </Fragment>
  );
}
export default Main;
