import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EcranConnexion from '../ecrans/EcranConnexion';
import EcranInscription from '../ecrans/EcranInscription';
import EcranProfil from '../ecrans/EcranProfil';

const Stack = createNativeStackNavigator();

export default function NavigateurApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Connexion"
          component={EcranConnexion}
        />

        <Stack.Screen
          name="Inscription"
          component={EcranInscription}
        />

        <Stack.Screen
          name="Profil"
          component={EcranProfil}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}