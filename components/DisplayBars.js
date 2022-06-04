import classes from "./DisplayBars.module.css";

function DisplayBars(props) {
  console.log(props.array);
  return (
    <div className={classes.barContainer}>
      {props.array.map((number, index) => {
        return (
          <div
            key={index}
            style={{ height: `${number}px`, backgroundColor: "black" }}
            className={classes.bar}
            id={"bar"}
          ></div>
        );
      })}
    </div>
  );
}

export default DisplayBars;
