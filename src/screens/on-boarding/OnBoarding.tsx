import React, { useRef, useState } from 'react';
import Pager from 'react-native-pager-view';
import CleanUp from '@mobile/assets/svg/on-boarding/img_clean_up.svg';
import Delivery from '@mobile/assets/svg/on-boarding/img_delivery.svg';
import Mobile from '@mobile/assets/svg/on-boarding/img_mobile.svg';
import navigationService from '@mobile/services/navigationService';
import * as S from './OnBoarding.style';
import Paper from './paper/PaperComponent';

const OnBoarding: React.FC = () => {
  const [, setPosition] = useState(0);
  const [index, setIndex] = useState(0);
  const pagerRef = useRef<Pager>(null);

  const onHandlePress = () => {
    pagerRef?.current?.setPage(index + 1);
    setIndex(index + 1);
    if (index >= 2) {
      navigationService.reset({ index: 0, routes: [{ name: 'login' }] });
    }
  };

  return (
    <>
      <S.Container>
        <Pager
          initialPage={index}
          onPageSelected={(e) => setPosition(e.nativeEvent.position)}
          onPageScroll={(e) => setPosition(e.nativeEvent.position)}
          ref={pagerRef}
          showPageIndicator
          orientation="horizontal"
          overScrollMode="never"
          offscreenPageLimit={2}
        >
          <Paper
            key={0}
            title="Servilities"
            icon={<CleanUp />}
            description="Boas vindas! Aqui você poderá conversar com Tony, o nosso chatbot! Ele irá te ajudar em diversas situações, visando trazer praticidade para o seu dia-a-dia!"
          />
          <Paper
            key={1}
            title="Servilities"
            icon={<Delivery />}
            description="Conversando com o Tony, seu atendimento será facilitado, para você conseguir agendar diversos tipos de serviços, sem perder o seu tempo preenchendo formulários!"
          />
          <Paper
            key={2}
            title="Servilities"
            icon={<Mobile />}
            description="Descubra as novas possibilidades com o nosso app! Bora começar?"
          />
        </Pager>
        <S.WrapperButtons>
          <S.WrapperLink onPress={() => navigationService.navigate('login')}>
            <S.Link>PULAR</S.Link>
          </S.WrapperLink>
          <S.ButtonBall onPress={onHandlePress}>
            {index >= 2 ? <S.TextStart>Começar</S.TextStart> : <S.IconArrow />}
          </S.ButtonBall>
        </S.WrapperButtons>
      </S.Container>
    </>
  );
};

export default OnBoarding;
