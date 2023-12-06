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
    image: profile1,
  },
  {
    id: 3,
    name: "Alane Kann",
    title: "India",
    description:
      "Exploring this showcase of Africa's diversity was a transformative experience. The rich cultures and inspiring success stories left me in awe of the tenacity and braveness of the African people.",
    image: profile1,
  },
  {
    id: 4,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 5,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 6,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 7,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 8,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 9,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 10,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 11,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
  {
    id: 12,
    name: "Alane Kann",
    title: "India",
    description:
      "I was captivated by the captivating stories of African wildlife and the conservation efforts being undertaken to protect Africa's wildlife.",
    image: profile1,
  },
];

const SuccessCard = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}> Some Success Stories From Africa </h2>
      <br />
      <div className={classes.section}>
        <div className={classes.sliderItems}>
          {data.map((story) => (
            <Card info={story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;

const Card = ({ info }) => {
  const { name, title, description, image } = info;

  return (
    <>
      <div key={info.id} className={classes.card}>
        <div className={classes.profileDetails}>
          {/* flex row with two elements, pic and name */}

          <img className={classes.profilepic} src={image} alt="profilepic" />

          <div className={classes.name}>
            <h3>{name} </h3>
            <p> {title}</p>
          </div>
        </div>
        <br />
        <p>{description}</p>
      </div>
    </>
  );
};
