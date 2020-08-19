import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, request } from 'react-native-permissions';

import api from '../../services/api';

const Home: React.FC = () => {
  useEffect(() => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((permissionState) => {
        if (permissionState !== 'granted') {
          return request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
            message:
              'Precisamos de acesso à sua localização para exibir a previsão do tempo corretamente',
            buttonPositive: 'Autorizar acesso',
            buttonNegative: 'Não autorizar',
            title: 'Acesso à sua localização',
          });
        }

        return permissionState;
      })
      .then((permissionState) => {
        if (permissionState === 'granted') {
          Geolocation.getCurrentPosition(
            (result) => {
              console.log(result);
            },
            (error) => console.error(error),
            {
              timeout: 10000,
              enableHighAccuracy: false,
            },
          );
        }
      });
  }, []);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default Home;
