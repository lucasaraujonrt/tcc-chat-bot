import getInstance from '@mobile/api/instance';

const baseUrl: string = '/auth';
// const baseUrlChangePassword: string = '/password-recovery';
// const baseUrlPasswordRecovery: string = '/password-recovery';

const AuthApi = {
  login: async (userData: models.AuthRequest) => {
    const instance = await getInstance();
    const { data } = await instance.post(baseUrl, userData);

    return data as models.AuthResponse;
  },

  changePassword: async (email: string) => {
    const instance = await getInstance();
    const { data } = await instance.post(`${baseUrl}/password-recovery`, {
      email,
    });

    return data;
  },

  passwordRecovery: async (payload: models.ChangePasswordRequest) => {
    const instance = await getInstance();
    const { data } = await instance.post(
      `${baseUrl}/recover-password`,
      payload
    );

    return data;
  },
};

export default AuthApi;
