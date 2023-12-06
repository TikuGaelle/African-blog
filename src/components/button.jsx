import classes from "./button.module.css";

const Button = (props) => {
  return (
    <>
      <button style={props.style} className={classes.btn}>
        {" "}
        {props.text}{" "}
      </button>
    </>
  );
};

export default Button;
