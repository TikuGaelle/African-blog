import Button from "./button";
import classes from "./getInvolved.module.css";
import image4 from "../images/manwithinstrument.jpg";
import image3 from "../images/groupofmen.jpg";

const GetInvolvedSection = () => {
  const style = {
    backgroundColor: "rgba(255, 68, 0, 0.81)",
    color: "beige",
  };

  return (
    <>
      <div className={classes.getInvolvedContainer}>
        <h2> Get Involved! </h2>

        <p>
          {" "}
          Discover volunteer programs, cultural exchange initiatives, and
          community driven projects that allow you to make a positive impact and
          contribute to the sustainable development of Africa.
        </p>
        <Button style={style} text="Get Involved" />
      </div>{" "}
      <br />
      <br />
      <div className={classes.getInvolvedImage}>
        <img className={classes.pic1} src={image4} alt="pic1" />

        <img className={classes.pic2} src={image3} alt="pic2" />

        {/* <SuccessCard /> */}
      </div>
    </>
  );
};

export default GetInvolvedSection;
