import Image from 'next/image';
import Icon from './Icon';

export default function About() {
  const details = [
    { label: 'Program', value: 'Bachelor of Science in Information Technology', subvalue: 'Polytechnic University of the Philippines (Calauan Campus)', icon: 'school' },
    { label: 'Location', value: 'Nagcarlan, Laguna, Philippines', icon: 'location' },
    { label: 'Email', value: 'johnjaredbueta10@gmail.com', icon: 'mail', href: 'mailto:johnjaredbueta10@gmail.com' },
    { label: 'Contact', value: '+63 981 319 3447', icon: 'phone', href: 'https://wa.me/639813193447' },
  ];

  return (
    <section id="about" className="about-section border-b border-line py-12 sm:py-14" aria-labelledby="about-title">
      <div className="about-heading">
        <p className="eyebrow">01 / About</p>
        <h2 id="about-title" className="section-title">About me</h2>
      </div>
      <div className="about-content mt-12 grid items-center gap-12 lg:grid-cols-[minmax(260px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
        <div className="about-profile-card">
          <div className="about-portrait">
            <div className="about-portrait-inner">
              <Image src="/images/projects/RED-NO-BG.png" alt="John Jared Bueta profile" fill className="object-contain object-bottom" sizes="320px" />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <p className="eyebrow">Personal Profile</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-4xl">A software developer who likes making ideas useful.</h3>
            <div className="mt-5 space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>I&apos;m a software developer specializing in both front-end and back-end development. I enjoy turning ideas into functional, user-friendly applications that are both visually appealing and reliable. I focus on creating intuitive interfaces, and building efficient systems that solve real-world problems. My goal is to develop software that is simple, practical, and easy to use.</p>
            </div>
          </div>
          <div className="about-details">
            {details.map((detail) => {
              const content = <><span className="about-detail-icon"><Icon name={detail.icon} size={17} /></span><span><span className="about-detail-label">{detail.label}</span><span className="about-detail-value">{detail.value}</span>{detail.subvalue && <span className="about-detail-subvalue">{detail.subvalue}</span>}</span></>;
              return detail.href ? <a key={detail.label} className="about-detail" href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}>{content}</a> : <div key={detail.label} className="about-detail">{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
