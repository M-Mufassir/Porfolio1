export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#lab' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const brandProfile = {
  name: 'Mufassir Riswan',
  fullLabel: 'MR // Computer Systems Engineering',
  tagline: 'The bridge between software and hardware',
  heroTitle: 'Building the bridge between code, circuits, and system behavior.',
  heroSummary:
    'I build software experiences, embedded systems, and engineering-led interfaces that connect digital logic with real-world hardware.',
}

export const roleRotator = [
  'Software Engineer',
  'Embedded Systems Enthusiast',
  'Systems Thinker',
]

export const heroMetrics = [
  { label: 'Domains', value: '3 interconnected tracks' },
  { label: 'Identity', value: 'MR // Mufassir Riswan' },
  { label: 'Approach', value: 'Circuit-driven, intentional, engineered' },
]

export const softwareIcons = [
  { label: 'React', glyph: 'react', className: 'icon-react' },
  { label: 'Node', glyph: 'node', className: 'icon-node' },
  { label: 'JavaScript', glyph: 'javascript', className: 'icon-javascript' },
  { label: 'Python', glyph: 'python', className: 'icon-python' },
  { label: 'Database', glyph: 'database', className: 'icon-database' },
  { label: 'Embedded', glyph: 'chip', className: 'icon-chip' },
]

export const domainDetails = {
  software: {
    id: 'software',
    shortLabel: 'Software',
    toggleHint: 'apps and interfaces',
    eyebrow: 'Software Engineering',
    title: 'Software systems with clean structure and practical UX',
    summary:
      'Modern applications, business systems, desktop tools, and responsive interfaces built with clarity and maintainability in mind.',
    statement:
      'I design application flows, modular front ends, and business-focused systems that feel polished without losing engineering discipline.',
    highlights: [
      'React and desktop-style application thinking',
      'UI that stays responsive and easy to navigate',
      'Architecture shaped around scale and maintainability',
    ],
    accent: '#5eead4',
    glow: '94, 234, 212',
  },
  embedded: {
    id: 'embedded',
    shortLabel: 'Embedded',
    toggleHint: 'firmware and electronics',
    eyebrow: 'Embedded and Electronics',
    title: 'Firmware and hardware work close to the machine',
    summary:
      'Microcontrollers, circuit behavior, digital systems, and hardware-software integration focused on reliability and real-time response.',
    statement:
      'I enjoy writing low-level logic, testing hardware behavior, and building embedded flows where software decisions directly affect physical systems.',
    highlights: [
      'Embedded C and AVR Assembly foundations',
      'ESP32 and ATmega-class microcontroller work',
      'Circuit testing, debugging, and hardware integration',
    ],
    accent: '#38bdf8',
    glow: '56, 189, 248',
  },
  systems: {
    id: 'systems',
    shortLabel: 'Systems',
    toggleHint: 'analysis and research',
    eyebrow: 'Systems and Research',
    title: 'System-level thinking across architecture, signals, and communication',
    summary:
      'Performance analysis, simulation, and conceptual modeling used to understand how complex systems behave and where they can improve.',
    statement:
      'I like stepping back to analyze memory behavior, signal response, and system performance so designs are informed by deeper understanding.',
    highlights: [
      'Computer architecture and caching concepts',
      'Signal systems, convolution, and LTI analysis',
      'Telecommunication and simulation-oriented thinking',
    ],
    accent: '#a78bfa',
    glow: '167, 139, 250',
  },
}

export const aboutDomains = [
  {
    id: 'software',
    eyebrow: 'Software',
    title: 'Applications with clear interaction and clean architecture',
    description:
      'I build software for practical use cases, from web interfaces to desktop-oriented business flows, with a focus on maintainability and user trust.',
    points: [
      'Full-stack and desktop application thinking',
      'Responsive interfaces with strong visual hierarchy',
      'Architecture that stays readable as the project grows',
    ],
  },
  {
    id: 'embedded',
    eyebrow: 'Embedded',
    title: 'Electronics and firmware that behave reliably in real time',
    description:
      'My embedded work sits close to the hardware, from low-level programming and microcontroller logic to circuit integration and prototype debugging.',
    points: [
      'AVR and ESP32-oriented prototyping',
      'Digital logic and hardware-software integration',
      'Hands-on testing, debugging, and iteration',
    ],
  },
  {
    id: 'systems',
    eyebrow: 'Systems',
    title: 'Analysis that connects implementation with engineering insight',
    description:
      'I also work at the systems layer, studying architecture, signal behavior, and simulation concepts so implementation choices are backed by understanding.',
    points: [
      'Cache and memory hierarchy analysis',
      'Signal-system modeling and response study',
      'Research-minded thinking around communication and performance',
    ],
  },
]

