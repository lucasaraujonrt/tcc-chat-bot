import React, { useState, useEffect, useRef } from 'react';
import { NativeScrollEvent, ScrollView } from 'react-native';
import realTimeManager from '@mobile/services/chat-manager';
import navigationService from '@mobile/services/navigationService';
import moment from 'moment-timezone';
import Tony from '@mobile/assets/images/tony.png';

import * as S from './ChatScreen.style';

const ChatScreen: React.FC = () => {
  const ref = useRef<ScrollView | null>(null);
  const [lastItemYPosition, setLastItemYPosition] = useState(0);
  const [scrollToBottom, setScrollToBottom] = useState<boolean>(true);

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
              }
            }}
          >
            <S.WrapperDateDivisor>
              <S.DateDivisor>
                {moment(new Date())
                  .format('ddd[, ]DD[ ]MMM')
                  .toLocaleUpperCase()}
              </S.DateDivisor>
            </S.WrapperDateDivisor>
          </S.WrapperChat>
        </S.PageContainerView>
      </S.Container>
    </>
  );
};

export default ChatScreen;
