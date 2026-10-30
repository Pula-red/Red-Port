'use client';

import { useState } from 'react';
import Icon from './Icon';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    setIsSubmitting(true);
    setStatus('Sending your message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry from ${name}`,
          from_name: 'John Jared Bueta Portfolio',
          replyto: email,
          name,
          email,
          message,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The form service could not send your message.');
      }

      event.currentTarget.reset();
      setStatus('Message sent successfully. Thank you for reaching out.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-14" aria-labelledby="contact-title">
      <p className="eyebrow">05 / Contact</p>
      <h2 id="contact-title" className="section-title">Let&apos;s connect</h2>
      <p className="section-copy">If you have a project, idea, or opportunity, feel free to reach out.</p>
      <div className="mt-10 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div className="space-y-6 text-base">
          <a href="mailto:johnjaredbueta10@gmail.com" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="mail" size={17} className="text-accent" />johnjaredbueta10@gmail.com</a>
          <a href="https://github.com/Pula-red" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="github" size={17} className="text-accent" /> github.com/Pula-red</a>
          <a href="https://www.linkedin.com/in/john-jared-bueta-474376271/" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="linkedin" size={17} className="text-accent" /> linkedin.com/in/john-jared-bueta-474376271</a>
          <a href="https://www.facebook.com/profile.php?id=61590779427219" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="facebook" size={17} className="text-accent" /> facebook.com/johnjaredbueta</a>
          <a href="https://www.instagram.com/buetajohnjared/" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="instagram" size={17} className="text-accent" /> instagram.com/buetajohnjared</a>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-medium text-ink">Name<input className="focus-ring mt-2 block w-full border border-line bg-surface px-3.5 py-3 text-sm font-normal text-ink outline-none placeholder:text-muted focus:border-accent" type="text" name="name" placeholder="Your name" required /></label><label className="block text-sm font-medium text-ink">Email<input className="focus-ring mt-2 block w-full border border-line bg-surface px-3.5 py-3 text-sm font-normal text-ink outline-none placeholder:text-muted focus:border-accent" type="email" name="email" placeholder="you@example.com" required /></label></div>
          <label className="block text-sm font-medium text-ink">Message<textarea className="focus-ring mt-2 block min-h-32 w-full resize-y border border-line bg-surface px-3.5 py-3 text-sm font-normal text-ink outline-none placeholder:text-muted focus:border-accent" name="message" placeholder="Tell me a little about your project" required /></label>
          <button className="focus-ring inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send message'} {!isSubmitting && <Icon name="arrow" size={16} />}</button>
          {status && <p className="text-xs text-muted" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