export const skillDomains = {
  software: {
    title: 'Software Engineering stack',
    summary:
      'A mix of application development, UI construction, and platform thinking shaped by real project work and internship experience.',
    groups: [
      {
        title: 'Languages and platforms',
        badge: 'Core',
        items: [
          {
            name: 'JavaScript',
            context: 'React interfaces and modern web applications',
            level: 88,
          },
          {
            name: 'Java',
            context: 'Backend flows, APIs, and application logic',
            level: 78,
          },
          {
            name: 'Python',
            context: 'Utilities, analysis, and support tooling',
            level: 68,
          },
        ],
      },
      {
        title: 'Frameworks and product work',
        badge: 'Build',
        items: [
          {
            name: 'React',
            context: 'Portfolio interfaces and business-facing UI',
            level: 84,
          },
          {
            name: 'Electron',
            context: 'Desktop application direction for POS workflows',
            level: 73,
          },
          {
            name: 'Node.js and APIs',
            context: 'Server-side integration and app plumbing',
            level: 72,
          },
        ],
      },
    ],
    tags: [
      'Responsive UI',
      'Desktop apps',
      'Business systems',
      'REST APIs',
      'User-focused architecture',
    ],
    focus: [
      'Designing interfaces that feel modern without becoming noisy',
      'Keeping code structure modular so product features can grow cleanly',
      'Turning technical requirements into software people can actually use',
    ],
  },
  embedded: {
    title: 'Embedded and electronics stack',
    summary:
      'Grounded in microcontroller programming, digital systems, and practical hardware integration taken from your resume and project brief.',
    groups: [
      {
        title: 'Programming close to hardware',
        badge: 'Firmware',
        items: [
          {
            name: 'Embedded C',
            context: 'Microcontroller logic and peripheral handling',
            level: 82,
          },
          {
            name: 'AVR Assembly',
            context: 'Low-level control and register-focused thinking',
            level: 78,
          },
          {
            name: 'C fundamentals',
            context: 'System-oriented logic and device behavior',
            level: 76,
          },
        ],
      },
      {
        title: 'Devices and labs',
        badge: 'Prototype',
        items: [
          {
            name: 'ESP32',
            context: 'IoT monitoring, Wi-Fi communication, and sensing',
            level: 84,
          },
          {
            name: 'ATmega series',
            context: 'Microcontroller experiments and digital control',
            level: 74,
          },
          {
            name: 'Circuit debugging',
            context: 'Integration, testing, and reliability checks',
            level: 71,
          },
        ],
      },
    ],
    tags: [
      'ESP32',
      'ATmega',
      'Digital logic design',
      'PCB design',
      'Arduino IDE',
    ],
    focus: [
      'Building firmware that responds predictably to physical input',
      'Understanding circuits instead of treating hardware as a black box',
      'Iterating through testing until prototypes feel stable and trustworthy',
    ],
  },
  systems: {
    title: 'Systems and research stack',
    summary:
      'This domain captures the analytical side of your profile: architecture, signals, simulation, and communication concepts.',
    groups: [
      {
        title: 'System concepts',
        badge: 'Analysis',
        items: [
          {
            name: 'Computer architecture',
            context: 'Caching, memory hierarchy, and COA concepts',
            level: 76,
          },
          {
            name: 'Signal systems',
            context: 'Discrete-time analysis and convolution reasoning',
            level: 79,
          },
          {
            name: 'Telecommunications',
            context: 'Transmission models and communication behavior',
            level: 67,
          },
        ],
      },
      {
        title: 'Tools and simulation',
        badge: 'Model',
        items: [
          {
            name: 'MATLAB',
            context: 'Modeling and systems-oriented computation',
            level: 64,
          },
          {
            name: 'Proteus and Multisim',
            context: 'Digital and electronics simulation workflows',
            level: 72,
          },
          {
            name: 'LTSpice',
            context: 'Circuit analysis and analog experimentation',
            level: 63,
          },
        ],
      },
    ],
    tags: [
      'Cache simulation',
      'LTI systems',
      'Convolution',
      'Performance analysis',
      'Simulation-first thinking',
    ],
    focus: [
      'Studying how system behavior changes before implementation gets expensive',
      'Connecting theory to observable performance and engineering tradeoffs',
      'Using simulation as a design tool rather than just an academic exercise',
    ],
  },
}

