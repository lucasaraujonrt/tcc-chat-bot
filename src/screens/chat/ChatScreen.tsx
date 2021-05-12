import React, { useState, useEffect } from 'react';
import ptBr from 'dayjs/locale/pt-br';
import {
  GiftedChat,
  Send,
  Message,
  MessageText,
} from 'react-native-gifted-chat';
import realTimeManager from '@mobile/services/chat-manager';
import { useSelector } from 'react-redux';
import * as S from './ChatScreen.style';

const ChatScreen: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    realTimeManager.updateMessages((message: any) => {
      setMessages((prevState) => GiftedChat.append(prevState, message));
    });
  }, []);

  const onSend = async (msgs: any) => {
    msgs.forEach((element: any) => {
      const { text, user } = element;
      const message = { text, user, createdAt: new Date().getTime() };
      realTimeManager.saveMessage(message);
    });
  };

  // const renderSend = (props: any) => {
  //   return (
  //     <Send
  //       {...props}
  //       containerStyle={styles.sendContainer}
  //     >
  //       <SendIcon width={22.7} height={22.38} />
  //     </Send>
  //   );
  // }

  return (
    <GiftedChat
      messages={messages}
      user={user}
      placeholder="Digite sua mensagem aqui"
      onSend={onSend}
      locale={ptBr}
      textInputStyle={S.InputStyle}
      showAvatarForEveryMessage
      showUserAvatar
      renderUsernameOnMessage
      // renderMessage={renderMessage}
      // renderMessageText={renderMessageText}
    />
  );
};

export default ChatScreen;
