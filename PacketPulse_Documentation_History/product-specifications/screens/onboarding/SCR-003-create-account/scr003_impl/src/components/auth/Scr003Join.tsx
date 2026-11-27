"use client";

import { FormEvent, useState } from "react";
import type { ExperienceTrack, Scr003AuthAdapter } from "@/lib/auth/scr003-contract";
import "./scr003-join.css";

type Props = {
  auth: Scr003AuthAdapter;
  termsUrl: string;
  privacyUrl: string;
  privacyNoticeVersion: string;
  signInUrl: string;
  recoveryUrl: string;
};

type Stage = "account" | "verify" | "experience";


/** SCR-003 UI. Auth/security decisions are delegated to the existing backend adapter. */
export default function Scr003Join(props: Props) {
  const [stage, setStage] = useState<Stage>("account");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState("");
  const [challengeId, setChallengeId] = useState("");
  const [maskedEmail, setMaskedEmail] = useState("");
  const [track, setTrack] = useState<ExperienceTrack | "">("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function ageIs18(date: string) {
    if (!date) return false;
    const birth = new Date(`${date}T00:00:00`);
    if (Number.isNaN(birth.getTime())) return false;
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const month = now.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && now.getDate() < birth.getDate())) age--;
    return age >= 18;
  }

  async function submitAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setNotice("");
    if (!email.trim() || !dob || !password || !terms) { setError("Complete each required field to continue."); return; }
    if (!ageIs18(dob)) { setError("PacketPulse is currently for adults aged 18 and above."); return; }
    setBusy(true);
    try {
      const result = await props.auth.register({
        email: email.trim(), dateOfBirth: dob, password, termsAccepted: true,
        privacyNoticeVersion: props.privacyNoticeVersion,
      });
      setChallengeId(result.challengeId); setMaskedEmail(result.maskedEmail); setStage("verify"); setCode("");
    } catch {
      // Adapter should return a safe, non-enumerating message; do not reveal account existence.
      setError("We couldn’t start registration. Check your details or try again.");
    } finally { setBusy(false); }
  }

  async function submitCode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setNotice("");
    if (!/^\d{6}$/.test(code)) { setError("Enter the six-digit code."); return; }
    setBusy(true);
    try { await props.auth.verifyEmail({ challengeId, code }); setStage("experience"); }
    catch { setError("That code couldn’t be verified. Check it or request a new one."); }
    finally { setBusy(false); }
  }

  async function resend() {
    setError(""); setNotice(""); setBusy(true);
    try { const result = await props.auth.resendCode({ challengeId }); setChallengeId(result.challengeId); setMaskedEmail(result.maskedEmail); setNotice("A new code has been requested."); }
    catch { setError("A new code isn’t available yet. Please wait or try again later."); }
    finally { setBusy(false); }
  }

  async function submitTrack() {
    if (!track) { setError("Choose the experience that best describes you."); return; }
    setError(""); setBusy(true);
    try { await props.auth.saveExperienceTrack({ track }); window.location.assign("/onboarding/personalise"); }
    catch { setError("We couldn’t save your selection. Please try again."); }
    finally { setBusy(false); }
  }

  return <main className="pp-join">
    <aside className="pp-join__brand" aria-label="PacketPulse">
      <a className="pp-join__wordmark" href="/">PacketPulse<span aria-hidden="true">•</span></a>
      <div className="pp-join__brand-copy">
        <p className="pp-join__eyebrow">Connect · Learn · Grow</p>
        <h1>Make your next step count.</h1>
        <p>Build skills, meet your people, and find opportunities.</p>
      </div>
      <div className="pp-join__illustration" aria-hidden="true">
        {/* Swap with the approved PP-PAT-002 SVG asset at integration. */}
        <svg viewBox="0 0 420 240" role="presentation">
          <g fill="none" stroke="currentColor" strokeOpacity=".38" strokeWidth="1.5"><path d="M40 170 115 105 205 155 300 65 380 120M115 105 145 35 300 65 335 205 205 155 145 35M40 170 145 205 205 155"/></g>
          <g fill="currentColor"><circle cx="40" cy="170" r="5"/><circle cx="115" cy="105" r="7"/><circle cx="145" cy="35" r="4"/><circle cx="205" cy="155" r="8"/><circle cx="300" cy="65" r="6"/><circle cx="380" cy="120" r="5"/><circle cx="335" cy="205" r="4"/><circle cx="145" cy="205" r="5"/></g>
          <circle cx="205" cy="155" r="17" fill="none" stroke="#C7F36B" strokeWidth="2"/>
        </svg>
      </div>
      <span className="pp-join__brand-foot">Learn · Practice · Prove · Grow</span>
    </aside>

    <section className="pp-join__main">
      <header className="pp-join__mobile-brand"><a className="pp-join__wordmark" href="/">PacketPulse<span aria-hidden="true">•</span></a></header>
      <nav className="pp-join__progress" aria-label="Signup progress">
        {(["Account", "Verify", "Experience"] as const).map((label, i) => {
          const order = ["account", "verify", "experience"];
          const active = order.indexOf(stage) === i;
          const done = order.indexOf(stage) > i;
          return <span key={label} className={`pp-join__progress-step ${active ? "is-active" : ""} ${done ? "is-done" : ""}`} aria-current={active ? "step" : undefined}><b>{done ? "✓" : i + 1}</b>{label}</span>;
        })}
      </nav>

      <div className="pp-join__card" aria-live="polite">
        {error && <p className="pp-join__alert" role="alert">{error}</p>}
        {notice && <p className="pp-join__notice" role="status">{notice}</p>}

        {stage === "account" && <form onSubmit={submitAccount}>
          <p className="pp-join__step">Create account</p><h2>Start with the essentials.</h2><p className="pp-join__intro">Your profile can come later.</p>
          <label className="pp-join__field">Email address<input type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} /></label>
          <label className="pp-join__field">Date of birth<input type="date" autoComplete="bday" required value={dob} onChange={e=>setDob(e.target.value)} /><small>18+ only. Your birth date is private.</small></label>
          <label className="pp-join__field">Password<span className="pp-join__password"><input type={showPassword ? "text" : "password"} autoComplete="new-password" required value={password} onChange={e=>setPassword(e.target.value)} /><button type="button" onClick={()=>setShowPassword(v=>!v)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button></span></label>
          <label className="pp-join__consent"><input type="checkbox" checked={terms} onChange={e=>setTerms(e.target.checked)} required /><span>I agree to the <a href={props.termsUrl}>Terms</a> and have read the <a href={props.privacyUrl}>Privacy Notice</a>.</span></label>
          <button className="pp-join__primary" disabled={busy}>{busy ? "Please wait…" : "Create account →"}</button>
          <p className="pp-join__foot">Already a member? <a href={props.signInUrl}>Sign in</a> · <a href={props.recoveryUrl}>Reset password</a></p>
        </form>}

        {stage === "verify" && <form onSubmit={submitCode}>
          <p className="pp-join__step">Verify email</p><h2>Check your inbox.</h2><p className="pp-join__intro">Code sent to <strong>{maskedEmail}</strong>. It expires in 10 minutes.</p>
          <label className="pp-join__field">Six-digit code<input inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={e=>setCode(e.target.value.replace(/\D/g, "").slice(0,6))} required /></label>
          <button className="pp-join__primary" disabled={busy}>{busy ? "Checking…" : "Verify email →"}</button>
          <button className="pp-join__link-button" type="button" onClick={resend} disabled={busy}>Resend code</button>
          <p className="pp-join__foot">Need to change your email? Contact the registration support flow.</p>
        </form>}

        {stage === "experience" && <div>
          <p className="pp-join__step">One quick question</p><h2>Where are you in your journey?</h2><p className="pp-join__intro">This helps tailor your profile.</p>
          <div className="pp-join__choices" role="group" aria-label="Experience track">
            <button type="button" className={track === "fresher" ? "is-selected" : ""} aria-pressed={track === "fresher"} onClick={()=>setTrack("fresher")}><strong>Fresher</strong><span>Starting out or preparing for a first role.</span></button>
            <button type="button" className={track === "experienced" ? "is-selected" : ""} aria-pressed={track === "experienced"} onClick={()=>setTrack("experienced")}><strong>Experienced</strong><span>Already working or bringing experience.</span></button>
          </div>
          <button className="pp-join__primary" disabled={busy || !track} onClick={submitTrack}>{busy ? "Saving…" : "Continue →"}</button>
        </div>}
      </div>
    </section>
  </main>;
}
