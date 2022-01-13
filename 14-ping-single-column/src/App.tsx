import styles from "./App.module.scss";
import LogoPing from "./assets/images/logo.svg";
import LogoFacebook from "./assets/images/logo-facebook.svg";
import LogoTwitter from "./assets/images/logo-twitter.svg";
import LogoInstagram from "./assets/images/logo-instagram.svg";
import DashBoardImage from "./assets/images/illustration-dashboard.png";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { SocialMediaLink } from "./components/SocialMediaLink";
import useForm from "./hooks/useForm";

function App() {
  const email = useForm("email");

  const handleClick = () => {
    try {
      if (email.validate()) console.log("Email send !");

      throw new Error("Ops ! Check your email and try again !");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={LogoPing} alt="logo ping" />
      </div>

      <div className={styles.launchingDetails}>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p>Subscribe and get notified</p>
        <div className={styles.emailAdress}>
          <Input
            placeholder="Your Email Adress"
            type="text"
            id="email"
            {...email}
          />
          <Button text="Notify Me" onClick={handleClick} />
        </div>
      </div>

      <div className={styles.dashboard}>
        <img src={DashBoardImage} alt="dashboard" />
      </div>

      <footer>
        <div>
          <SocialMediaLink logo={LogoFacebook} alt="facebook logo" href="#" />
          <SocialMediaLink logo={LogoTwitter} alt="twitter logo" href="#" />
          <SocialMediaLink logo={LogoInstagram} alt="instagram logo" href="#" />
        </div>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
