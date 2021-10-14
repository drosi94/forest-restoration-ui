export type UserDocument = {
  email?: string;
  emailVerified?: boolean;
  username?: string;
  displayName?: string;
  photoURL?: string;
  birthDate?: number | null;
  hasCompleteProfile?: boolean;
};
