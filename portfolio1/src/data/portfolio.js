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
  title: 'Computer Systems Engineering Undergraduate | Co-Founder @ TechTitude Labs',
  tagline: 'Embedded Systems, Robotics, IoT & Telecommunication',
  summary:
    'Computer Systems Engineering undergraduate at SLIIT, Co-Founder of TechTitude Labs, and Intern in Fiber Project Management. Passionate about building intelligent hardware-software systems, embedded firmware, robotics, and telecom infrastructure.',
  location: 'Thihariya, Sri Lanka',
  education: 'BSc (Hons) in Computer Systems Engineering, SLIIT',
  availability: 'Intern - Fiber Project Management | Co-Founder @ TechTitude Labs',
}

export const heroMetrics = [
  { label: 'Focus', value: 'Embedded, Robotics & Telecom' },
  { label: 'Venture', value: 'Co-Founder @ TechTitude Labs' },
  { label: 'Education', value: 'SLIIT (2023 — 2027)' },
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
    title: 'Leadership & Entrepreneurship',
    description:
      'As Co-Founder of TechTitude Labs, I drive hands-on hardware innovation, robotics prototyping, and engineering solutions.',
  },
]

export const skillSections = [
  {
    title: 'Programming',
    items: ['C', 'Embedded C', 'AVR Assembly', 'Python', 'JavaScript', 'TypeScript', 'Java'],
  },
  {
    title: 'Embedded, Robotics & Telecom',
    items: ['AVR (ATmega)', 'Arduino Uno', 'ESP32-CAM', 'Raspberry Pi', 'Fiber Optics', 'Sensors & Actuators'],
  },
  {
    title: 'Protocols & Control',
    items: ['PID Control', 'FSM Design', 'UART', 'SPI', 'I2C', 'WiFi/HTTP Streaming', 'Optical Networks'],
  },
  {
    title: 'Software & Tools',
    items: ['React', 'Vue.js', 'Electron.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
  },
]

export const projectCards = [
  {
    domain: 'robotics',
    domainLabel: 'Robotics',
    type: 'Autonomous robot',
    title: 'AVR - Assembly Autonomous Line-Following Car with Smart Parking',
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
    repoNote: 'Based on the latest verified project builds.',
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
    repoNote: 'ESP32 firmware integrated with Telegram cloud bot.',
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
    repoNote: 'Digital logic and state machine verification.',
  },
  {
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Backend platform',
    title: 'Learning Management System',
    summary:
      'A Spring Boot based learning platform with backend APIs for authentication, course management, and scalable data handling.',
    stack: ['Spring Boot', 'Java', 'REST APIs', 'PostgreSQL', 'JWT Auth'],
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
    repoNote: 'Spring Boot REST backend architecture.',
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
    repoNote: 'Production desktop software built with Electron & TypeScript.',
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
    repoNote: 'Client production web applications.',
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
    repoNote: 'Low-level assembly register manipulation.',
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
    images: [
      '/images/projects/PCB-and-Digital-Systems/1.png',
      '/images/projects/PCB-and-Digital-Systems/2.png',
      '/images/projects/PCB-and-Digital-Systems/3.png',
      '/images/projects/PCB-and-Digital-Systems/image.png',
    ],
    repo: null,
    repoNote: 'Schematic, PCB layout, and bench testing.',
  },
  {
    domain: 'systems',
    domainLabel: 'Systems & Telecommunications',
    type: 'Telecommunication & Signal Analysis',
    title: 'Telecommunication & Signal Analysis Research',
    summary:
      'Analytical and simulation work around communication models, signal transmission, modulation, and optical/wireless networks.',
    stack: ['Telecommunications', 'Fiber Optics', 'Signal Processing', 'Simulation'],
    points: [
      'Explored communication flows, optical signal transmission, and modulation techniques.',
      'Studied discrete-time systems and LTI behavior with convolution and impulse response.',
      'Connected theoretical communication models to real-world optical network infrastructure.',
    ],
    images: [
      '/images/projects/telecommunication/image.png',
      '/images/projects/Signal-and-system/image.png',
      '/images/projects/cache-design/image.png',
    ],
    repo: null,
    repoNote: 'Telecom & signal systems research.',
  },
]

export const experiences = [
  {
    category: 'Telecommunications',
    role: 'Intern - Fiber Project Management',
    company: 'Telecom Infrastructure',
    period: '2026 — Present',
    summary:
      'Hands-on exposure to optical fiber infrastructure planning, project coordination, route feasibility, and telecommunication network rollout.',
    points: [
      'Assisting in optical fiber rollout planning, site survey analysis, and project execution tracking.',
      'Coordinating field milestones, resource allocation, and telecommunications infrastructure reporting.',
      'Deepening practical knowledge in optical transmission networks, splicing standards, and telecom lifecycle management.',
    ],
  },
  {
    category: 'Venture & Leadership',
    role: 'Co-Founder & Tech Lead',
    company: 'TechTitude Labs',
    period: '2024 — Present',
    summary:
      'Co-founded TechTitude Labs to engineer innovative embedded systems, robotics platforms, IoT hardware, and custom software solutions.',
    points: [
      'Leading R&D for autonomous robotics, IoT hardware prototypes, and embedded control systems.',
      'Directing end-to-end product architecture from schematic and firmware development to client deployment.',
      'Conducting technical workshops and mentoring students in embedded C, microcontroller programming, and robotics.',
    ],
  },
  {
    category: 'Software Engineering',
    role: 'Software Engineering Intern',
    company: 'ZILLIT Technologies',
    period: 'Nov 2025 — Feb 2026',
    summary:
      'Startup internship experience across cross-platform desktop application engineering, enterprise front-end systems, and production architecture.',
    points: [
      'Led sole development of a cross-platform POS desktop application using Electron.js and TypeScript.',
      'Built front-end features for an enterprise financial management system using Vue.js with a Spring Boot backend.',
      'Worked with React, TypeScript, Vue.js, Electron.js, PostgreSQL, and Docker.',
    ],
  },
  {
    category: 'Freelance',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 — Present',
    summary:
      'Designed and delivered high-performance business websites and digital solutions for local and international clients.',
    points: [
      'Developed and launched responsive websites for retail stores, restaurants, and booking systems.',
      'Handled complete project lifecycle from UI/UX design and wireframing to React frontend implementation.',
    ],
  },
]

// For backwards compatibility
export const experience = experiences[2]
export const freelanceExperience = experiences[3]

export const education = {
  degree: 'BSc (Hons) in Computer Systems Engineering',
  school: 'Sri Lanka Institute of Information Technology (SLIIT)',
  period: 'Nov 2023 — Expected Nov 2027',
}

export const interestAreas = [
  'Embedded Systems & Firmware',
  'Robotics & Autonomous Control',
  'Optical Fiber & Telecommunications',
  'IoT & Edge Computing',
  'Real-Time Systems',
  'Digital Systems Design',
]

export const resumeLink = {
  label: 'Download Resume',
  href: '/resume/Mufassir_CV.pdf',
}

export const contactLinks = [
  {
    label: 'Email',
    value: 'mufassirriswan@gmail.com',
    note: 'Direct email for internships, roles, and engineering collaborations.',
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
    note: 'Public repositories, firmware, and code samples.',
    href: 'https://github.com/M-Mufassir/',
    action: 'Open GitHub',
  },
]
