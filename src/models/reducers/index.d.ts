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
  me: models.MeResponse | null;
};

export type LoadingState = {
  loading: number;
};

export type ReduxState = {
  auth: AuthState;
  loading: number | boolean;
  user: UserState;
};
