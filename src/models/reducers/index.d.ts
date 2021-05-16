export as namespace reducers;

export type AuthState = {
  authenticated: {
    accessToken: string | null;
    refreshToken: string | null;
  };
  logged: boolean | null;
};

export type UserState = {
  user: string | null;
};

export type LoadingState = {
  loading: number;
};

export type ReduxState = {
  auth: AuthState;
  loading: LoadingState;
  user: UserState;
};
