import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

export const sendWelcomeEmail = (
  userId: string,
  displayName = ""
): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>> => {
  return db.collection("mails").add({
    toUids: [userId],
    template: {
      name: "welcome_el",
      data: {
        displayName,
      },
    },
  });
};
