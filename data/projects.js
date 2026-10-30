const projectImage = (folder, filename) => `/images/projects/${folder}/${filename}`;

export const projects = [
  {
    title: 'EPCD Operations',
    category: 'Web',
    github: 'https://github.com/LeeDev428/epcd',
    technologies: ['Laravel', 'PHP', 'React', 'SQL'],
    description: 'An Environmental Protection and Compliance Division operations workspace for shipment encoding, records, workload monitoring, and enforcement activity.',
    images: [
      projectImage('EPCD', 'Screenshot 2026-10-30 143944.png'),
      projectImage('EPCD', 'Screenshot 2026-10-30 144021.png'),
      projectImage('EPCD', 'Screenshot 2026-10-30 144040.png'),
    ],
  },
  {
    title: 'Fiber Express Corporation',
    category: 'Web',
    technologies: ['PHP', 'MySQL'],
    description: 'A fiber internet and television website presenting services, plans, payment methods, and customer contact options.',
    images: [
      projectImage('fxcp', 'Screenshot 2026-05-12 193500.png'),
      projectImage('fxcp', 'Screenshot 2026-10-30 142617.png'),
    ],
  },
  {
    title: 'Power Cable Internet Services',
    category: 'Web',
    technologies: ['PHP', 'SQL'],
    description: 'A business operations system for subscriber records, payments, billing, collections, and account management.',
    images: [
      projectImage('ICPS', 'Screenshot (372).png'),
      projectImage('ICPS', 'Screenshot (375).png'),
      projectImage('ICPS', 'Screenshot 2026-04-09 161632.png'),
      projectImage('ICPS', 'Screenshot 2026-04-09 165301.png'),
      projectImage('ICPS', 'Screenshot 2026-04-15 092811.png'),
      projectImage('ICPS', 'Screenshot 2026-04-27 094129.png'),
    ],
  },
  {
    title: 'Patintero',
    category: 'Other',
    technologies: ['PHP', 'SQL'],
    description: 'A browser-based Filipino street game with a colorful game menu and options for starting play, settings, and guidance.',
    images: [projectImage('Patintero', '1772439651427.jpg')],
  },
  {
    title: 'Robles-Moncayo Dental Clinic',
    category: 'Web',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    description: 'A dental clinic website and management system covering appointments, patient records, messaging, dental charts, and clinic operations.',
    images: [
      projectImage('RMDC', 'Screenshot 2026-10-30 144150.png'),
      projectImage('RMDC', 'Screenshot 2026-10-30 144320.png'),
      projectImage('RMDC', 'Screenshot 2026-10-30 144358.png'),
      projectImage('RMDC', 'Screenshot 2026-10-30 144736.png'),
      projectImage('RMDC', 'Screenshot 2026-10-30 144838.png'),
      projectImage('RMDC', 'Screenshot 2026-10-30 144908.png'),
      projectImage('RMDC', 'Screenshot 2026-10-30 144947.png'),
      projectImage('RMDC', 'Screenshot 2026-10-30 145026.png'),
    ],
  },
  {
    title: 'Big Five Payroll System',
    category: 'Web',
    technologies: ['PHP', 'SQL'],
    description: 'A payroll management system with employee records, earnings, deductions, summaries, payslip generation, and PDF output.',
    images: [
      projectImage('TB5-PAYROLL', 'Screenshot 2026-04-07 111819.png'),
      projectImage('TB5-PAYROLL', 'Screenshot 2026-05-04 141928.png'),
      projectImage('TB5-PAYROLL', 'Screenshot 2026-05-05 090958.png'),
    ],
  },
  {
    title: 'Big Blossom POS',
    category: 'Web',
    technologies: ['PHP', 'SQL'],
    description: 'A point-of-sale system for product browsing, category filtering, cart management, checkout, inventory, and order processing.',
    images: [
      projectImage('TB5-POS', 'FB_IMG_1790706751324.jpg'),
      projectImage('TB5-POS', 'Screenshot 2026-04-17 133637.png'),
      projectImage('TB5-POS', 'Screenshot 2026-04-17 154437.png'),
    ],
  },
  {
    title: 'Xero Claro',
    category: 'Web',
    technologies: ['PHP', 'SQL'],
    description: 'A helmet care service website presenting professional cleaning services, booking options, and service information.',
    images: [
      projectImage('XeroClaro', 'FB_IMG_1790706798148.jpg'),
      projectImage('XeroClaro', 'Messenger_creation_E2D54A8F-BD4A-4B09-A76B-3CBAF2BE3016.png'),
    ],
  },
];
