/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.privatize = functions.https.onRequest((request, response) => {
  admin.database().ref('/users').once('value').then(users => {
    users.forEach(user => {
      user.child('shared').forEach(shared => {
        if (shared.val().shared) {
          shared.ref.remove();
        }
      });
      user.child('profile').forEach(profile => {
        profile.ref.remove();
      });
    });
  }).then(() => {
    response.send("ok!");
  });
});


