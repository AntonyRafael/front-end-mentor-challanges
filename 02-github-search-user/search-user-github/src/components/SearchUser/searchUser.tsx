import styles from "./styles.module.scss";
import { VscSearch } from "react-icons/vsc";
import { useContext, useState } from "react";
import { api } from "../../services/api";

import Button from "../Button/button";
import { UserContext } from "../../contexts/user";

const SearchUser = () => {
  const [input, setInput] = useState("");
  const { findUser } = useContext(UserContext);

  const handleSubmit = () => {
      findUser(input);
      setInput("")
  };

  return (
    <div className={styles.serachWrapper}>
      <div className={styles.searchContainer}>
        <div className={styles.ico}>
          <VscSearch />
        </div>
        <input
          className={styles.inputUsername}
          type="text"
          placeholder="Search a GitHub username..."
          value={input}
          onChange={(event) => setInput(event.target.value)}

        />
      </div>
      <Button text="search" callbackFunction={handleSubmit} />
    </div>
  );
};

export default SearchUser;
