# e-joutia – Authentication & User Profile Module

## Project Description

This project is part of the e-joutia marketplace application. It focuses on building a secure authentication system and a public user profile module, which are essential to ensure trust between users.

The module allows users to register, log in, and access a public profile that displays personal information, reviews, and trust indicators.

---

## Objectives

- Implement a secure authentication system (sign up / login)
- Manage user session persistence
- Display a public seller profile
- Improve trust between users using ratings and badges

---

## Screenshots

<img width="300" height="560" alt="Image" src="https://github.com/user-attachments/assets/eab8128b-1e97-419a-8d32-41f1e32b150c" />
<img width="300" height="560" alt="Image" src="https://github.com/user-attachments/assets/dbc19d7b-0bbd-4770-b0cb-937ec330648c" />
<img width="300" height="560" alt="Image" src="https://github.com/user-attachments/assets/ac9f2fd6-2753-4b2c-9bbc-446a39561522" />
<img width="300" height="560" alt="Image" src="https://github.com/user-attachments/assets/4d4223cf-a3dd-47e6-99e4-45f91e7d8fd8" />
<img width="300" height="560" alt="Image" src="https://github.com/user-attachments/assets/e7a973f6-e951-4d68-93a7-bed0264e21b6" />
<img width="300" height="560" alt="Image" src="https://github.com/user-attachments/assets/1d229a03-dd7e-4118-9acc-52d32d5632f7" />

## Features

### Authentication

- Login and registration screens
- Fields:
  - Email
  - Password
  - Username
  - City
- Real-time validation:
  - Valid email format
  - Minimum password length (6 characters)

---

### Public Profile (Seller View)

- Profile picture
- Username
- City
- Registration date

Reviews section:
- Average rating out of 5 stars
- List of sample comments

Trust badges:
- Verified profile
- Fast responder badge
- Other trust indicators

---

## Technical Stack

- React Native (Expo)
- React Navigation (Stack Navigation)
- Formik / React Hook Form
- Yup (validation)
- AsyncStorage (session persistence)

---

## Navigation Flow

Authentication flow:

Login / Register → Main App → Profile Screen

---

## Installation

```bash
git clone <repository-url>
cd e-joutia
npm install
npx expo start
```

## Authors

- Zineb Khbiaz
- Aya lmasoudi
