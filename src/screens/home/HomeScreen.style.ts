import styled from 'styled-components/native';
import Bot from '@mobile/assets/svg/home/ic_bot.svg';
import Notification from '@mobile/assets/svg/home/ic_notification.svg';
import { color, font } from '@mobile/config/theme.json';
import * as Dimensions from '@mobile/services/dimensionsService';

interface IProps {
  fontMe?: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${color.primary};
`;

export const HeaderHome = styled.View`
  width: ${Dimensions.widthScale(1)}px;
  margin-top: ${Dimensions.heightScale(0.02)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperLogo = styled.View`
  padding: 5%;
  width: ${Dimensions.widthScale(0.5)}px;
`;

export const WrapperIconNotification = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: ${Dimensions.widthScale(0.2)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const IconNotification = styled(Notification).attrs({
  width: Dimensions.widthScale(0.09),
  height: Dimensions.heightScale(0.09),
  fill: color.cream,
})``;

export const BadgeNotification = styled.View`
  background-color: ${color.black};
  padding: 5%;
  width: ${Dimensions.widthScale(0.05)}px;
  border-radius: ${Dimensions.heightScale(0.1)}px;
  top: -${Dimensions.heightScale(0.015)}px;
  right: ${Dimensions.widthScale(0.02)}px;
  justify-content: center;
  align-items: center;
`;

export const BadgeCount = styled.Text`
  color: ${color.cream};
  font-family: ${font.medium};
  font-size: ${Dimensions.fontScale(8)}px;
`;

export const WrapperMe = styled.View`
  flex-direction: column;
  width: ${Dimensions.widthScale(0.7)}px;
  margin-left: ${Dimensions.widthScale(0.1)}px;
`; 

export const TextMe = styled.Text`
  color: ${color.cream};
  font-family: ${font.medium};
  line-height: ${Dimensions.heightScale(0.05)}px;
  font-size: ${({ fontMe }: IProps ) => (fontMe ? Dimensions.fontScale(24) : Dimensions.fontScale(16))}px;
`;

export const WhiteBackground = styled.View`
  background-color: ${color.cream};
  margin-top: ${Dimensions.heightScale(0.05)}px;
  width: ${Dimensions.widthScale(1)}px;
  height: ${Dimensions.heightScale(0.9)}px;
  border-top-left-radius: ${Dimensions.widthScale(0.06)}px;
  border-top-right-radius: ${Dimensions.widthScale(0.06)}px;
  align-items: center;
`;

export const WrapperBot = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: ${Dimensions.widthScale(0.8)}px;
  margin-top: ${Dimensions.heightScale(0.05)}px;
  flex-direction: row;
  padding: 5% 0;
  align-items: center;
  border-radius: ${Dimensions.heightScale(0.02)}px;
  background-color: ${color.rose_quartz};
`;

export const WrapperIconBot = styled.View`
  width: 40%;
  align-items: center;
`;

export const IconBot = styled(Bot)``;

export const TextHome = styled.Text`
  width: 40%;
  color: ${color.black};
  font-family: ${font.medium};
  font-size: ${Dimensions.fontScale(22)}px;
  text-align: center;
`;

export const WrapperRows = styled.View`
  margin-top: ${Dimensions.heightScale(0.05)}px;
  width: ${Dimensions.widthScale(0.8)}px;
  flex-direction: row;
  justify-content: space-between;
`; 

export const SquareContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.widthScale(0.35)}px;
  height: ${Dimensions.heightScale(0.18)}px;
  border-radius: ${Dimensions.heightScale(0.02)}px;
  background-color: ${color.rose_quartz};
`;

export const WrapperSquareIcon = styled.View`
  padding-bottom: ${Dimensions.heightScale(0.01)}px;
`;

export const SquareText = styled.Text`
  color: ${color.black};
  font-family: ${font.medium};
  font-size: ${Dimensions.fontScale(16)}px;
  text-align: center;
`;