import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);

const AUTH_KEY = '@ejoutia_auth_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount: restore session from AsyncStorage
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const stored = await AsyncStorage.getItem(AUTH_KEY);
        if (stored) {
          setUser(JSON.parse(stored));
        }
      } catch (e) {
        console.warn('Erreur lors de la restauration de session:', e);
      } finally {
        setIsLoading(false);
      }
    };
    restoreSession();
  }, []);

  /**
   * login – called after successful form submission.
   * Simulates a JWT token and persists the user object.
   */
  const login = async (userData) => {
    const session = {
      ...userData,
      token: `ejoutia_token_${Date.now()}`,
      joinedAt: userData.joinedAt || new Date().toISOString(),
    };
    try {
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(session));
      setUser(session);
    } catch (e) {
      console.warn('Erreur lors de la sauvegarde de session:', e);
    }
  };

  /**
   * logout – clears AsyncStorage and resets user state.
   */
  const logout = async () => {
    try {
      await AsyncStorage.removeItem(AUTH_KEY);
      setUser(null);
    } catch (e) {
      console.warn('Erreur lors de la déconnexion:', e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth doit être utilisé dans <AuthProvider>');
  return ctx;
}
