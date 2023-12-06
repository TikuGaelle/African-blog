import Button from "./button";
import classes from "./homeCards.module.css";
import image1 from "../images/Group 3.png";
import image2 from "../images/Group 2.png";
import image3 from "../images/Group 1.png";
import image4 from "../images/header1.png";
import styled from "styled-components";

const HomeCards = () => {
  const style1 = {
    backgroundColor: "black",
    color: "beige",
  };
  const style2 = {
    backgroundColor: "brown",
    color: "beige",
  };

  return (
    <>
      <div className={classes.body}>
        {/* <Card data={Data} />
        <Card data={Data} /> */}

        <div className={classes.div1}>
          <div className={classes.imageSide}>
            <img src={image1} alt="african culture" />
          </div>
          <div className={classes.textSide}>
            <h2> African Culture</h2>
            <p>
              {" "}
              Immense yourself in the captivating cultures of Africa. From the
              rhythmic beats of traditional music to the vibrant colors of
              traditional attire, explore the customs, festivals, art, dance,
              and cuisine that defines each culture accross the continent.{" "}
            </p>
            <Button style={style1} text="Visit Africa" />
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.textSide}>
            <h2> African Wildlife</h2>
            <p>
              {" "}
              From the majestic elephants and lions, to the graceful giraffes
              and elusive leopards delve into the ownders of african wildlife
              and get an appreciation for the importance of conservation efforts
              in preserving these extraordinary creatures{" "}
            </p>
            <Button style={style2} text="Save an Extinct Animal" />
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
              insightful activities and blog posts. Explore indepth features,
              interviews and thought-provoking content that delve into various
              aspects of African culture{" "}
            </p>
            <Button style={style1} text="Visit Our blog" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;

// const Card = ({ data }) => {
//   const { title, description, buttonText, image, containerFlex, buttonStyle } =
//     data;

//   return (
//     <div style={containerFlex} className={classes.div1}>
//       <div className={classes.textSide}>
//         <h2> {title}</h2>
//         <p>{description} </p>
//         <Button style={buttonStyle} text={buttonText} />
//         {/* <button> Visit Africa </button> */}
//       </div>
//       <div className={classes.imageSide}>
//         <img src={image} alt="african culture" />
//       </div>
//     </div>
//   );
// };
