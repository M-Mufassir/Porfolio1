export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const brandProfile = {
  name: 'Mohamed Mufassir',
  monogram: 'MM',
  title: 'Computer Systems Engineering Undergraduate',
  tagline: 'Embedded Systems, Control, and Full-Stack Development',
  summary:
    'I build reliable software and hardware-connected systems with a focus on embedded engineering, real-time control, and practical product development.',
  location: 'Thihariya, Sri Lanka',
  education: 'BSc (Hons) in Computer Systems Engineering, SLIIT',
  availability: 'Open to internships, graduate roles, and engineering collaborations',
}

export const heroMetrics = [
  { label: 'Focus', value: 'Embedded, IoT, control systems' },
  { label: 'Education', value: 'SLIIT • 2023 to 2027' },
  { label: 'Tools', value: 'C, AVR, ESP32, React, Spring Boot' },
]

export const aboutHighlights = [
  {
    title: 'Embedded and real-time systems',
    description:
      'I enjoy building systems that combine sensing, control, and device-level programming into dependable engineering solutions.',
  },
  {
    title: 'Software with engineering discipline',
    description:
      'From React interfaces to backend APIs, I prefer clean implementation, maintainable structure, and practical delivery over visual noise.',
  },
  {
    title: 'Hands-on debugging and iteration',
    description:
      'I am comfortable moving between code, hardware, and system behavior to diagnose issues and improve performance.',
  },
]

export const skillSections = [
  {
    title: 'Programming',
    items: ['Full Stack Development', 'C', 'Embedded C', 'AVR Assembly', 'Python', 'Java'],
  },
  {
    title: 'Embedded Systems',
    items: ['AVR (ATmega)', 'Arduino', 'ESP32', 'Real-Time Systems', 'Sensors and Actuators'],
  },
  {
    title: 'Software and Tools',
    items: ['React', 'Spring Boot', 'REST APIs', 'Git', 'Proteus', 'MATLAB', 'Arduino IDE'],
  },
  {
    title: 'Engineering Strengths',
    items: ['Debugging', 'Hardware Troubleshooting', 'Digital Logic Design', 'Circuit Analysis', 'System Integration'],
  },
]

