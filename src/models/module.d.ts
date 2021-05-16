export as namespace models;

export type AuthRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string | null;
  refreshToken: string | null;
};

export type ChangePasswordRequest = {
  changeToken: string | null;
  email: string | null;
  password: string | null;
};
