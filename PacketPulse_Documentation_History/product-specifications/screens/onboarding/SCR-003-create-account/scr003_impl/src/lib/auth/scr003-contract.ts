/** Integration contract for SCR-003. Implement these functions using PacketPulse's existing auth service. */
export type RegisterInput = {
  email: string;
  dateOfBirth: string; // YYYY-MM-DD; date-only, never a UTC timestamp
  password: string;
  termsAccepted: true;
  privacyNoticeVersion: string;
};

export type RegisterResult = { challengeId: string; maskedEmail: string };
export type ExperienceTrack = "fresher" | "experienced";

export interface Scr003AuthAdapter {
  register(input: RegisterInput): Promise<RegisterResult>;
  verifyEmail(input: { challengeId: string; code: string }): Promise<void>;
  resendCode(input: { challengeId: string }): Promise<RegisterResult>;
  changeEmail(input: { challengeId: string; email: string }): Promise<RegisterResult>;
  saveExperienceTrack(input: { track: ExperienceTrack }): Promise<void>;
}
