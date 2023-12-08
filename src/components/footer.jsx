import Button from "./button";
import classes from "./footer.module.css";
import { ReactComponent as Twit } from "../images/twitter.svg";
import { ReactComponent as FaceB } from "../images/facebook.svg";
import { ReactComponent as LinkIn } from "../images/linkedin.svg";
import { ReactComponent as Email } from "../images/email.svg";
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
            <Button
              className={classes.footerBtn}
              style={style}
              text="Discover Africa"
            />
          </div>
        </div>
        <div className={classes.emptyCon}>
          <div className={classes.sizedbox}></div>
          <div className={classes.socialLinks}>
            <a href="https://gmail.com/" target="_blank">
              <Email title="Our email page" className={classes.email} />
            </a>
            <a href="https://facebook.com/" target="_blank">
              <FaceB title="Our facebook page" className={classes.fb} />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <Twit title="Our twitter page" className={classes.twiIco} />
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <LinkIn title="Our Linkedin page" className={classes.linkco} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
