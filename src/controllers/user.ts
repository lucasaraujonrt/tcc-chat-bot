import getInstance from '@mobile/api/instance';

const baseUrl: string = '/user/me';

const UserApi = {
  me: async () => {
    const instance = await getInstance();
    const { data } = await instance.get(baseUrl);

    return data as models.MeResponse;
  },
};

export default UserApi;
