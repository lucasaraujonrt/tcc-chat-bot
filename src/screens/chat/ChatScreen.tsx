import React, { useState, useEffect, useRef } from 'react';
import { NativeScrollEvent, ScrollView, LogBox, Keyboard } from 'react-native';
import moment from 'moment-timezone';
import { ChatService } from '@mobile/services/chat-manager';
import navigationService from '@mobile/services/navigationService';
import * as MessageService from '@mobile/services/message';
import Tony from '@mobile/assets/images/tony.png';

import useReduxState from '@mobile/hooks/useReduxState';
import * as S from './ChatScreen.style';

LogBox.ignoreAllLogs();

moment.locale('pt-BR');

const ChatScreen: React.FC = () => {
  const ref = useRef<ScrollView | null>(null);
  const [lastItemYPosition, setLastItemYPosition] = useState(0);
  const [lastItemIndex, setLastItemIndex] = useState(0);
  const [messages, setMessage] = useState<any>([]);
  const [scrollToBottom, setScrollToBottom] = useState<boolean>(true);
  const [userUID, setUserUID] = useState<any>('');
  const [messageInput, setMessageInput] = useState('');
  const firebaseId = useReduxState().user.me?.firebaseToken;

  useEffect(() => {
    const getChatMessage = async () => {
      const chatMessage = await ChatService.getChatMessage(
        '-MXrRNMayobXVhTr2KmV'
      );
      setUserUID('XJokcueMHPcbT4UcNlCpAVlQqfo2');
      setMessage(chatMessage);
    };

    const subscribeChatMessage = async () => {
      await ChatService.subscribeOnChatMessages(
        '-MXrRNMayobXVhTr2KmV',
        (snapshot) => {
          if (!messages.some((message: any) => message.id === snapshot.id)) {
            const payload = {
              messages: [...messages, snapshot],
            };
            setMessage(payload);
            setScrollToBottom(true);
          }
        }
      );
    };

    getChatMessage();
    // subscribeChatMessage();
  }, [firebaseId, messages]);

  const isCloseToTop = ({
    layoutMeasurement,
    contentOffset,
  }: NativeScrollEvent) =>
    layoutMeasurement.height + contentOffset.y <= layoutMeasurement.height;

  const scrollViewPosition = (
    lastItemPosition: number,
    checkScrollToBottom: boolean
  ) => {
    if (checkScrollToBottom) {
      ref.current?.scrollToEnd({ animated: true });
    } else {
      ref.current?.scrollTo({ y: lastItemPosition });
    }
  };

  const renderDateDivisor = (index: number, message: any, chatList: any) => {
    let response = false;
    if (index === 0) {
      response = true;
    } else if (
      !moment(message.sendAtFormatted).isSame(
        chatList[index - 1].sendAtFormatted,
        'day'
      )
    ) {
      response = true;
    }
    return response;
  };

  const onReachTop = () => {};

  const handleSendMessage = async () => {
    if (messageInput.trim() !== '') {
      setMessageInput('');
      Keyboard.dismiss();
      await ChatService.createChatMessage({
        myUID: userUID,
        chatId: '-MXrRNMayobXVhTr2KmV',
        content: messageInput,
        idSender: userUID,
      });
    } else {
      MessageService.message('Digite alguma coisa para enviar a mensagem');
    }
  };

  return (
    <>
      <S.Container>
        <S.WrapperHeader>
          <S.WrapperGoBack onPress={navigationService.back}>
            <S.IconArrow />
          </S.WrapperGoBack>
          <S.WrapperTony>
            <S.TonyImage source={Tony} />
          </S.WrapperTony>
          <S.WrapperTonyInfo>
            <S.TonyName>Tony IA</S.TonyName>
            <S.TonyStatus>Online </S.TonyStatus>
          </S.WrapperTonyInfo>
          <S.WrapperHelp>
            <S.IconHelp />
          </S.WrapperHelp>
        </S.WrapperHeader>
        <S.PageContainerView>
          <S.WrapperChat
            ref={ref}
            onContentSizeChange={() =>
              scrollViewPosition(lastItemYPosition, scrollToBottom)
            }
            onScroll={({ nativeEvent }) => {
              if (isCloseToTop(nativeEvent)) {
                onReachTop();
              }
            }}
          >
            {messages.length > 0
              ? messages.map((message: any, index: number) => (
                  <>
                    {renderDateDivisor(index, message, messages) && (
                      <S.WrapperDateDivisor>
                        <S.DateDivisor>
                          {moment(message.sendAtFormatted)
                            .format('ddd[, ]DD[ ]MMM')
                            .toLocaleUpperCase()}
                        </S.DateDivisor>
                      </S.WrapperDateDivisor>
                    )}
                    <S.ChatMessageView
                      key={index.toString()}
                      isSender={userUID === message.idSender}
                      onLayout={(event) => {
                        if (index === lastItemIndex) {
                          setLastItemIndex(event.nativeEvent.layout.y);
                        }
                      }}
                    >
                      {userUID === message.idSender ? (
                        <>
                          <S.ChatMessageTimeText
                            isSender={userUID === message.idSender}
                          >
                            {moment(message.sendAtFormatted).format('H[:]mm')}
                          </S.ChatMessageTimeText>
                          <S.OtherUserMessageContainer>
                            <S.MineMessage>{message.content}</S.MineMessage>
                          </S.OtherUserMessageContainer>
                        </>
                      ) : (
                        <>
                          <S.MineMessageContainer>
                            <S.OtherUserMessage>
                              {message.content}
                            </S.OtherUserMessage>
                          </S.MineMessageContainer>
                          <S.ChatMessageTimeText
                            isSender={userUID === message.idSender}
                          >
                            {moment(message.sendAtFormatted).format('H[:]mm')}
                          </S.ChatMessageTimeText>
                        </>
                      )}
                    </S.ChatMessageView>
                  </>
                ))
              : null}
          </S.WrapperChat>
          <S.WrapperChatContainer>
            <S.ChatInput
              value={messageInput}
              onChangeText={setMessageInput}
              placeholder="Digite sua mensagem aqui"
              multiline
              maxLength={200}
            />
            <S.WrapperSendButton>
              <S.IconSendMessage onPress={handleSendMessage} />
            </S.WrapperSendButton>
          </S.WrapperChatContainer>
        </S.PageContainerView>
      </S.Container>
    </>
  );
};

export default ChatScreen;