export const projectCards = [
  {
    domain: 'software',
    label: 'Software Project',
    type: 'Desktop product',
    title: 'Desktop POS System',
    summary:
      'A full desktop point-of-sale direction focused on inventory, sales flow, and a modular interface.',
    stack: ['Electron', 'React', 'SQLite'],
    points: [
      'Built inventory and transaction management flows around a responsive UI.',
      'Used modular structure so features could expand without cluttering the core.',
      'Balanced desktop utility with a modern application feel.',
    ],
    repo: null,
    repoNote: 'Repository link can be attached when the public repo is ready.',
  },
  {
    domain: 'software',
    label: 'Software Project',
    type: 'Web build',
    title: 'Business Website Development',
    summary:
      'Modern business-facing sites built with a strong emphasis on clarity, responsiveness, and practical UX.',
    stack: ['React', 'Modern web stack', 'Responsive design'],
    points: [
      'Designed sites for real-world business use instead of demo-only presentation.',
      'Focused on layout quality, information hierarchy, and mobile behavior.',
      'Used visual polish to support conversion and trust.',
    ],
    repo: null,
    repoNote: 'Case-study or repository links can be added per client project.',
  },
  {
    domain: 'software',
    label: 'Software Project',
    type: 'Platform build',
    title: 'Learning Management System',
    summary:
      'A learning platform centered on course management, users, and structured educational content.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Database integration'],
    points: [
      'Designed APIs for authentication, course handling, and learning materials.',
      'Worked on backend logic and system structure for maintainable feature growth.',
      'Connected technical implementation to a real user-management workflow.',
    ],
    repo: null,
    repoNote: 'Repository details were not present in the available CV content.',
  },
  {
    domain: 'embedded',
    label: 'Embedded Project',
    type: 'IoT prototype',
    title: 'IoT-Based Security Monitoring System',
    summary:
      'An ESP32-based monitoring prototype for sensor-driven event detection and connected alerts.',
    stack: ['ESP32', 'Arduino IDE', 'Embedded C', 'Sensors', 'Wi-Fi'],
    points: [
      'Designed embedded firmware to manage sensor inputs and system response.',
      'Handled hardware integration, circuit testing, and debugging for stability.',
      'Used wireless communication to extend the project beyond isolated hardware.',
    ],
    repo: null,
    repoNote: 'A public repository was not recoverable from the local resumes.',
  },
  {
    domain: 'embedded',
    label: 'Embedded Project',
    type: 'Low-level control',
    title: 'AVR LED Control Using Assembly',
    summary:
      'A low-level microcontroller exercise focused on direct hardware control and instruction-level reasoning.',
    stack: ['AVR Assembly', 'Microcontroller programming'],
    points: [
      'Controlled multiple LEDs through register-oriented assembly logic.',
      'Practiced branching, flow control, and time-sensitive sequencing.',
      'Strengthened comfort with code that runs close to the hardware boundary.',
    ],
    repo: null,
    repoNote: 'This project is presented as a lab-style build rather than a linked repo.',
  },
  {
    domain: 'embedded',
    label: 'Embedded Project',
    type: 'Electronics build',
    title: 'PCB and Digital Systems Prototyping',
    summary:
      'Hardware prototypes spanning PCB layout thinking, digital design, and bench-level iteration.',
    stack: ['PCB design', 'Digital logic', 'Prototyping', 'Testing'],
    points: [
      'Designed and tested hardware concepts through simulation and practical iteration.',
      'Worked through state transitions and behavior at the circuit level.',
      'Used debugging as part of the design process rather than a final step.',
    ],
    repo: null,
    repoNote: 'This track is best shown as visuals or lab notes alongside the site.',
  },
  {
    domain: 'systems',
    label: 'Systems Project',
    type: 'Architecture study',
    title: 'Cache System Simulation',
    summary:
      'A computer architecture study centered on memory hierarchy behavior and efficiency tradeoffs.',
    stack: ['COA concepts', 'Caching', 'Performance analysis'],
    points: [
      'Simulated cache behavior to understand how architecture decisions influence speed.',
      'Compared performance outcomes through systems-oriented reasoning.',
      'Turned abstract architecture concepts into visible engineering tradeoffs.',
    ],
    repo: null,
    repoNote: 'This project reads best as a case study or simulation walkthrough.',
  },
  {
    domain: 'systems',
    label: 'Systems Project',
    type: 'Signal analysis',
    title: 'Discrete-Time Signal System Analysis',
    summary:
      'A study of discrete-time signals and LTI behavior using impulse response and convolution techniques.',
    stack: ['Signals', 'LTI systems', 'Convolution', 'Analysis'],
    points: [
      'Analyzed discrete-time system behavior through impulse response reasoning.',
      'Studied linear time-invariant properties and system output relationships.',
      'Used signal analysis as a bridge between mathematics and engineering intuition.',
    ],
    repo: null,
    repoNote: 'This work is represented as research-oriented portfolio content.',
  },
  {
    domain: 'systems',
    label: 'Systems Project',
    type: 'Research track',
    title: 'Telecommunication Research',
    summary:
      'Analytical work around communication models, signal transmission, and broader system interaction.',
    stack: ['Telecommunications', 'System modeling', 'Simulation'],
    points: [
      'Explored concepts behind communication flow and transmission behavior.',
      'Combined analytical study with simulation-style thinking where relevant.',
      'Framed systems work as part of a broader engineering identity.',
    ],
    repo: null,
    repoNote: 'A publication or notes link can be added later if available.',
  },
]

