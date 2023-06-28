import React, {createContext, useState, useContext, ReactNode} from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  date: Date;
  gender: string;
  category: string;
  height: string;
  weight: string;
}

interface SignInCredentials {
  user: User;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [data, setData] = useState<User>({
    id: '1',
    name: 'Visitante',
    email: 'teste@teste.com',
    gender: 'M',
    date: new Date(),
    category: 'RX',
    height: '1,85',
    weight: '78',
  } as User);

  async function signIn({user}: SignInCredentials) {
    setData({
      name: user.name,
      email: user.email,
      category: user.category,
      date: user.date,
      gender: user.gender,
      height: user.height,
      id: user.id,
      weight: user.weight,
    });
  }

  async function signOut() {
    setData({} as any);
  }

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};
