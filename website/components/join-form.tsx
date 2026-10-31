"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { ArrowUpRight, Check } from "@/components/icons";

type FormState = {
  fullName: string;
  studentId: string;
  department: string;
  batch: string;
  email: string;
  phone: string;
  interest: string;
  motivation: string;
  consent: boolean;
};

const initialState: FormState = {
  fullName: "",
  studentId: "",
  department: "",
  batch: "",
  email: "",
  phone: "",
  interest: "",
  motivation: "",
  consent: false,
};

const interests = [
  "Research & publications",
  "Events & operations",
  "Communications & design",
  "Partnerships & outreach",
  "Debate & competition",
  "General membership",
];

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink transition-colors placeholder:text-body/35 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

const labelClass = "mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-ink/60";

export function JoinForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [ready, setReady] = useState(false);
  const [mailto, setMailto] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 3) next.fullName = "Please enter your full name.";
    if (!form.studentId.trim()) next.studentId = "Student ID is required.";
    if (!form.department.trim()) next.department = "Department is required.";
    if (!form.batch.trim()) next.batch = "Batch is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.motivation.trim().length < 40)
      next.motivation = "Tell us a little more — at least 40 characters.";
    if (!form.consent) next.consent = "Please confirm you are a BUP student.";
    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const body = [
      `Full name: ${form.fullName}`,
      `Student ID: ${form.studentId}`,
      `Department: ${form.department}`,
      `Batch: ${form.batch}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Area of interest: ${form.interest || "—"}`,
      "",
      "Why I want to join:",
      form.motivation,
      "",
      "Expression of interest from the BUPEC website. This is not official EconSurge registration.",
    ].join("\n");

    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(
        `EconSurge interest — ${form.fullName}`,
      )}&body=${encodeURIComponent(body)}`,
    );
    setReady(true);
  }

  if (ready) {
    return (
      <div className="rounded-4xl border border-line bg-paper p-6 sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-jade/10 text-jade">
          <Check size={26} />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-ink">Your note is ready</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
          This site does not store personal data. Your details have been prepared as an email — send it to the club
          inbox. Follow BUPEC's official announcement to register for the next EconSurge.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={mailto} className="btn btn-dark">
            Open email and send
            <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={() => setReady(false)}
            className="btn btn-outline-dark"
          >
            Edit note
          </button>
        </div>
        <p className="mt-6 text-xs text-body/60">
          Prefer to write directly? Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-ink underline decoration-accent underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-4xl border border-line bg-paper p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className={labelClass}>
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={form.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "error-fullName" : undefined}
            className={fieldClass}
            placeholder="e.g. Ayesha Rahman"
          />
          {errors.fullName ? (
            <p id="error-fullName" className="mt-1.5 text-xs text-rust">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="studentId" className={labelClass}>
            Student ID
          </label>
          <input
            id="studentId"
            name="studentId"
            inputMode="numeric"
            value={form.studentId}
            onChange={(event) => update("studentId", event.target.value)}
            aria-invalid={Boolean(errors.studentId)}
            aria-describedby={errors.studentId ? "error-studentId" : undefined}
            className={fieldClass}
            placeholder="BUP student ID"
          />
          {errors.studentId ? (
            <p id="error-studentId" className="mt-1.5 text-xs text-rust">
              {errors.studentId}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="batch" className={labelClass}>
            Batch
          </label>
          <input
            id="batch"
            name="batch"
            value={form.batch}
            onChange={(event) => update("batch", event.target.value)}
            aria-invalid={Boolean(errors.batch)}
            aria-describedby={errors.batch ? "error-batch" : undefined}
            className={fieldClass}
            placeholder="e.g. 2024"
          />
          {errors.batch ? (
            <p id="error-batch" className="mt-1.5 text-xs text-rust">
              {errors.batch}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="department" className={labelClass}>
            Department
          </label>
          <input
            id="department"
            name="department"
            value={form.department}
            onChange={(event) => update("department", event.target.value)}
            aria-invalid={Boolean(errors.department)}
            aria-describedby={errors.department ? "error-department" : undefined}
            className={fieldClass}
            placeholder="e.g. Economics"
          />
          {errors.department ? (
            <p id="error-department" className="mt-1.5 text-xs text-rust">
              {errors.department}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={fieldClass}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="error-email" className="mt-1.5 text-xs text-rust">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="normal-case tracking-normal text-body/50">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            placeholder="+880"
          />
        </div>

        <div>
          <label htmlFor="interest" className={labelClass}>
            Area of interest
          </label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={(event) => update("interest", event.target.value)}
            className={`${fieldClass} pr-10`}
          >
            <option value="">Choose a portfolio</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="motivation" className={labelClass}>
            Why do you want to join?
          </label>
          <textarea
            id="motivation"
            name="motivation"
            rows={5}
            value={form.motivation}
            onChange={(event) => update("motivation", event.target.value)}
            aria-invalid={Boolean(errors.motivation)}
            aria-describedby={errors.motivation ? "error-motivation" : "hint-motivation"}
            className={`${fieldClass} resize-y`}
            placeholder="A few sentences on what you want to work on, and what you would bring to the club."
          />
          {errors.motivation ? (
            <p id="error-motivation" className="mt-1.5 text-sm text-rust">
              {errors.motivation}
            </p>
          ) : (
            <p id="hint-motivation" className="mt-1.5 text-sm text-body/45">
              {form.motivation.trim().length}/40 characters minimum
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-base leading-relaxed text-body">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => update("consent", event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "error-consent" : undefined}
              className="mt-1 h-6 w-6 shrink-0 rounded border-line accent-[#0b395d]"
            />
            <span>
              I am a student of Bangladesh University of Professionals and I am happy for the club to contact me
              about this application.
            </span>
          </label>
          {errors.consent ? (
            <p id="error-consent" className="mt-1.5 text-sm text-rust">
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-body/55">
          Your details are not stored on this site. The form prepares an email for you to send.
        </p>
        <button type="submit" className="btn btn-dark w-full sm:w-auto shrink-0">
          Prepare application
          <ArrowUpRight size={16} />
        </button>
      </div>
    </form>
  );
}
