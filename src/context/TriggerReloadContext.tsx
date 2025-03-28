import { TriggerReloadContextType } from "@/types";
import React, { createContext } from "react";

const TriggerReloadContext = createContext<TriggerReloadContextType | null>(
  null
);

const TriggerReloadProvider = ({ children }: { children: React.ReactNode }) => {
  const [reloadBlog, setReloadBlog] = React.useState(false);
  return (
    <TriggerReloadContext.Provider value={{ reloadBlog, setReloadBlog }}>
      {children}
    </TriggerReloadContext.Provider>
  );
};

export const useTriggerReload = () => {
  const context = React.useContext(TriggerReloadContext);
  if (!context) {
    throw new Error(
      "useTriggerReload must be used within a TriggerReloadProvider"
    );
  }
  return context;
};

export default TriggerReloadProvider;
