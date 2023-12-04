import classes from "./successCard.module.css";
import profile1 from "../images/header1.png";

const data = [
  {
    id: 1,
    name: "Alane Kann",
    title: "India",
    description:
      "Exploring this showcase of Africa's diversity was a transformative experience. The rich cultures and inspiring success stories left me in awe of the tenacity and braveness of the African people. ",
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
      "Exploring this showcase of Africa's diversity was a transformative experience. The rich cultures and inspiring success stories left me in awe of the tenacity and braveness of the African people.",
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
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: "../images/profile4.png",
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
    <>
      <h2 className={classes.heading}> Some Success Stories From Africa </h2>
      <div className={classes.section}>
        <div className={classes.sliderItems}>
          {data && data.map((story) => <Card info={story} />)}
        </div>
      </div>
    </>
  );
};

export default SuccessCard;

const Card = ({ info }) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.profileDetails}>
          {/* flex row with two elements, pic and name */}

          <img
            className={classes.profilepic}
            src={info.image}
            alt="profilepic"
          />

          <div className={classes.name}>
            <h3>{info.name} </h3>
            <p> {info.title}</p>
          </div>
        </div>
        <p>{info.description}</p>
      </div>
    </>
  );
};
