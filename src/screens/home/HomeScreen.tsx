import React, { useEffect } from 'react';
import { HomeFirstRow, HomeSecondRow } from '@mobile/helpers/array/home';
import navigationService from '@mobile/services/navigationService';
import useReduxState from '@mobile/hooks/useReduxState';
import { useDispatch } from 'react-redux';
import { loginFirebase } from '@mobile/store/actions/auth';
import { useNavigation } from '@react-navigation/native';
import { BoxShadow } from 'react-native-shadow';
import * as Dimensions from '@mobile/services/dimensionsService';
import * as S from './HomeScreen.style';

const Home: React.FC = () => {
  const { me } = useReduxState().user;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('entruie');
      dispatch(loginFirebase());
    });
  }, [dispatch, navigation]);

  const test = () => {
    dispatch(loginFirebase());
  };

  const shadowOpt = {
    width: Dimensions.widthScale(0.35),
    height: Dimensions.heightScale(0.18),
    color: '#FF8976',
    border: 15,
    radius: 10,
    opacity: 0.09,
    x: 4,
    y: 4,
  };

  const shadowChat = {
    width: Dimensions.widthScale(0.8),
    height: Dimensions.heightScale(0.17),
    color: '#FF8976',
    border: 15,
    radius: 10,
    opacity: 0.09,
    x: 4,
    y: 4,
  };

  return (
    <S.Container>
      <S.HeaderHome>
        <S.WrapperLogo />
        <S.WrapperIconNotification onPress={test}>
          <S.IconNotification />
          <S.BadgeNotification>
            <S.BadgeCount>10</S.BadgeCount>
          </S.BadgeNotification>
        </S.WrapperIconNotification>
      </S.HeaderHome>
      <S.WrapperMe>
        <S.TextMe fontMe>{me?.name}</S.TextMe>
        <S.TextMe>O que deseja fazer hoje?</S.TextMe>
      </S.WrapperMe>
      <S.WhiteBackground>
        <BoxShadow setting={shadowChat}>
          <S.WrapperBot onPress={() => navigationService.navigate('chat')}>
            <S.WrapperIconBot>
              <S.IconBot />
            </S.WrapperIconBot>
            <S.TextHome>Chatbot</S.TextHome>
          </S.WrapperBot>
        </BoxShadow>
        <S.WrapperRows>
          {HomeFirstRow.map((item) => (
            <BoxShadow setting={shadowOpt}>
              <S.SquareContainer
                key={item.id}
                onPress={() => navigationService.navigate(item.navigation)}
              >
                <S.WrapperSquareIcon>{item.icon}</S.WrapperSquareIcon>
                <S.SquareText>{item.name}</S.SquareText>
              </S.SquareContainer>
            </BoxShadow>
          ))}
        </S.WrapperRows>
        <S.WrapperRows>
          {HomeSecondRow.map((item) => (
            <BoxShadow setting={shadowOpt}>
              <S.SquareContainer
                key={item.id}
                onPress={() => navigationService.navigate(item.navigation)}
              >
                <S.WrapperSquareIcon>{item.icon}</S.WrapperSquareIcon>
                <S.SquareText>{item.name}</S.SquareText>
              </S.SquareContainer>
            </BoxShadow>
          ))}
        </S.WrapperRows>
      </S.WhiteBackground>
    </S.Container>
  );
};

export default Home;
