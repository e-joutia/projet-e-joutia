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

## Screenshots



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
