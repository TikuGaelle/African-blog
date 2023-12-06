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
          <span className={classes.name}> Home </span>
          <span> About </span>
          <span> Culture </span>
          <span> Landscapes </span>
        </div>
        <div className={classes.mobileMenu}>
          <Button style={style} text="Discover Africa" />
          <div className={classes.hamburger}>
            <span className={classes.hamburgerTop}></span>
            <span className={classes.hamburgerMiddle}></span>
            <span className={classes.hamburgerBottom}></span>
          </div>
        </div>
      </div>
      <br />
      <div className={classes.headings}>
        {/* Text, button */}
        <li className={classes.title}> DISCOVER THE VIBRANT</li>
        <li className={classes.title}> TAPESTRY OF AFRICA</li>
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
