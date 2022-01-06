import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

type User = {
  id: number;
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string;
  email: string | null;
  location: string;
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  twitter_username: string | null;
  html_url: string;
};

type UserContextData = {
  user: User | null;
  loading: boolean;
  error: string | null;
  findUser: any;
};

type UserProvider = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextData);

export function UserProvider(props: UserProvider) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const findUser = async (username: string) => {
    try {
      setError(null);
      setUser(null);
      setLoading(true);

      //  TimeOut to see a loading, don't use in production
      const response = await api.get(`users/${username}`);
      setTimeout(() => {
        const { data } = response;
        setUser(data);
        setLoading(false);
      }, 2000);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("User not found in database, try again !");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, error, findUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
