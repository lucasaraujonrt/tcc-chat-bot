import realTime from './firebase-settings';

const realTimeManager = {
  findUser: async (name: any) => {
    const user = await realTime.database().ref('users').orderByChild('name').equalTo(name).once('value');

    if (user.exists()){
      return Object.values(user.val())[0];
    }

    return false;
  },

  saveUser: async (user: any) => {
    realTime.database().ref('users').push(user);
  },

  saveMessage: async (message: any) => {
    realTime.database().ref('messages').push(message);
  },

  updateMessages: async (callback: any) => {
    realTime.database()
      .ref('messages')
      .limitToLast(20)
      .on('child_added', (snapshot) => {
        callback(parse(snapshot));
      });
  },

};

const parse = (snapshot: any) => {
  const { createdAt, text, user } = snapshot.val();
  const { key: _id } = snapshot;
  const message = { _id, createdAt, text, user};
  return message;
};

export default realTimeManager;