export const projectCards = [
  {
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'Control system',
    title: 'PID-Based DC Motor Speed Control System',
    summary:
      'A Raspberry Pi based real-time closed-loop motor control project focused on precise speed regulation and tuning.',
    stack: ['Raspberry Pi', 'PID Control', 'Encoder Feedback', 'Real-Time Monitoring'],
    points: [
      'Designed a closed-loop control system using a PID algorithm.',
      'Integrated encoder feedback for accurate RPM measurement.',
      'Built a monitoring interface for live tuning and analysis.',
      'Improved stability while minimizing steady-state error.',
    ],
    repo: null,
    repoNote: 'Based on the latest uploaded CV.',
    featured: true,
  },
  {
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'IoT security',
    title: 'IoT Smart Surveillance and Access Control System',
    summary:
      'An ESP32-based surveillance and access workflow with real-time alerts, image capture, and remote door control.',
    stack: ['ESP32', 'Camera', 'Telegram Bot', 'IoT Communication'],
    points: [
      'Developed surveillance logic with camera and Telegram bot integration.',
      'Captured and transmitted images on intrusion or visitor detection.',
      'Enabled remote lock and unlock actions through Telegram commands.',
      'Handled real-time communication and debugging across the full flow.',
    ],
    repo: null,
    repoNote: 'Based on the latest uploaded CV.',
    featured: true,
  },
  {
    domain: 'systems',
    domainLabel: 'Digital Systems',
    type: 'FSM design',
    title: 'FSM-Based Sequence Detector',
    summary:
      'A digital systems project combining pseudo-random generation, serialization, and finite state machine pattern detection.',
    stack: ['FSM', 'XOR Feedback Logic', 'PISO Shift Register', 'Clocked Digital Design'],
    points: [
      'Designed a pseudo-random generator using XOR feedback logic.',
      'Serialized data with a PISO shift register.',
      'Processed serial input through an FSM for pattern detection.',
      'Maintained synchronized clocking and reliable behavior.',
    ],
    repo: null,
    repoNote: 'Based on the latest uploaded CV.',
    featured: true,
  },
  {
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Backend platform',
    title: 'Learning Management System',
    summary:
      'A Spring Boot based learning platform with backend APIs for authentication, course management, and scalable data handling.',
    stack: ['Spring Boot', 'Java', 'REST APIs', 'Database Integration'],
    points: [
      'Developed backend APIs for authentication and course management.',
      'Integrated the database layer with a scalable service structure.',
      'Organized the system for maintainable feature growth.',
    ],
    repo: null,
    repoNote: 'Project details updated from the latest uploaded CV.',
    featured: true,
  },
  {
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Desktop product',
    title: 'Desktop POS System',
    summary:
      'A desktop point-of-sale system focused on inventory management, sales flow, and a clean modular interface.',
    stack: ['Electron', 'React', 'SQLite'],
    points: [
      'Built inventory and transaction flows around a responsive interface.',
      'Kept the architecture modular so new features could be added cleanly.',
      'Balanced day-to-day utility with a polished product feel.',
    ],
    repo: null,
    repoNote: 'Repository link can be added when the public repo is ready.',
    featured: false,
  },
  {
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Web build',
    title: 'Business Website Development',
    summary:
      'Business-facing websites designed with strong structure, responsiveness, and practical UX.',
    stack: ['React', 'Responsive Design', 'Modern Web Stack'],
    points: [
      'Designed sites for real-world business use instead of presentation-only demos.',
      'Improved hierarchy, trust, and mobile responsiveness.',
      'Used visual polish to support clarity and conversion.',
    ],
    repo: null,
    repoNote: 'Case-study links can be added for selected client work.',
    featured: false,
  },
  {
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'IoT prototype',
    title: 'IoT-Based Security Monitoring System',
    summary:
      'An ESP32-based monitoring prototype for sensor-driven event detection and connected alerts.',
    stack: ['ESP32', 'Arduino IDE', 'Embedded C', 'Sensors', 'Wi-Fi'],
    points: [
      'Designed embedded firmware to manage sensor inputs and system response.',
      'Handled hardware integration, circuit testing, and debugging for stability.',
      'Extended the system with wireless communication.',
    ],
    repo: null,
    repoNote: 'A public repository was not available locally.',
    featured: false,
  },
  {
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'Low-level control',
    title: 'AVR LED Control Using Assembly',
    summary:
      'A low-level microcontroller exercise focused on direct hardware control and instruction-level reasoning.',
    stack: ['AVR Assembly', 'Microcontroller Programming'],
    points: [
      'Controlled LEDs through register-oriented assembly logic.',
      'Practiced branching, timing awareness, and sequencing.',
      'Strengthened comfort with code running close to hardware.',
    ],
    repo: null,
    repoNote: 'Presented as a focused lab-style build.',
    featured: false,
  },
  {
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'Electronics build',
    title: 'PCB and Digital Systems Prototyping',
    summary:
      'Hands-on hardware prototyping spanning PCB thinking, digital logic, simulation, and bench-level iteration.',
    stack: ['PCB Design', 'Digital Logic', 'Prototyping', 'Testing'],
    points: [
      'Designed and tested concepts through simulation and practical iteration.',
      'Worked through behavior at the circuit and state-transition level.',
      'Used debugging as part of the design process from the start.',
    ],
    repo: null,
    repoNote: 'This work is best shown as supporting visuals or notes.',
    featured: false,
  },
  {
    domain: 'systems',
    domainLabel: 'Systems and Analysis',
    type: 'Architecture study',
    title: 'Cache System Simulation',
    summary:
      'A computer architecture study centered on memory hierarchy behavior and performance tradeoffs.',
    stack: ['Caching', 'COA Concepts', 'Performance Analysis'],
    points: [
      'Simulated cache behavior to study speed and efficiency tradeoffs.',
      'Compared outcomes through system-level reasoning.',
      'Turned abstract architecture ideas into visible engineering decisions.',
    ],
    repo: null,
    repoNote: 'Best presented as a case-study style write-up.',
    featured: false,
  },
  {
    domain: 'systems',
    domainLabel: 'Systems and Analysis',
    type: 'Signal analysis',
    title: 'Discrete-Time Signal System Analysis',
    summary:
      'A study of discrete-time systems and LTI behavior using convolution and impulse-response techniques.',
    stack: ['Signals', 'LTI Systems', 'Convolution', 'Analysis'],
    points: [
      'Analyzed system behavior through impulse-response reasoning.',
      'Studied relationships between input, output, and time invariance.',
      'Connected mathematical analysis to engineering intuition.',
    ],
    repo: null,
    repoNote: 'Represented as analytical portfolio content.',
    featured: false,
  },
  {
    domain: 'systems',
    domainLabel: 'Systems and Analysis',
    type: 'Research track',
    title: 'Telecommunication Research',
    summary:
      'Analytical work around communication models, signal transmission, and system interaction.',
    stack: ['Telecommunications', 'System Modeling', 'Simulation'],
    points: [
      'Explored communication flow and transmission behavior.',
      'Used simulation-style thinking to study broader system performance.',
      'Framed analytical work as part of a wider engineering identity.',
    ],
    repo: null,
    repoNote: 'Publication or notes can be added later if available.',
    featured: false,
  },
]

export const experience = {
  role: 'Intern - Software Developer',
  period: 'Recent experience',
  summary:
    'Practical internship experience working on debugging, proof-of-concept delivery, and front-end development support.',
  points: [
    'Debugged systems using AI-assisted workflows and SQL Server Profiler.',
    'Developed proof-of-concept solutions to validate ideas quickly.',
    'Built front-end components using React and Vue.',
  ],
}

export const education = {
  degree: 'BSc (Hons) in Computer Systems Engineering',
  school: 'Sri Lanka Institute of Information Technology (SLIIT)',
  period: 'Nov 2023 – Expected Nov 2027',
}

export const interestAreas = [
  'Embedded Systems',
  'Robotics',
  'Control Systems',
  'IoT',
  'Industrial Electronics',
]

export const resumeLink = {
  label: 'Download Resume',
  href: '/resume/Mufassir_CV.pdf',
}

export const contactLinks = [
  {
    label: 'Email',
    value: 'mufassirriswan@gmail.com',
    note: 'Best for internships, graduate roles, and direct collaboration.',
    href: 'mailto:mufassirriswan@gmail.com',
    action: 'Send an email',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamedmufassir',
    note: 'Professional profile and career updates.',
    href: 'https://www.linkedin.com/in/mohamedmufassir',
    action: 'Open LinkedIn',
  },
  {
    label: 'GitHub',
    value: 'github.com/M-Mufassir',
    note: 'Code samples and public project work.',
    href: 'https://github.com/M-Mufassir/',
    action: 'Open GitHub',
  },
]
