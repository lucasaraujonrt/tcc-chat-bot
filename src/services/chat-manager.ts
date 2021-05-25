import moment from 'moment-timezone';
import realTime from './firebase-settings';

const realTimeManager = {
  findUser: async (name: any) => {
    const user = await realTime
      .database()
      .ref('users')
      .orderByChild('name')
      .equalTo(name)
      .once('value');

    if (user.exists()) {
      return Object.values(user.val())[0];
    }

    return null;
  },

  saveUser: async (user: any) => {
    realTime.database().ref('users').push(user);
  },

  saveMessage: async (message: any) => {
    realTime.database().ref('messages').push(message);
  },

  updateMessages: async (callback: any) => {
    realTime
      .database()
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
  const message = { _id, createdAt, text, user };
  return message;
};

export const sanitizeObjectToArray = (obj: any) => {
  const verify = !obj || !obj.length <= 0;
  if (verify) return [];

  return Object.entries(obj)
    .sort()
    .map((item: any) => ({
      id: item[0],
      ...item[1],
    }));
};

export const getParticipantUID = (userUID: string, participants: any) => {
  return Object.keys(participants).filter((i) => i !== userUID);
};

export class ChatService {
  static async getChat(chatId: string) {
    try {
      const chat = await realTime
        .database()
        .ref(`/chats/${chatId}`)
        .once('value');

      return chat.val();
    } catch (error) {
      console.log('ChatService.getChat', error);
    }
  }

  static async getChatMessage(
    chatId: string,
    endAt: string = moment().format('X'),
    limit: number = 15
  ) {
    try {
      const messages = await realTime
        .database()
        .ref(`messages/${chatId}`)
        .orderByChild('sendAt')
        .endAt(endAt)
        .limitToLast(limit)
        .once('value');

      return sanitizeObjectToArray(messages.val());
    } catch (error) {
      console.log('ChatService.getChatMessage', error);
    }
  }
}

export default realTimeManager;
