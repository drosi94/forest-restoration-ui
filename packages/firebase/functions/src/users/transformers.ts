import { auth } from "firebase-admin";
import { UserDocument } from "./models";

export const transformUserAuthToUserDocument = (user: auth.UserRecord): UserDocument => {
  const { displayName, email, photoURL } = user;
  return {
    displayName,
    email,
    photoURL,
    username: "",
    birthDate: null,
  };
};
