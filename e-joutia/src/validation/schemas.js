import * as Yup from 'yup';

export const schemaConnexion = Yup.object({
  email: Yup.string()
    .email('Email invalide')
    .required('Email obligatoire'),

  password: Yup.string()
    .min(6, 'Minimum 6 caractères')
    .required('Mot de passe obligatoire'),
});

export const schemaInscription = Yup.object({
  username: Yup.string()
    .required('Nom utilisateur obligatoire'),

  ville: Yup.string()
    .required('Ville obligatoire'),

  email: Yup.string()
    .email('Email invalide')
    .required('Email obligatoire'),

  password: Yup.string()
    .min(6, 'Minimum 6 caractères')
    .required('Mot de passe obligatoire'),
});