export type RootStackParamList = {
  SignIn: undefined;
  ForgotPassword: undefined;
  SignUpForm: undefined;
  Category: {
    name: string;
    email: string;
    date: Date;
    gender: string;
  };
  Sizes: {
    name: string;
    email: string;
    date: Date;
    gender: string;
    category: string;
  };
  Password: {
    name: string;
    email: string;
    date: Date;
    gender: string;
    category: string;
    height: string;
    weight: string;
  };
};
