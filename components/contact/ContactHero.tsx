"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "@/components/shared/Container";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactHero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { t } = useLanguage();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);
    try {
      await emailjs.send(
        "service_r8mfs8o",
        "template_epdly9e",
        {
          name,
          email,
          phone,
          message,
        },
        "wGuJ44gHSLm3HytS0"
      );

      setShowSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-32">
      <Container>
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              {t.contactPage.title}
            </h1>
            <p className="mt-4 text-neutral-400">
              {t.contactPage.description}
            </p>
            <div className="mt-10 space-y-6 md:mt-12 md:space-y-8">
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-[#7C5CFF]/10 p-3 text-[#7C5CFF]">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t.contactPage.phone}</h3>
                  <p className="mt-1 text-neutral-400">(281) 906-0248</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-[#7C5CFF]/10 p-3 text-[#7C5CFF]">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t.contactPage.email}</h3>
                  <p className="mt-1 text-neutral-400">
                    solveradigitalagency@gmail.com
                  </p>
                </div>
              </div>
              {/* WhatsApp contact item */}
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-[#7C5CFF]/10 p-3 text-[#7C5CFF]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="mt-1 text-neutral-400">+1 (281) 906-0248</p>
                </div>
              </div>
              {/* Location block removed */}
              {/* Support block removed as well */}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-[#0B0F16] p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {t.contactPage.formTitle}
            </h2>

            <form className="mt-8 space-y-5" onSubmit={sendEmail}>
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder={t.contactPage.placeholders.name}
                  className="rounded-xl border border-white/10 bg-[#11151D] px-4 py-4 text-white outline-none transition focus:border-[#7C5CFF]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder={t.contactPage.placeholders.email}
                  className="rounded-xl border border-white/10 bg-[#11151D] px-4 py-4 text-white outline-none transition focus:border-[#7C5CFF]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <input
                type="tel"
                placeholder={t.contactPage.placeholders.phone}
                className="w-full rounded-xl border border-white/10 bg-[#11151D] px-4 py-4 text-white outline-none transition focus:border-[#7C5CFF]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // Phone is intentionally NOT required
              />

              <textarea
                rows={6}
                placeholder={t.contactPage.placeholders.message}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#11151D] px-4 py-4 text-white outline-none transition focus:border-[#7C5CFF]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-gradient-to-r from-[#5EA7FF] to-[#8B5CF6] py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {sending ? t.contactPage.sending : t.contactPage.sendButton}
              </button>
            </form>
          </div>
        </div>
      </Container>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="mx-5 w-full max-w-md rounded-3xl border border-white/10 bg-[#0B0F16] p-6 text-center shadow-2xl sm:mx-0 sm:p-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <svg
                className="h-8 w-8 text-green-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">
              {t.contactPage.success.title}
            </h2>
            <p className="mt-4 text-neutral-400 leading-7">
              {t.contactPage.success.description}
              <strong className="text-white">
                {" "}{t.contactPage.success.highlight}
              </strong>
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#5EA7FF] to-[#8B5CF6] py-4 text-base font-semibold text-white transition hover:opacity-90"
            >
              {t.contactPage.success.button}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}