export default function Icon({ name, size = 18, strokeWidth = 1.8, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    className,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    external: <><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 3.8 5 5 0 0 0 18.9 1S17.7.6 15 2.5a13.4 13.4 0 0 0-6 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 3.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    viber: <><path d="M19.2 4.8A9.8 9.8 0 0 0 12 2C6.5 2 2 5.9 2 10.8c0 2.5 1.2 4.8 3.2 6.5L4 21l4.3-2.2c1.2.5 2.5.8 3.8.8 5.5 0 10-3.9 10-8.8 0-2.3-1-4.4-2.9-6Z" /><path d="M8 8.5c.3-.6.7-.7 1.2-.2l1.1 1c.3.3.3.7 0 1l-.5.6a7.5 7.5 0 0 0 2.9 2.8l.5-.5c.3-.3.7-.3 1 0l1 .9c.5.4.4.9-.1 1.2-.8.5-1.8.4-2.6 0-1.8-.9-4-3-4.8-4.8-.4-.8-.4-1.7.3-2Z" /></>,
    facebook: <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    briefcase: <><rect width="18" height="14" x="3" y="7" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /><path d="M10 12v2h4v-2" /></>,
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M10 20v-6h4v6" /></>,
    user: <><circle cx="12" cy="8" r="3" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    folder: <><path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h4" /></>,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    monitor: <><rect width="18" height="13" x="3" y="3" rx="2" /><path d="M8 21h8M12 16v5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></>,
    moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z" />,
    instagram: <><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></>,
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.1A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8.5 8.5c.3-.6.7-.6 1.1-.1l.8 1c.3.4.2.7 0 1l-.4.5c.6 1.1 1.4 1.8 2.5 2.4l.5-.4c.3-.2.6-.3 1 0l1 .8c.5.4.5.8-.1 1.1-.7.4-1.6.4-2.4 0-1.5-.7-3.5-2.5-4.2-4.1-.4-.8-.4-1.7.2-2.2Z" /></>,
    server: <><rect width="18" height="6" x="3" y="4" rx="1" /><rect width="18" height="6" x="3" y="14" rx="1" /><path d="M7 7h.01M7 17h.01" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    tool: <><path d="m14.7 6.3 3-3a4.2 4.2 0 0 0-5.5 5.5l-7.5 7.5a2 2 0 1 0 2.8 2.8l7.5-7.5a4.2 4.2 0 0 0 5.5-5.5l-3 3Z" /></>,
    cpu: <><rect width="12" height="12" x="6" y="6" rx="2" /><path d="M9 1v5M15 1v5M9 18v5M15 18v5M1 9h5M1 15h5M18 9h5M18 15h5" /></>,
    school: <><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 11v5c2.8 2.2 7.2 2.2 10 0v-5M21 9v6" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M6.6 3.5 9 3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L16 13l5 2-.5 2.4A3 3 0 0 1 17.6 20C10.1 19.2 4.8 13.9 4 6.4a3 3 0 0 1 2.6-2.9Z" />,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}
