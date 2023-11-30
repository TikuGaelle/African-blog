import Button from "./button";
import classes from "./getInvolved.module.css";
import SuccessCard from "./successCard";

const GetInvolvedSection = () => {
  return (
    <>
      <div className={classes.getInvolvedContainer}>
        <h2> Get Involved! </h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure iusto
          laudantium deserunt
          <br />
          numquam ut debitis libero veniam perferendis esse quas placeat, quae
          ab vel. Nulla mollitia
          <br />
          earum ipsam pariatur delectus.{" "}
        </p>
        <Button text="Get Involved" />
      </div>{" "}
      <br />
      <br />
      <div className={classes.getInvolvedImage}>
        <div className={classes.pic1}>
          {/* <img src={image4} alt="pic1" /> */}
        </div>
        <div className={classes.pic2}>
          {/* <img src={image4} alt="pic2" /> */}
        </div>

        {/* <SuccessCard /> */}
      </div>
    </>
  );
};

export default GetInvolvedSection;
