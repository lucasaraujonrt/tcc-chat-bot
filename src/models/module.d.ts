export as namespace models;

export type AuthRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string | null;
  refreshToken: string | null;
};
