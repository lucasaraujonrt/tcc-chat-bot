import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensionsService';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { color, font } from '@mobile/config/theme.json';
import Arrow from '@mobile/assets/svg/header/ic_arrow_back.svg';
import SendMessage from '@mobile/assets/svg/chat/ic_sendMessage.svg';

interface IProps {
  isSender?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${color.primary};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  padding-vertical: ${Window.heightScale(0.035)}px;
  align-items: center;
`;

export const IconArrow = styled(Arrow)``;

export const WrapperGoBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;
  margin-left: ${Window.widthScale(0.04)}px;
`;

export const WrapperTony = styled.View`
  margin-left: ${Window.widthScale(0.1)}px;
`;

export const TonyImage = styled.Image.attrs({
  resizeMode: 'contain',
})``;

export const WrapperTonyInfo = styled.View`
  flex-direction: column;
  margin-left: ${Window.widthScale(0.1)}px;
`;

export const TonyName = styled.Text`
  font-family: ${font.bold};
  color: ${color.cream};
  font-size: ${Window.fontScale(16)}px;
`;

export const TonyStatus = styled.Text`
  font-family: ${font.regular};
  color: ${color.cream};
  font-size: ${Window.fontScale(10)}px;
`;

export const WrapperHelp = styled.View`
  margin-left: ${Window.widthScale(0.3)}px;
`;

export const IconHelp = styled(MaterialIcons).attrs({
  name: 'info-outline',
  color: color.cream,
  size: 32,
})``;

// chats style

export const WrapperChat = styled.ScrollView`
  width: 100%;
`;

export const PageContainerView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${`${Window.winHeight * 0.9 - 1}px`};
  width: 100%;
  background-color: ${color.cream};
  border-top-left-radius: ${Window.widthScale(0.07)}px;
  border-top-right-radius: ${Window.widthScale(0.07)}px;
`;

export const WrapperDateDivisor = styled.View`
  align-self: center;
`;

export const DateDivisor = styled.Text`
  font-family: ${font.regular};
  font-size: ${`${Window.winHeight * 0.02}px`};
  line-height: ${`${Window.winHeight * 0.025}px`};
  color: ${color.baby_gray};
  text-align: center;
  margin: 1% 5%;
`;

export const ChatMessageView = styled.View`
  flex-direction: row;
  align-self: ${(props: IProps) =>
    props.isSender ? 'flex-end' : 'flex-start'};
`;

export const ChatMessageTimeText = styled.Text`
  font-family: ${font.medium};
  font-size: ${`${Window.winHeight * 0.015}px`};
  line-height: ${`${Window.winHeight * 0.02}px`};
  color: ${color.baby_gray};
  align-self: flex-end;
  margin-bottom: 2%;
  margin-right: ${(props: IProps) => (props.isSender ? '2%' : '0')};
  margin-left: ${(props: IProps) => (props.isSender ? '0' : '2%')};
`;

export const OtherUserMessageContainer = styled.View`
  margin: 2% 2%;
  background-color: ${color.rose_quartz};
  margin-left: 6%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  max-width: 75%;
`;

export const MineMessage = styled.Text`
  padding: 2% 5%;
  font-family: ${font.regular};
  font-size: ${`${Window.winHeight * 0.019}px`};
  line-height: ${`${Window.winHeight * 0.03}px`};
  color: ${color.white};
`;

export const MineMessageContainer = styled.View`
  margin: 2%;
  background-color: ${color.rose_quartz};
  margin-left: 2%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const OtherUserMessage = styled.Text`
  padding: 2% 5%;
  font-family: ${font.regular};
  font-size: ${`${Window.winHeight * 0.019}px`};
  line-height: ${`${Window.winHeight * 0.03}px`};
  color: ${color.primary};
`;

export const WrapperChatContainer = styled.View`
  flex-direction: row;
  padding: ${`${Window.heightScale(0.01)}px`} ${`${Window.widthScale(0.01)}px`};
  align-items: center;
  width: 100%;
`;

export const ChatInput = styled.TextInput.attrs({
  placeholderTextColor: color.dark_gray,
})`
  background-color: ${color.rose_quartz};
  border-radius: 500px;
  width: 88%;
  max-height: ${Window.winHeight * 0.1};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${Window.widthScale(0.025)}px;
  color: ${color.dark_gray};
  font-family: ${font.medium};
`;

export const WrapperSendButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: ${Window.widthScale(0.1)}px;
  height: ${Window.heightScale(0.05)}px;
  background-color: ${color.second};
  border-radius: ${Window.winHeight * 0.025}px;
  margin-left: ${Window.widthScale(0.01)}px;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

export const IconSendMessage = styled(SendMessage)``;
