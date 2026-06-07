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

import { schemaInscription } from '../validation/schemas';

export default function EcranInscription({ navigation }) {
  const inscription = async () => {
    await AsyncStorage.setItem('token', 'utilisateur_connecte');
    navigation.replace('Profil');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={70}
          color="#2E7D32"
        />

        <Text style={styles.logo}>e-joutia</Text>

        <Text style={styles.slogan}>
          Rejoignez la communauté
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titre}>Inscription</Text>

        <Formik
          initialValues={{
            username: '',
            ville: '',
            email: '',
            password: '',
          }}
          validationSchema={schemaInscription}
          onSubmit={inscription}
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
                placeholder="Nom d'utilisateur"
                style={styles.input}
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
              />

              {touched.username && errors.username && (
                <Text style={styles.erreur}>
                  {errors.username}
                </Text>
              )}

              <TextInput
                placeholder="Ville de résidence"
                style={styles.input}
                value={values.ville}
                onChangeText={handleChange('ville')}
                onBlur={handleBlur('ville')}
              />

              {touched.ville && errors.ville && (
                <Text style={styles.erreur}>
                  {errors.ville}
                </Text>
              )}

              <TextInput
                placeholder="Adresse e-mail"
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />

              {touched.email && errors.email && (
                <Text style={styles.erreur}>
                  {errors.email}
                </Text>
              )}

              <TextInput
                placeholder="Mot de passe"
                secureTextEntry
                style={styles.input}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />

              {touched.password && errors.password && (
                <Text style={styles.erreur}>
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity
                style={styles.bouton}
                onPress={handleSubmit}
              >
                <Text style={styles.texteBouton}>
                  S'inscrire
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Connexion')
                }
              >
                <Text style={styles.lien}>
                  Déjà un compte ? Se connecter
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
    backgroundColor: '#FFC107',
    paddingVertical: 17,
    borderRadius: 18,
    marginTop: 10,
  },

  texteBouton: {
    color: '#222',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },

  lien: {
    textAlign: 'center',
    marginTop: 22,
    color: '#2E7D32',
    fontWeight: '700',
    fontSize: 15,
  },
});