import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { transformUserAuthToUserDocument } from "./transformers";

admin.initializeApp();

const db = admin.firestore();

export const createUserDocument = functions.auth.user().onCreate((user: admin.auth.UserRecord) => {
  console.info("Function Called: createUserDocument with data:", user);

  return db.collection("users").doc(user.uid).set(transformUserAuthToUserDocument(user));
});

export const deleteUserDocument = functions.auth.user().onDelete((user: admin.auth.UserRecord) => {
  console.info("Function Called: deleteUserDocument with data:", user);

  const doc = db.collection("users").doc(user.uid);

  return doc.delete();
});
