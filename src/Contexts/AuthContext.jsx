import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firabase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const contexts = useContext(AuthContext);
  if (!contexts) throw new Error('There is no auth provider');

  return contexts;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvide = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvide);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
