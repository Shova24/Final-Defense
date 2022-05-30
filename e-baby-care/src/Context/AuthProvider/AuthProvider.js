import React from "react";
import { createContext } from "react";

import useFirebase from "../../Hooks/useFirebase";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();

  return (
    <>
      <AuthContext.AuthProvider value={allContexts}>
        {children}
      </AuthContext.AuthProvider>
    </>
  );
};

export default AuthProvider;
