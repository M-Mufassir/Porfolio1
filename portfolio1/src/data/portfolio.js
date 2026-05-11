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
  tagline: 'Embedded Systems, Robotics, and Real-Time Control',
  summary:
    'I build intelligent hardware-software systems, from AVR-programmed autonomous robots to IoT-connected vehicles and real-time control systems.',
  location: 'Thihariya, Sri Lanka',
  education: 'BSc (Hons) in Computer Systems Engineering, SLIIT',
  availability: 'Open to internships, graduate roles, and engineering collaborations',
}

export const heroMetrics = [
  { label: 'Focus', value: 'Embedded, robotics, real-time control' },
  { label: 'Education', value: 'SLIIT - 2023 to 2027' },
  { label: 'Tools', value: 'AVR, ESP32-CAM, Raspberry Pi, Python' },
]

export const aboutHighlights = [
  {
    title: 'Embedded and real-time systems',
    description:
      'I enjoy building systems that combine sensing, control logic, and device-level programming into dependable engineering solutions.',
  },
  {
    title: 'Robotics and control focus',
    description:
      'My strongest project work sits around autonomous behaviour, PID control, live telemetry, and practical hardware integration.',
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
    items: ['C', 'Embedded C', 'AVR Assembly', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Embedded and Robotics',
    items: ['AVR (ATmega)', 'Arduino Uno', 'ESP32-CAM', 'Raspberry Pi', 'Sensors and Actuators'],
  },
  {
    title: 'Protocols and Control',
    items: ['PID Control', 'FSM Design', 'UART', 'SPI', 'I2C', 'WiFi/HTTP Streaming'],
  },
  {
    title: 'Software and Tools',
    items: ['React', 'Vue.js', 'Electron.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
  },
]

export const projectCards = [
  {
    domain: 'robotics',
    domainLabel: 'Robotics',
    type: 'Autonomous robot',
    title: 'AVR Autonomous Line-Following Car with Smart Parking',
    summary:
      'An Arduino Uno robot programmed at AVR level to follow lines, detect cross-line events, search for a parking bay, and park autonomously.',
    stack: ['AVR ATmega', 'Arduino Uno', 'Microchip Studio', 'Embedded C', 'IR Sensors', 'FSM Control'],
    points: [
      'Programmed line tracking and cross-line detection logic using three IR sensors.',
      'Implemented parking bay detection with an IR receiver and autonomous parking behaviour.',
      'Used single and double cross-line events to switch between line-following, parking search, and resume modes.',
      'Demonstrated a full FSM-based behavioural control system on real robot hardware.',
    ],
    images: [
      '/images/projects/AVR-Assembly/image-1.png',
      '/images/projects/AVR-Assembly/image-2.png',
    ],
    repo: null,
    repoNote: 'Featured first to align the portfolio with embedded and robotics roles.',
  },
  {
    domain: 'robotics',
    domainLabel: 'Robotics and IoT',
    type: 'Live video vehicle',
    title: 'ESP32-CAM Remote-Controlled Car with Live Video Streaming',
    summary:
      'A WiFi-controlled RC car where the ESP32-CAM acts as both access point and video server for real-time driving and camera feedback.',
    stack: ['ESP32-CAM', 'Embedded C', 'JavaScript', 'Vercel', 'WiFi', 'MJPEG Streaming'],
    points: [
      'Built a remote-controlled vehicle with live MJPEG video streaming through the ESP32-CAM.',
      'Developed mobile and web-based control surfaces for directional driving and camera feed viewing.',
      'Synchronized movement commands and live video over the ESP32 internal WiFi network.',
      'Published the web controller flow through Vercel for easier demonstration.',
    ],
    images: ['/images/projects/esp32-cam-car/image.png'],
    repo: null,
    repoNote: 'Uses the default image until project-specific RC car images are added.',
  },
  {
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'Control system',
    title: 'PID-Based DC Motor Speed Control System',
    summary:
      'A Raspberry Pi based real-time closed-loop motor control project focused on precise speed regulation and tuning.',
    stack: ['Raspberry Pi', 'Python', 'PID Control', 'Encoder Feedback', 'Live Data Visualization'],
    points: [
      'Designed a real-time closed-loop control system using a PID algorithm.',
      'Integrated encoder feedback for accurate RPM measurement and regulation.',
      'Built a Python desktop GUI for live RPM graphs, tuning parameters, and motor behaviour analysis.',
      'Achieved stable, accurate motor control and documented system performance.',
    ],
    images: [
      '/images/projects/PID/PID-1.png',
      '/images/projects/PID/PID-2.png',
      '/images/projects/PID/PID-3.png',
    ],
    repo: null,
    repoNote: 'Based on the latest uploaded CV.',
  },
  {
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'IoT security',
    title: 'IoT Smart Surveillance and Access Control System',
    summary:
      'An ESP32-based surveillance and access workflow with real-time alerts, image capture, and remote door control.',
    stack: ['ESP32', 'Embedded C', 'Camera', 'Telegram Bot API', 'UART/I2C'],
    points: [
      'Developed surveillance logic with camera and Telegram bot integration.',
      'Captured and transmitted images on intrusion or visitor detection.',
      'Enabled remote lock and unlock actions through Telegram commands.',
      'Implemented UART/I2C communication and real-time IoT messaging across the full flow.',
    ],
    images: ['/images/projects/Surveillance-System/image.png'],
    repo: null,
    repoNote: 'Based on the latest uploaded CV.',
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
    images: [
      '/images/projects/FSM-Sequence-detector/1.png',
      '/images/projects/FSM-Sequence-detector/2.png',
      '/images/projects/FSM-Sequence-detector/3.png',
    ],
    repo: null,
    repoNote: 'Based on the latest uploaded CV.',
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
    images: [
      '/images/projects/LMS/image.png',
      '/images/projects/LMS/image-1.png',
      '/images/projects/LMS/image-2.png',
    ],
    repo: null,
    repoNote: 'Project details updated from the latest uploaded CV.',
  },
  {
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Desktop product',
    title: 'Desktop POS System',
    summary:
      'A cross-platform desktop point-of-sale system focused on inventory management, sales flow, and a modular product structure.',
    stack: ['Electron.js', 'TypeScript', 'React', 'PostgreSQL'],
    points: [
      'Led sole development during the ZILLIT internship as part of a wider IoT ecosystem direction.',
      'Built inventory and transaction flows around a desktop interface.',
      'Used Electron and TypeScript for cross-platform application delivery.',
    ],
    images: [
      '/images/projects/POS/1.png',
      '/images/projects/POS/2.png',
      '/images/projects/POS/3.png',
      '/images/projects/POS/4.png',
    ],
    repo: null,
    repoNote: 'Repository link can be added when the public repo is ready.',
  },
  {
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Web build',
    title: 'Business Website Development',
    summary:
      'Business-facing websites for local clients, including retail, restaurant, and booking-platform style work.',
    stack: ['React', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
    points: [
      'Designed and developed websites for a jewelry shop, hardware store, restaurant, and indoor playground booking platform.',
      'Delivered end-to-end work across UI design, branding, and front-end development.',
      'Improved hierarchy, trust, and mobile responsiveness for real-world business use.',
    ],
    images: [
      '/images/projects/personal-website/1.png',
      '/images/projects/personal-website/2.png',
      '/images/projects/personal-website/3.png',
      '/images/projects/personal-website/4.png',
    ],
    repo: null,
    repoNote: 'Case-study links can be added for selected client work.',
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
    images: [
      '/images/projects/LED-Blink/1.jpeg',
      '/images/projects/LED-Blink/2.jpeg',
    ],
    repo: null,
    repoNote: 'Presented as a focused lab-style build.',
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
    images: ['/images/projects/PCB-and-Digital-Systems/1.png','/images/projects/PCB-and-Digital-Systems/2.png','/images/projects/PCB-and-Digital-Systems/3.png','/images/projects/PCB-and-Digital-Systems/image.png'],
    repo: null,
    repoNote: 'This work is best shown as supporting visuals or notes.',
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
    images: ['/images/projects/cache-design/image.png'],
    repo: null,
    repoNote: 'Best presented as a case-study style write-up.',
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
    images: ['/images/projects/Signal-and-system/image.png'],
    repo: null,
    repoNote: 'Represented as analytical portfolio content.',
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
    images: ['/images/projects/telecommunication/image.png'],
    repo: null,
    repoNote: 'Publication or notes can be added later if available.',
  },
]

export const experience = {
  role: 'Software Engineering Intern - ZILLIT',
  period: 'Nov 2025 - Feb 2026',
  summary:
    'Startup internship experience across desktop product development, enterprise front-end work, and production-oriented architecture decisions.',
  points: [
    'Led sole development of a cross-platform POS desktop application using Electron.js and TypeScript.',
    'Built front-end features for an enterprise financial management system using Vue.js with a Spring Boot backend.',
    'Worked with React, TypeScript, Vue.js, Electron.js, PostgreSQL, and Docker.',
  ],
}

export const freelanceExperience = {
  role: 'Freelance Web Developer',
  period: '2024 - Present',
  summary:
    'Designed and developed business websites for local and online clients, covering UI design, branding, and front-end delivery.',
}

export const education = {
  degree: 'BSc (Hons) in Computer Systems Engineering',
  school: 'Sri Lanka Institute of Information Technology (SLIIT)',
  period: 'Nov 2023 - Expected Nov 2027',
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
