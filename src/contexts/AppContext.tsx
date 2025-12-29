import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppContextType {
  userName: string | null;
  setUserName: (name: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const USER_NAME_KEY = 'pharmih_user_name';

export function AppProvider({ children }: { children: ReactNode }) {
  const [userName, setUserNameState] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem(USER_NAME_KEY);
    if (storedName) {
      setUserNameState(storedName);
    }
  }, []);

  const setUserName = (name: string) => {
    localStorage.setItem(USER_NAME_KEY, name);
    setUserNameState(name);
  };

  return (
    <AppContext.Provider value={{
      userName,
      setUserName,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