export const experience = {
  role: 'Intern - Software Developer',
  period: 'Recent experience',
  summary:
    'A practical software internship track focused on debugging, proof-of-concept delivery, and front-end development support.',
  points: [
    'Debugged systems using AI-assisted tools and SQL Server Profiler.',
    'Developed proof-of-concept solutions to validate ideas quickly.',
    'Built front-end components using React and Vue.',
  ],
}

export const labExperiments = [
  {
    index: '01',
    title: 'AVR experiments',
    description:
      'Low-level exercises that strengthen timing awareness, flow control, and confidence with hardware-near programming.',
    points: [
      'Instruction-level reasoning with assembly',
      'LED sequencing and state-based behavior',
      'Clock and transition observations in digital systems',
    ],
  },
  {
    index: '02',
    title: 'Circuit simulations',
    description:
      'Digital and analog studies used to verify behavior before or alongside prototype work.',
    points: [
      'Proteus, Multisim, and LTSpice workflows',
      'Circuit response and amplification analysis',
      'Simulation-backed iteration before hardware commitment',
    ],
  },
  {
    index: '03',
    title: 'Signal analysis',
    description:
      'System-response exploration where mathematics and engineering intuition meet in a practical way.',
    points: [
      'Discrete-time system observations',
      'Convolution and impulse-response reasoning',
      'LTI properties studied through applied examples',
    ],
  },
  {
    index: '04',
    title: 'Hardware prototypes',
    description:
      'Hands-on prototypes that connect firmware logic, sensing, and physical design decisions.',
    points: [
      'Sensor integration and event detection',
      'Reliability checks through bench testing',
      'Hardware-software iteration as one workflow',
    ],
  },
]

export const resumeLinks = [
  {
    label: 'Download Software CV',
    href: '/resume/resume%20(1)%20(1).pdf',
  },
  {
    label: 'Download Embedded CV',
    href: '/resume/Mohamed%20Mufassir.pdf',
  },
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'mufassirriswan@gmail.com',
    note: 'Best for internship opportunities, freelance work, and direct collaboration.',
    href: 'mailto:mufassirriswan@gmail.com',
    action: 'Send an email',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamedmufassir',
    note: 'Connect for software, embedded, and systems-oriented roles or conversations.',
    href: 'https://www.linkedin.com/in/mohamedmufassir',
    action: 'Open LinkedIn',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'GitHub profile ready to link',
    note: 'Add your public GitHub profile URL here once you decide which account to feature.',
    href: 'https://github.com/M-Mufassir/',
    action: 'Open GitHub',
    external: false,
  },
]
