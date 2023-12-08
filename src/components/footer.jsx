import Button from "./button";
import classes from "./footer.module.css";
import { ReactComponent as Twit } from "../images/twitter.svg";
import { ReactComponent as FaceB } from "../images/facebook.svg";
import Logo from "../images/logo.png";

const Footer = () => {
  const style = {
    backgroundColor: "orangered",
    color: "beige",
  };
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.firstSection}>
          <img className={classes.logo} src={Logo} alt="logo" />
          <div className={classes.shortLinks}>
            <li>Home</li>
            <li>About</li>
            <li>Cultures</li>
            <li>Landscapes</li>
            <br />
            <Button style={style} text="Discover Africa" />
          </div>
        </div>
        <div className={classes.emptyCon}>
          <div className={classes.sizedbox}></div>
          <div className={classes.socialLinks}>
            <a
              href="https://twitter.com/wakamann_?t=KEzF66_yXfIKsQilw-TUkQ&s=09"
              target="_blank"
            >
              <FaceB title="Our facebook page" className={classes.fb} />
            </a>
            <a
              href="https://twitter.com/wakamann_?t=KEzF66_yXfIKsQilw-TUkQ&s=09"
              target="_blank"
            >
              <Twit title="Our twitter page" className={classes.twiIco} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
