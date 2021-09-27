import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {useTranslation} from 'react-i18next';
import Description from './components/Description/index';
const App = () => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView>
      <Description />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('pt')}
          style={{
            padding: 16,
            margin: 16,
            backgroundColor: '#f19000',
          }}>
          <Text>Traduzir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 16,
            margin: 16,
            backgroundColor: '#f1cc15',
          }}
          onPress={() => i18n.changeLanguage('en')}>
          <Text>Translate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
