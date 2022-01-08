import styles from "./App.module.scss";
import { Input } from "./components/Input";

import Logo from "./assets/images/logo.svg";
import { useState } from "react";

function App() {

  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [sucess, setSucess] = useState("")

  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


  const validateFunction = () => {
    if (regexEmail.test(email)) {
      setSucess("Email enviado com sucesso !")
    } else {
      setError("Preencha um email valido !")
    }

    setTimeout(() => {
      setSucess("")
      setError("")
    },3000)
  }

  const onChange = ({ target }: any) => {
    setEmail(target.value)
  }



  return (
    <div className={styles.app}>
      <div className={styles.content}>

        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={styles.bgMobile}></div>

        <div className={styles.mainContent}>
          <h1>
            <span>We're</span> coming soon
          </h1>

          <p>
            Hello follow shoppers ! We're currently building our new fashion
            store. Add yout email below to stay up-to-date with announcements
            and our launch details.
          </p>

            <Input placeholder="Email Adress" onChange={onChange} value={email} error={error} validate={validateFunction} sucess={sucess}/>
        </div>
      </div>

      <div className={styles.background}></div>
    </div>
  );
}

export default App;
