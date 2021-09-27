import React from 'react';

import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Container} from './styles';

interface DescriptionProps {}

function Description() {
  const {t} = useTranslation();
  return <Container>{t('Hello to React')}</Container>;
}

export default Description;
