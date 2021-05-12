import React from 'react';
import { HomeFirstRow , HomeSecondRow } from '@mobile/helpers/array/home';
import navigationService from '@mobile/services/navigationService';
import * as S from './HomeScreen.style';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderHome>
        <S.WrapperLogo></S.WrapperLogo>
        <S.WrapperIconNotification>
          <S.IconNotification />
          <S.BadgeNotification>
            <S.BadgeCount>10</S.BadgeCount>
          </S.BadgeNotification>
        </S.WrapperIconNotification>
      </S.HeaderHome>
      <S.WrapperMe>
        <S.TextMe fontMe>Olá, Lucas!</S.TextMe>
        <S.TextMe>O que deseja fazer hoje?</S.TextMe>
      </S.WrapperMe>
      <S.WhiteBackground>
        <S.WrapperBot onPress={() => navigationService.navigate('dummy')}>
          <S.WrapperIconBot>
            <S.IconBot />
          </S.WrapperIconBot>
          <S.TextHome>Chatbot</S.TextHome>
        </S.WrapperBot>
        <S.WrapperRows>
          {HomeFirstRow.map((item) => (
            <S.SquareContainer key={item.id} onPress={() => navigationService.navigate(item.navigation)}>
              <S.WrapperSquareIcon>
                {item.icon}
              </S.WrapperSquareIcon>
              <S.SquareText>
                {item.name}
              </S.SquareText>
            </S.SquareContainer>
          ))}
        </S.WrapperRows>
        <S.WrapperRows>
          {HomeSecondRow.map((item) => (
            <S.SquareContainer key={item.id} onPress={() => navigationService.navigate(item.navigation)}>
              <S.WrapperSquareIcon>
                {item.icon}
              </S.WrapperSquareIcon>
              <S.SquareText>
                {item.name}
              </S.SquareText>
            </S.SquareContainer>
          ))}
        </S.WrapperRows>
      </S.WhiteBackground>
    </S.Container>
  );
}

export default Home;