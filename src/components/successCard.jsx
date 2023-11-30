import classes from "./successCard.module.css";
import profile1 from "../images/header1.png";

const data = [
  {
    id: 1,
    name: "Alane Kann",
    title: "India",
    description:
      "Exploring this showcase of Africa's diversity was a transformative experience. The rich cultures and inspiring success stories left me in awe of the",
    image: profile1,
  },
  {
    id: 2,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile2.png",
  },
  {
    id: 3,
    name: "Alane Kann",
    title: "India",
    description:
      "Exploring this showcase of Africa's diversity was a transformative experience. The rich cultures and inspiring success stories left me in awe of the",
    image: "../images/profile3.png",
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
  },
];

const SuccessCard = () => {
  return (
    <div className={classes.section}>
      <h2> Some Success Stories From Africa </h2>
      {data &&
        data.map((story) => (
          <div className={classes.card}>
            <div className={classes.profileDetails}>
              {/* flex row with two elements, pic and name */}

              <img
                className={classes.profilepic}
                src={story.image}
                alt="profilepic"
              />

              <div className={classes.name}>
                <h3>{story.name} </h3>
                <p> {story.title}</p>
              </div>
            </div>
            <p>{story.description}</p>
          </div>
        ))}
    </div>
  );
};

export default SuccessCard;
