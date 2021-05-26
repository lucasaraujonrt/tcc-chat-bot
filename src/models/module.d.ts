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

export type MeResponse = {
  name: string;
  email: string;
  cellphone: string;
  profileType: number;
};

export type CreateChatType = {
  myUID: string;
  chatId: string;
  content: string;
  idSender: string;
};
