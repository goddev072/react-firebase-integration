/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import express from 'express';
import firebase from 'firebase-admin';

import api from './graphql';
import ssr from './ssr';

// JSON key with service account credentials
// https://firebase.google.com/docs/admin/setup
if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_KEY),
    ),
  });
}

const app = express();

app.use(api); // GraphQL API
app.use(ssr); // Server-side rendering

export default app;
