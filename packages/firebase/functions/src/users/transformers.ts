import { auth } from "firebase-admin";
import { UserDocument } from "./models";

export const transformUserAuthToUserDocument = (user: auth.UserRecord): UserDocument => {
  const { displayName, email, emailVerified, photoURL } = user;
  return {
    displayName,
    emailVerified,
    email,
    photoURL,
    username: "",
    birthDate: null
  };
};
