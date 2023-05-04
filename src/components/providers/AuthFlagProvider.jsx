import { createContext, useState } from "react";


export const AuthFlagContext = createContext({});

export const AuthFlagProvider = (props) => {
  const {children} = props;

  const [ isAuth, setIsAuth ] = useState(false);

  return (
    <AuthFlagContext.Provider value={ {isAuth, setIsAuth} }>
      {children}
    </AuthFlagContext.Provider>
  );
};