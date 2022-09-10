import React, { createContext, useState, FC, PropsWithChildren } from "react";

export type UserContextState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export interface User {
  _id: string;
  email: string;
  name: string;
}

const MainContext = createContext<UserContextState | null>(null);

export const MainContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUserState] = useState(null);

  const setUser = (user: any | null) => {
    console.log("as", user);
    setUserState(user);
  };

  return (
    <MainContext.Provider value={{ user, setUser }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
