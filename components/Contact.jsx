import Icon from './Icon';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-14" aria-labelledby="contact-title">
      <p className="eyebrow">05 / Contact</p>
      <h2 id="contact-title" className="section-title">Let&apos;s connect</h2>
      <p className="section-copy">If you have a project, idea, or opportunity, feel free to reach out.</p>
      <div className="mt-10 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div className="space-y-5 text-sm">
          <a href="mailto:jared@example.com" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="mail" size={17} className="text-accent" /> jared@example.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="github" size={17} className="text-accent" /> github.com/jared</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="linkedin" size={17} className="text-accent" /> linkedin.com/in/jared</a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 text-muted hover:text-accent"><Icon name="facebook" size={17} className="text-accent" /> facebook.com/jared</a>
        </div>
        <form className="space-y-5" action="#" method="post">
          <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-medium text-ink">Name<input className="focus-ring mt-2 block w-full border border-line bg-white px-3.5 py-3 text-sm font-normal text-ink outline-none placeholder:text-gray-400 focus:border-accent" type="text" name="name" placeholder="Your name" required /></label><label className="block text-sm font-medium text-ink">Email<input className="focus-ring mt-2 block w-full border border-line bg-white px-3.5 py-3 text-sm font-normal text-ink outline-none placeholder:text-gray-400 focus:border-accent" type="email" name="email" placeholder="you@example.com" required /></label></div>
          <label className="block text-sm font-medium text-ink">Message<textarea className="focus-ring mt-2 block min-h-32 w-full resize-y border border-line bg-white px-3.5 py-3 text-sm font-normal text-ink outline-none placeholder:text-gray-400 focus:border-accent" name="message" placeholder="Tell me a little about your project" required /></label>
          <button className="focus-ring inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover" type="submit">Send message <Icon name="arrow" size={16} /></button>
          <p className="text-xs text-muted">This form is ready to connect to a form service later.</p>
        </form>
      </div>
    </section>
  );
}
