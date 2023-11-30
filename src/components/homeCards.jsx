import Button from "./button";
import classes from "./homeCards.module.css";
import image1 from "../images/Group 3.png";
import image2 from "../images/Group 2.png";
import image3 from "../images/Group 1.png";
import image4 from "../images/header1.png";

const HomeCards = () => {
  return (
    <>
      <div className={classes.body}>
        {/* <h1> Hello African blog!</h1> */}
        <div className={classes.div1}>
          <div className={classes.imageSide}>
            <img src={image1} alt="african culture" />
          </div>
          <div className={classes.textSide}>
            <h2> African Culture</h2>
            <p>
              {" "}
              Immense yourself in the captivating cultures of Africa. From the
              rhythmic
              <br />
              beats of traditional music to the vibrant colors of traditional
              attire,
              <br />
              explore the customs, festivals, art, dance, and cuisine that
              <br />
              defines each culture accross the continent.{" "}
            </p>
            <Button text="Visit Africa" />
            {/* <button> Visit Africa </button> */}
          </div>
        </div>

        <div className={classes.div1}>
          <div className={classes.textSide}>
            <h2> African Wildlife</h2>
            <p>
              {" "}
              From the majestic elephants and lions, to the graceful giraffes
              and elusive leopards
              <br />
              delve into the ownders of african wildlife and get an appreciation
              <br />
              for the importance of conservation efforts in
              <br />
              preserving these extraordinary creatures{" "}
            </p>
            <Button text="Save an Extinct Animal" />
            {/* <button> Visit Africa </button> */}
          </div>
          <div className={classes.imageSide}>
            <img src={image3} alt="african wildlife" />
          </div>
        </div>

        <div className={classes.div1}>
          <div className={classes.imageSide}>
            <img src={image2} alt="african blog" />
          </div>
          <div className={classes.textSide}>
            <h2>The African Blog</h2>
            <p>
              {" "}
              Dive deeper into Africa's diversity with our collection of
              <br />
              insightful activities and blog posts. Explore indepth features,
              <br />
              interviews and thought-provoking content that <br />
              delve into various aspects of African culture{" "}
            </p>
            <Button text="Visit Our blog" />
            {/* <button> Visit Africa </button> */}
          </div>
        </div>

        <h2> Get Involved </h2>
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
        <div className={classes.getInvolved}>
          <div className={classes.pic1}>
            {/* <img src={image4} alt="pic1" /> */}
          </div>
          <div className={classes.pic2}>
            {/* <img src={image4} alt="pic2" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
