import Button from "./button";
import classes from "./header.module.css";

const Header = () => {
  const style = {
    backgroundColor: "black",
  };
  return (
    <div className={classes.header}>
      <div className={classes.menu}>
        {/*logo, menu and button  */}
        <img className={classes.logo} src="\#" alt="logo" />
        <div className={classes.links}>
          <span> Home </span>
          <span> About </span>
          <span> Culture </span>
          <span> Landscapes </span>
        </div>
        <Button style={style} text="Discover Africa" />
      </div>
      <br />
      <div className={classes.headings}>
        {/* Text, button */}
        <li className={classes.title}>
          {" "}
          DISCOVER THE VIBRANT <br />
          TAPESTRY OF AFRICA
        </li>
        <li className={classes.subTitle}>
          Uncover a Continent of Untold Stories and Inspiring Journeys
        </li>
        <Button style={style} text="Discover Africa" />
      </div>
      <br />
      <br />
      <div className={classes.numbers}>
        {/* numbers */}
        <div className={classes.ctry}>
          <li className={classes.hdx}>54</li>
          <li className={classes.subText}>Countries</li>
        </div>
        <div className={classes.ctry}>
          <li className={classes.hdx}>1.216</li>
          <li className={classes.subText}>Billion inhabitants</li>
        </div>
        <div className={classes.ctry}>
          <li className={classes.hdx}>2000+</li>
          <li className={classes.subText}>Languages</li>
        </div>
      </div>
    </div>
  );
};

export default Header;
