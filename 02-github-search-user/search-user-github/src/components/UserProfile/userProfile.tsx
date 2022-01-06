import styles from "./styles.module.scss";
import { VscHome, VscLink, VscLocation, VscTwitter } from "react-icons/vsc";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";
import Loading from "../Loading/loading";

type User = {
  id: number;
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string;
  email: string | null;
  location: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  twitter_username: string | null;
  html_url: string;
};

const UserProfile = () => {
  const { user, error, loading } = useContext(UserContext);

  return (
    <section className={styles.profileWrapper}>
      {user ? (
        <>
          <div className={styles.userInfos}>
            <div className={styles.userImage}>
              <img src={user?.avatar_url} alt="User Image" />
            </div>
            <div className={styles.userDetails}>
              <p className={styles.username}>{user?.name}</p>
              <p className={styles.company}>{user?.login}</p>
              <p className={styles.joined}>Joined: {user?.created_at}</p>
            </div>
          </div>
          <div className={styles.userBio}>{user?.bio}</div>

          <div className={styles.gitStatus}>
            <div className={styles.infoStatus}>
              <p>Repos</p>
              <span>{user?.public_repos}</span>
            </div>
            <div className={styles.infoStatus}>
              <p>Followers</p>
              <span>{user?.followers}</span>
            </div>
            <div className={styles.infoStatus}>
              <p>Following</p>
              <span>{user?.following}</span>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <div
              className={`${styles.mediaInfo}  ${
                user?.location ? "" : styles.disable
              }`}
            >
              <VscLocation className={styles.icoMedia} />
              <p>{user?.location ? user?.location : "not registered"}</p>
            </div>
            <div
              className={`${styles.mediaInfo}  ${
                user?.twitter_username ? "" : styles.disable
              }`}
            >
              <VscTwitter />
              {user.twitter_username ? (
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                >
                  @{user?.twitter_username}
                </a>
              ) : (
                <p>not registred</p>
              )}
            </div>
            <div
              className={`${styles.mediaInfo}  ${
                user?.html_url ? "" : styles.disable
              }`}
            >
              <VscLink />
              <a href={user?.html_url} target="_blank">
                {user?.html_url}
              </a>
            </div>
            <div
              className={`${styles.mediaInfo}  ${
                user?.company ? "" : styles.disable
              }`}
            >
              <VscHome />
              <p>{user?.company ? user?.company : "not registered"}</p>
            </div>
          </div>
        </>
      ) : (
        <section className={styles.notUser}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <h1>Hello World !</h1>
              <p>Use the search bar to find a user !</p>
            </>
          )}

          {error && <p className={styles.error}>{error}</p>}
        </section>
      )}
    </section>
  );
};

export default UserProfile;
