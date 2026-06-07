import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { schemaConnexion } from '../validation/schemas';

export default function EcranConnexion({ navigation }) {
  const connexion = async () => {
    await AsyncStorage.setItem('token', 'utilisateur_connecte');
    navigation.replace('Profil');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={70}
          color="#FFC107"
        />

        <Text style={styles.logo}>e-joutia</Text>

        <Text style={styles.slogan}>
          Achetez • Vendez • Échangez
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titre}>Connexion</Text>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schemaConnexion}
          onSubmit={connexion}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInput
                placeholder="Adresse e-mail"
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              {touched.email && errors.email && (
                <Text style={styles.erreur}>{errors.email}</Text>
              )}

              <TextInput
                placeholder="Mot de passe"
                secureTextEntry
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />

              {touched.password && errors.password && (
                <Text style={styles.erreur}>{errors.password}</Text>
              )}

              <TouchableOpacity
                style={styles.bouton}
                onPress={handleSubmit}
              >
                <Text style={styles.texteBouton}>
                  Se connecter
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Inscription')
                }
              >
                <Text style={styles.lien}>
                  Pas encore inscrit ? Créer un compte
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF8',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    fontSize: 42,
    fontWeight: '900',
    color: '#2E7D32',
    letterSpacing: 1,
  },

  slogan: {
    marginTop: 8,
    color: '#777',
    fontSize: 15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 25,
    elevation: 8,
  },

  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 25,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 15,
    marginBottom: 12,
    fontSize: 15,
  },

  erreur: {
    color: '#E53935',
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 13,
  },

  bouton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 17,
    borderRadius: 18,
    marginTop: 10,
  },

  texteBouton: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },

  lien: {
    textAlign: 'center',
    marginTop: 22,
    color: '#FFC107',
    fontWeight: '700',
    fontSize: 15,
  },
});