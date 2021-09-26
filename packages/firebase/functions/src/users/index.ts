import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { transformUserAuthToUserDocument } from "./transformers";
import { sendWelcomeEmail } from "../mails/helpers";

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user: admin.auth.UserRecord) => {
    console.info("Function Called: createUserDocument with data:", user);
    try {
      await sendWelcomeEmail(user.uid, user.displayName);
      return db.collection("users").doc(user.uid).set(transformUserAuthToUserDocument(user));
    } catch (err) {
      console.error("Function Error: createUserDocument with error:", err);
      throw err;
    }
  });

export const deleteUserDocument = functions.auth.user().onDelete((user: admin.auth.UserRecord) => {
  console.info("Function Called: deleteUserDocument with data:", user);

  const doc = db.collection("users").doc(user.uid);

  return doc.delete();
});
