import { Auth } from 'aws-amplify';
import { createContext, useEffect, useState } from 'react';

interface AuthContextProviderProps {
  children: any;
}

const AuthContext = createContext({});

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);
  console.log(authUser);

  // @ts-ignore
  const sub = authUser?.attributes?.sub;

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
