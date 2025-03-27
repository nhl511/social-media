import { getCookie } from "@/lib/utils";
import { AuthContextType } from "@/types";
import React, { createContext, useContext } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = React.useState("");
  React.useEffect(() => {
    const token = getCookie("accessToken");
    if (token) setAccessToken(token);
  }, []);
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a DialogProvider");
  }
  return context;
};

export default AuthProvider;
