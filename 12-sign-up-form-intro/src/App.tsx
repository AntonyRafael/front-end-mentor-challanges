import styles from "./App.module.scss";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import useForm from "./hooks/useForm";

function App() {
  const firstName = useForm();
  const lastName = useForm();
  const email = useForm("email");
  const password = useForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      firstName.validate();
      lastName.validate();
      email.validate();
      password.validate();
    } catch {
      // reset erros feedback user
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1>Learn to code by watching others</h1>

        <p>
          See how experienced developers salve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </div>

      <div className={styles.signUp}>
        <Button
          textBold="Try it free 7 days"
          text=" then $20/mo. thereafter"
          bgColor="var(--blue)"
        />
        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              placeholder="First Name"
              type="text"
              id="firstName"
              {...firstName}
            />
            <Input
              placeholder="Last Name"
              type="text"
              id="lastName"
              {...lastName}
            />
            <Input
              placeholder="Email Adress"
              type="email"
              id="email"
              {...email}
            />
            <Input
              placeholder="Password"
              type="password"
              id="password"
              {...password}
            />
            <Button textBold="CLAIM YOUR FREE TRIAL" />
          </form>
          <p className={styles.terms}>
            By clicking the button, you are agreeing to out {" "}
            <a href="#">Terms and Services</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
