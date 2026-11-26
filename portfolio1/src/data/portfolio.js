export const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Robotics', to: '/robotics' },
  { label: 'Freelance', to: '/freelance' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export const brandProfile = {
  name: 'Mohamed Mufassir',
  monogram: 'MR',
  title: 'Computer Systems Engineering Undergraduate | Co-Founder @ TechTitude Labs',
  tagline: 'Embedded Systems, Autonomous Robotics & Telecommunication Infrastructure',
  summary:
    'Computer Systems Engineering undergraduate at SLIIT and Co-Founder of TechTitude Labs. Engineering bare-metal microcontroller firmware, closed-loop robotics, and fiber optic infrastructure for real-world deployment.',
  location: 'Thihariya, Sri Lanka',
  education: 'BSc (Hons) in Computer Systems Engineering, SLIIT',
  availability: 'Available for Engineering & R&D Collaborations',
}

export const heroRoles = [
  'EMBEDDED SYSTEMS',
  'AUTONOMOUS ROBOTICS',
  'OPTICAL TELECOM',
  'FIRMWARE ARCHITECT',
]

export const techRibbonItems = [
  'C / Embedded C',
  'AVR Assembly',
  'ATmega328P',
  'ESP32-CAM',
  'Raspberry Pi',
  'PID Control',
  'FSM Logic',
  'Fiber Optics',
  'React & TypeScript',
  'Electron.js',
  'Spring Boot',
  'PostgreSQL',
  'Docker',
]

export const inlineMetrics = [
  { value: 11, suffix: '+', label: 'Systems Engineered' },
  { value: 4, suffix: '', label: 'Core Domains' },
  { value: 2024, suffix: '+', label: 'TechTitude Labs' },
]

export const aboutHighlights = [
  {
    title: 'Bare-Metal & Real-Time Firmware',
    description:
      'Register-level Embedded C and AVR Assembly with deterministic interrupts and tight hardware timing.',
  },
  {
    title: 'Autonomous Robotics & Control Dynamics',
    description:
      'Closed-loop PID speed regulation, multi-sensor fusion, FSM navigation, and live wireless telemetry.',
  },
  {
    title: 'Telecom Infrastructure & Venture R&D',
    description:
      'Optical fiber route feasibility and full-cycle hardware prototyping at TechTitude Labs.',
  },
]

export const skillSections = [
  {
    title: 'Core Programming',
    items: ['C', 'Embedded C', 'AVR Assembly', 'Python', 'JavaScript', 'TypeScript', 'Java'],
  },
  {
    title: 'Embedded, Robotics & Telecom',
    items: ['AVR (ATmega)', 'Arduino Uno', 'ESP32-CAM', 'Raspberry Pi', 'Fiber Optics', 'Sensors & Actuators'],
  },
  {
    title: 'Protocols & Control Dynamics',
    items: ['PID Control', 'FSM Design', 'UART', 'SPI', 'I2C', 'WiFi/HTTP Streaming', 'Optical Networks'],
  },
  {
    title: 'Software Platforms & DevOps',
    items: ['React', 'Vue.js', 'Electron.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
  },
]

export const engineeringProcess = [
  {
    step: '01',
    title: 'Architecture',
    description: 'Define timing budgets, protocol topology, hardware BOM, and state machine specs.',
  },
  {
    step: '02',
    title: 'Schematic & Logic',
    description: 'Design clocked digital logic, sensor conditioning, PCB footprints, and bus routing.',
  },
  {
    step: '03',
    title: 'Firmware & Code',
    description: 'Author bare-metal AVR/ESP32 firmware, PID control loops, and full-stack software.',
  },
  {
    step: '04',
    title: 'Bench & HIL Test',
    description: 'Validate RPM step response, signal integrity, and edge faults on live hardware.',
  },
  {
    step: '05',
    title: 'Field Rollout',
    description: 'Deploy dependable hardware-software systems, optical fiber routes, and client apps.',
  },
]

export const projectCards = [
  {
    slug: 'avr-assembly-autonomous-car',
    domain: 'robotics',
    domainLabel: 'Robotics',
    type: 'Autonomous Robot',
    title: 'AVR - Assembly Autonomous Line-Following Car with Smart Parking',
    seoTitle: 'AVR Assembly Autonomous Line-Following Robot & Smart Parking — Mohamed Mufassir',
    seoDescription:
      'Bare-metal ATmega328P AVR Assembly autonomous robot car with 3-sensor IR line tracking, cross-line FSM state transitions, and IR parking bay detection by Mohamed Mufassir.',
    keywords: [
      'AVR assembly autonomous car',
      'ATmega328P line following robot',
      'smart parking robot AVR',
      'bare-metal embedded robotics',
      'FSM robot control',
      'Mohamed Mufassir robotics',
    ],
    summary:
      'An Arduino Uno robot programmed at AVR assembly level to follow lines, detect cross-line events, search for a parking bay, and park autonomously.',
    stack: ['AVR ATmega', 'Arduino Uno', 'Microchip Studio', 'Embedded C', 'IR Sensors', 'FSM Control'],
    architectureOverview:
      'Built directly on the Arduino Uno ATmega328P microcontroller using AVR Assembly inside Microchip Studio, this autonomous mobile robot eliminates Arduino framework overhead in favor of direct I/O port register manipulation, hardware timer PWM motor speed modulation, and deterministic branching. Three front-mounted IR reflectance sensors feed binary track states into a Finite State Machine (FSM) that continuously steers dual DC drive motors along curves and straightaways.',
    challengesAndLearnings:
      'Key engineering learnings centered on debouncing single versus double cross-line intersections at varying chassis speeds so noisy sensor transitions never caused false state changes. Implementing explicit delay calibration loops, clean register allocation across ISR and main polling paths, and an IR receiver trigger for parking bay alignment produced reliable autonomous line-following, bay acquisition, and route resumption on physical hardware.',
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
    systemHighlight: 'Bare-metal AVR assembly implementation with sub-millisecond interrupt response and autonomous FSM parking routines.',
    relatedSlugs: ['pid-motor-control', 'avr-led-assembly-control', 'esp32-cam-live-streaming-car'],
  },
  {
    slug: 'esp32-cam-live-streaming-car',
    domain: 'robotics',
    domainLabel: 'Robotics & IoT',
    type: 'Live Video Vehicle',
    title: 'ESP32-CAM Remote-Controlled Car with Live Video Streaming',
    seoTitle: 'ESP32-CAM WiFi Robot Car with Live MJPEG Streaming — Mohamed Mufassir',
    seoDescription:
      'Dual-core ESP32-CAM remote-controlled vehicle serving real-time MJPEG video over WiFi alongside mobile/web drive controls, engineered by Mohamed Mufassir.',
    keywords: [
      'ESP32-CAM robot car',
      'ESP32 live video streaming car',
      'WiFi rover embedded C',
      'MJPEG camera robotics',
      'IoT telemetry vehicle',
      'Mohamed Mufassir ESP32',
    ],
    summary:
      'A WiFi-controlled RC car where the ESP32-CAM acts as both access point and video server for real-time driving and camera feedback.',
    stack: ['ESP32-CAM', 'Embedded C', 'JavaScript', 'Vercel', 'WiFi', 'MJPEG Streaming'],
    architectureOverview:
      'Engineered around an ESP32-CAM microcontroller acting simultaneously as a standalone WiFi access point, HTTP MJPEG camera server, and motor control bridge. Rather than blocking directional actuation during camera frame transfers, the firmware separates HTTP video stream handlers from low-latency asynchronous command endpoints wired to the dual H-bridge motor driver stage, paired with a responsive web control surface.',
    challengesAndLearnings:
      'Running WiFi RF transmission, OV2640 frame capture, and inductive DC motor loads from a shared power rail introduces brownout resets unless supply rails are cleanly decoupled. Isolating logic power, tuning JPEG resolution and frame intervals for responsive mobile control over local WiFi, and hosting a clean browser controller flow via Vercel made live wireless driving smooth and dependable.',
    points: [
      'Built a remote-controlled vehicle with live MJPEG video streaming through the ESP32-CAM.',
      'Developed mobile and web-based control surfaces for directional driving and camera feed viewing.',
      'Synchronized movement commands and live video over the ESP32 internal WiFi network.',
      'Published the web controller flow through Vercel for easier demonstration.',
    ],
    images: ['/images/projects/esp32-cam-car/image.png'],
    repo: null,
    systemHighlight: 'Dual-core ESP32 pipeline decoupling live MJPEG video streaming from low-latency motor control commands.',
    relatedSlugs: ['iot-smart-surveillance-system', 'avr-assembly-autonomous-car', 'pid-motor-control'],
  },
  {
    slug: 'pid-motor-control',
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'Control System',
    title: 'PID-Based DC Motor Speed Control System',
    seoTitle: 'PID Motor Control Project (Raspberry Pi & Encoder) — Mohamed Mufassir',
    seoDescription:
      'Real-time closed-loop PID DC motor speed control system built on Raspberry Pi with rotary encoder feedback and Python live RPM telemetry GUI by Mohamed Mufassir.',
    keywords: [
      'PID motor control',
      'PID DC motor speed control',
      'Raspberry Pi PID controller',
      'encoder RPM feedback',
      'closed-loop control systems',
      'Mohamed Mufassir PID',
    ],
    summary:
      'A Raspberry Pi based real-time closed-loop motor control project focused on precise speed regulation and tuning.',
    stack: ['Raspberry Pi', 'Python', 'PID Control', 'Encoder Feedback', 'Live Data Visualization'],
    architectureOverview:
      'Designed as a real-time closed-loop speed controller on Raspberry Pi combining optical rotary encoder feedback with a Python proportional-integral-derivative (PID) control loop and PWM power actuation. Hardware quadrature/pulse interrupts continuously sample shaft RPM against target setpoints, computing proportional error, bounded integral accumulation, and filtered derivative response alongside a custom desktop telemetry GUI.',
    challengesAndLearnings:
      'Practical PID tuning highlighted how PWM deadbands, mechanical load friction, and derivative kick on abrupt setpoint jumps affect steady-state error and overshoot. Implementing live interactive Kp, Ki, and Kd gain adjustments alongside real-time step-response RPM plotting accelerated tuning iteration and clarified real-world sampling interval trade-offs in closed-loop robotics actuation.',
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
    systemHighlight: 'Real-time closed-loop speed regulation with high-resolution encoder sampling and live desktop telemetry visualization.',
    relatedSlugs: ['avr-assembly-autonomous-car', 'pcb-digital-systems-prototyping', 'telecommunication-signal-analysis'],
  },
  {
    slug: 'iot-smart-surveillance-system',
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'IoT Security',
    title: 'IoT Smart Surveillance and Access Control System',
    seoTitle: 'IoT Smart Surveillance & Telegram Access Control (ESP32) — Mohamed Mufassir',
    seoDescription:
      'ESP32 edge surveillance and remote access control workflow featuring intrusion photo capture, UART/I2C interfacing, and Telegram Bot lock commands by Mohamed Mufassir.',
    keywords: [
      'IoT smart surveillance system',
      'ESP32 Telegram access control',
      'embedded security system',
      'UART I2C ESP32 project',
      'freelance IoT developer Sri Lanka',
      'Mohamed Mufassir IoT',
    ],
    summary:
      'An ESP32-based surveillance and access workflow with real-time alerts, image capture, and remote door control.',
    stack: ['ESP32', 'Embedded C', 'Camera', 'Telegram Bot API', 'UART/I2C'],
    architectureOverview:
      'Built on ESP32 firmware connecting motion and presence triggers directly to camera frame capture, encrypted HTTPS Telegram Bot messaging, and remote door lock actuation. Local peripheral buses over UART and I2C coordinate sensor polling and electromechanical relay driving while maintaining non-blocking cloud command polling for instant lock and unlock overrides.',
    challengesAndLearnings:
      'Managing TLS heap fragmentation during multipart camera image uploads on constrained microcontroller RAM was the core engineering constraint. Carefully sequencing buffer lifetimes, debouncing sensor triggers to stop alert storms, and validating remote Telegram sender chat IDs before actuating physical lock relays built strong production instincts for secure edge IoT engineering.',
    points: [
      'Developed surveillance logic with camera and Telegram bot integration.',
      'Captured and transmitted images on intrusion or visitor detection.',
      'Enabled remote lock and unlock actions through Telegram commands.',
      'Implemented UART/I2C communication and real-time IoT messaging across the full flow.',
    ],
    images: ['/images/projects/Surveillance-System/image.png'],
    repo: null,
    systemHighlight: 'Edge-triggered camera surveillance integrated with real-time Telegram cloud bot commands and solenoid locking.',
    relatedSlugs: ['esp32-cam-live-streaming-car', 'pcb-digital-systems-prototyping', 'pid-motor-control'],
  },
  {
    slug: 'fsm-sequence-detector',
    domain: 'systems',
    domainLabel: 'Digital Systems',
    type: 'FSM Design',
    title: 'FSM-Based Sequence Detector',
    seoTitle: 'FSM Sequence Detector with LFSR & PISO Shift Register — Mohamed Mufassir',
    seoDescription:
      'Clock-synchronized digital logic design integrating XOR-feedback LFSR pseudo-random sequence generation, PISO serialization, and Finite State Machine pattern detection.',
    keywords: [
      'FSM sequence detector',
      'LFSR XOR feedback logic',
      'PISO shift register',
      'digital systems design',
      'synchronous finite state machine',
      'Mohamed Mufassir',
    ],
    summary:
      'A digital systems project combining pseudo-random generation, serialization, and finite state machine pattern detection.',
    stack: ['FSM', 'XOR Feedback Logic', 'PISO Shift Register', 'Clocked Digital Design'],
    architectureOverview:
      'Implemented as a multi-stage synchronous digital hardware architecture composed of an XOR-feedback Linear Feedback Shift Register (LFSR) pattern source, a Parallel-In Serial-Out (PISO) shift register stage, and a clocked Finite State Machine (FSM) detector. A shared global clock domain drives state transitions cleanly across flip-flops so bitstreams match deterministically.',
    challengesAndLearnings:
      'Debugging setup/hold timing alignment between the PISO load pulse and the first valid serialized bitstream edge ensured no off-by-one bit slips reached the state detector. Deriving minimal state transition tables and verifying overlapping versus non-overlapping bit sequences reinforced hardware timing fundamentals critical for ASIC/FPGA and bare-metal bus protocols.',
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
    systemHighlight: 'Clock-synchronized synchronous sequential logic with LFSR pseudo-random bitstream generation and PISO shift serialization.',
    relatedSlugs: ['pcb-digital-systems-prototyping', 'avr-assembly-autonomous-car', 'telecommunication-signal-analysis'],
  },
  {
    slug: 'learning-management-system',
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Backend Platform',
    title: 'Learning Management System',
    seoTitle: 'Spring Boot & PostgreSQL Learning Management System — Mohamed Mufassir',
    seoDescription:
      'Scalable Spring Boot REST API backend for a Learning Management System featuring JWT security filters, course workflows, and relational PostgreSQL persistence.',
    keywords: [
      'Spring Boot Learning Management System',
      'Java REST API JWT PostgreSQL',
      'backend software engineer Sri Lanka',
      'freelance Java Spring Boot developer',
      'Mohamed Mufassir software',
    ],
    summary:
      'A Spring Boot based learning platform with backend APIs for authentication, course management, and scalable data handling.',
    stack: ['Spring Boot', 'Java', 'REST APIs', 'PostgreSQL', 'JWT Auth'],
    architectureOverview:
      'Architected as a layered Java Spring Boot REST backend separating controller validation, transactional business services, and JPA/PostgreSQL repositories. Stateless JWT authentication secures role-based endpoints across instructors, learners, and administrators while keeping schema migrations and API contracts cleanly extensible.',
    challengesAndLearnings:
      'Structuring normalized enrollment, module progression, and role-permission boundaries without creating N+1 query bottlenecks taught practical PostgreSQL indexing and Spring Security filter-chain hygiene. Clean DTO boundaries keep frontend web and desktop consumers decoupled from internal database entity structures.',
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
    systemHighlight: 'Multi-tiered enterprise REST backend with JWT authentication, role-based access control, and PostgreSQL persistence.',
    relatedSlugs: ['desktop-pos-system', 'commercial-business-web-apps', 'iot-smart-surveillance-system'],
  },
  {
    slug: 'desktop-pos-system',
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Desktop Product',
    title: 'Desktop POS System',
    seoTitle: 'Electron.js & TypeScript Desktop POS System — Mohamed Mufassir',
    seoDescription:
      'Cross-platform Electron.js, TypeScript, React, and PostgreSQL point-of-sale desktop product engineered by Mohamed Mufassir during ZILLIT Technologies internship.',
    keywords: [
      'Electron TypeScript POS system',
      'Desktop point of sale React PostgreSQL',
      'ZILLIT Technologies internship',
      'freelance desktop software developer',
      'Mohamed Mufassir POS',
    ],
    summary:
      'A cross-platform desktop point-of-sale system focused on inventory management, sales flow, and a modular product structure.',
    stack: ['Electron.js', 'TypeScript', 'React', 'PostgreSQL'],
    architectureOverview:
      'Engineered during my Software Engineering internship at ZILLIT Technologies as sole developer of a desktop Point-of-Sale product built with Electron.js, TypeScript, React, and PostgreSQL. Typed IPC channels link the React UI renderer with local hardware/database services so checkout scanning, stock updates, and billing workflows execute rapidly.',
    challengesAndLearnings:
      'Retail checkout workflows cannot stall on flaky internet or ambiguous transaction state. Building strict TypeScript data validation across Electron IPC boundaries, designing fast keyboard-driven billing ergonomics, and structuring modular inventory components delivered dependable cross-platform software aligned with an upcoming IoT retail ecosystem.',
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
    systemHighlight: 'Cross-platform desktop application built for offline-first transactional integrity, receipt printing, and real-time inventory management.',
    relatedSlugs: ['learning-management-system', 'commercial-business-web-apps', 'iot-smart-surveillance-system'],
  },
  {
    slug: 'commercial-business-web-apps',
    domain: 'software',
    domainLabel: 'Software Engineering',
    type: 'Web Application',
    title: 'Commercial Business Web Applications',
    seoTitle: 'Freelance React Commercial Business Web Apps — Mohamed Mufassir',
    seoDescription:
      'Tailored React & modern frontend websites built for jewelry retail, hardware stores, restaurants, and booking platforms by freelance developer Mohamed Mufassir.',
    keywords: [
      'freelance React web developer Sri Lanka',
      'commercial business web applications',
      'booking platform UI UX',
      'retail website developer',
      'Mohamed Mufassir freelance',
    ],
    summary:
      'Production-grade websites for retail, restaurant, and booking platforms with tailored design systems and high-converting UX.',
    stack: ['React', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
    architectureOverview:
      'Delivered end-to-end commercial web platforms for real-world clients spanning jewelry retail, hardware supply, restaurant dining, and indoor playground slot reservations. Each site pairs custom responsive layouts with semantic HTML structure, fast media delivery, and streamlined inquiry/booking call-to-actions built with React and modern CSS.',
    challengesAndLearnings:
      'Real small-business clients need mobile speed, local search visibility, and immediate customer trust rather than generic templates. Translating distinct brand identities into clean conversion funnels, responsive mobile viewports, and accessible navigation taught strong product alignment between visual UI craft and measurable client inquiries.',
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
    systemHighlight: 'High-conversion, SEO-optimized digital web applications engineered with modern component hierarchies and fluid responsive styling.',
    relatedSlugs: ['desktop-pos-system', 'learning-management-system', 'esp32-cam-live-streaming-car'],
  },
  {
    slug: 'avr-led-assembly-control',
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'Low-Level Control',
    title: 'AVR LED Control Using Assembly',
    seoTitle: 'Bare-Metal AVR Assembly LED & Register Timing Control — Mohamed Mufassir',
    seoDescription:
      'Register-level AVR Assembly firmware controlling ATmega digital output ports, cycle-counted instruction timing loops, and bitwise masking by Mohamed Mufassir.',
    keywords: [
      'AVR assembly LED control',
      'ATmega register programming',
      'embedded assembly firmware',
      'microcontroller instruction timing',
      'Mohamed Mufassir AVR',
    ],
    summary:
      'A low-level microcontroller exercise focused on direct hardware control and instruction-level reasoning.',
    stack: ['AVR Assembly', 'Microcontroller Programming'],
    architectureOverview:
      'Written directly in AVR instruction mnemonics targeting ATmega Data Direction (`DDRx`) and Output (`PORTx`) registers without C runtime libraries or abstraction macros. Nested general-purpose register countdown loops precisely regulate clock cycle execution for deterministic visual sequencing and bitwise state toggling across digital pins.',
    challengesAndLearnings:
      'Calculating exact machine-cycle execution budgets across branch instructions built foundational clarity about how high-level embedded C compiles down to silicon. That low-level register comfort directly unlocked later complex bare-metal builds such as my autonomous AVR assembly line-following and smart parking car.',
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
    systemHighlight: 'Direct hardware port manipulation, precise software timing delays, and register-level execution on ATmega architecture.',
    relatedSlugs: ['avr-assembly-autonomous-car', 'pcb-digital-systems-prototyping', 'fsm-sequence-detector'],
  },
  {
    slug: 'pcb-digital-systems-prototyping',
    domain: 'embedded',
    domainLabel: 'Embedded Systems',
    type: 'Electronics Build',
    title: 'PCB and Digital Systems Prototyping',
    seoTitle: 'PCB Design, Schematic Capture & Hardware Prototyping — Mohamed Mufassir',
    seoDescription:
      'End-to-end electronics prototyping workflows covering schematic capture, circuit simulation, PCB layout considerations, and oscilloscope validation by Mohamed Mufassir.',
    keywords: [
      'PCB prototyping Sri Lanka',
      'embedded hardware design',
      'digital systems circuit debugging',
      'freelance electronics engineer',
      'Mohamed Mufassir PCB',
    ],
    summary:
      'Hands-on hardware prototyping spanning PCB thinking, digital logic, simulation, and bench-level iteration.',
    stack: ['PCB Design', 'Digital Logic', 'Prototyping', 'Testing'],
    architectureOverview:
      'Hardware engineering workflows bridging circuit schematic capture, digital logic simulation, copper trace/power plane PCB layout, and physical bench testing. Incorporates decoupling capacitance placement, clean digital/power ground separation, logic probe checks, and iterative fault isolation before committing revisions to copper fabrication.',
    challengesAndLearnings:
      'Bridging clean idealized schematics with physical hardware noise teaches how breadboard parasitics, voltage drop across motor traces, and missing pull-ups show up only under oscilloscope probes. Integrating test headers and diagnostic checkpoints from day one dramatically speeds up embedded bring-up and reliability.',
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
    systemHighlight: 'End-to-end hardware development covering schematic capture, digital logic simulation, PCB layout, and bench oscilloscope validation.',
    relatedSlugs: ['fsm-sequence-detector', 'pid-motor-control', 'avr-assembly-autonomous-car'],
  },
  {
    slug: 'telecommunication-signal-analysis',
    domain: 'systems',
    domainLabel: 'Systems & Telecommunications',
    type: 'Signal Analysis',
    title: 'Telecommunication & Signal Analysis Research',
    seoTitle: 'Optical Fiber Telecom & Signal Processing Research — Mohamed Mufassir',
    seoDescription:
      'Analytical modeling and simulation of optical fiber attenuation, dispersion, LTI impulse convolution, and digital modulation by Mohamed Mufassir.',
    keywords: [
      'optical fiber telecommunications',
      'signal processing LTI convolution',
      'fiber optic network infrastructure',
      'telecommunication engineering Sri Lanka',
      'Mohamed Mufassir telecom',
    ],
    summary:
      'Analytical and simulation work around communication models, signal transmission, modulation, and optical/wireless networks.',
    stack: ['Telecommunications', 'Fiber Optics', 'Signal Processing', 'Simulation'],
    architectureOverview:
      'Analytical engineering and simulation studies examining discrete-time LTI system behavior, convolution and impulse response characterization, digital modulation schemes, and optical fiber link budgeting. Directly connects mathematical signal integrity theory to real-world fiber rollout feasibility, splicing standards, and attenuation limits.',
    challengesAndLearnings:
      'Seeing attenuation curves, dispersion budgets, and SNR margins alongside real-world telecom field rollout during my Fiber Project Management internship connected classroom DSP theory directly to field infrastructure engineering—demonstrating how clean signal analysis prevents costly link failures.',
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
    systemHighlight: 'Analytical modeling of optical attenuation, fiber dispersion limits, LTI convolution, and digital signal modulation schemes.',
    relatedSlugs: ['pid-motor-control', 'fsm-sequence-detector', 'esp32-cam-live-streaming-car'],
  },
]

export const experiences = [
  {
    category: 'Telecommunications',
    role: 'Intern - Fiber Project Management',
    company: 'Telecom Infrastructure',
    period: '2026 — Present',
    summary:
      'Hands-on involvement in optical fiber infrastructure planning, route feasibility analysis, and telecommunication network rollout.',
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
      'Co-founded TechTitude Labs to innovate, prototype, and build production-grade embedded hardware, robotics systems, and enterprise software.',
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

export const inquiryTopics = [
  'Software',
  'IoT',
  'Embedded Systems',
  'Robotics',
  'Telecom / R&D',
]

export const freelanceTracks = [
  {
    num: '01',
    slug: 'software-engineering',
    topic: 'Software',
    title: 'Software Engineering',
    description:
      'Production React & TypeScript web apps, cross-platform Electron.js desktop tools, Spring Boot REST APIs, and PostgreSQL systems.',
    deliverables: [
      'Custom React / TypeScript websites and booking platforms',
      'Cross-platform Electron.js desktop software & POS tools',
      'Java Spring Boot REST APIs with JWT & PostgreSQL',
    ],
    relatedSlugs: ['desktop-pos-system', 'learning-management-system', 'commercial-business-web-apps'],
  },
  {
    num: '02',
    slug: 'iot-connected-edge',
    topic: 'IoT',
    title: 'IoT & Connected Edge',
    description:
      'ESP32/ESP32-CAM devices, live MJPEG video & sensor streaming, Telegram/cloud alerts, and remote monitoring dashboards.',
    deliverables: [
      'ESP32 / ESP32-CAM WiFi telemetry & MJPEG live streaming',
      'Automated Telegram / cloud bot alerts & remote control',
      'UART, SPI & I2C sensor acquisition pipelines',
    ],
    relatedSlugs: ['iot-smart-surveillance-system', 'esp32-cam-live-streaming-car'],
  },
  {
    num: '03',
    slug: 'embedded-systems-firmware',
    topic: 'Embedded Systems',
    title: 'Embedded Systems & Firmware',
    description:
      'Bare-metal C & AVR Assembly microcontroller programming, UART/SPI/I2C interfacing, PCB prototyping, and bench validation.',
    deliverables: [
      'Register-level ATmega / AVR Assembly & Embedded C firmware',
      'Interrupt-driven timer PWM & digital sensor conditioning',
      'Schematic capture, logic simulation & PCB bring-up testing',
    ],
    relatedSlugs: ['avr-assembly-autonomous-car', 'avr-led-assembly-control', 'pcb-digital-systems-prototyping'],
  },
  {
    num: '04',
    slug: 'autonomous-robotics-control',
    topic: 'Robotics',
    title: 'Autonomous Robotics & Control',
    description:
      'Closed-loop PID motor speed regulation, IR/encoder sensor fusion, finite state machine autonomy, and prototype builds.',
    deliverables: [
      'Closed-loop PID motor control & rotary encoder feedback',
      'Finite State Machine (FSM) autonomous line & bay navigation',
      'Python live telemetry & gain-tuning desktop dashboards',
    ],
    relatedSlugs: ['pid-motor-control', 'avr-assembly-autonomous-car', 'esp32-cam-live-streaming-car'],
  },
]

export const roboticsLearnings = [
  {
    id: '01',
    title: 'Bare-Metal Register Timing & Finite State Machine Autonomy',
    focus: 'ATmega328P • AVR Assembly • IR Line & Parking FSM',
    summary:
      'Programming robotics directly in AVR Assembly strips away timer abstractions and forces exact cycle-level accountability. Structuring driving behavior as an explicit Finite State Machine prevents erratic mode switches at line intersections.',
    takeaways: [
      'Debounce single and double cross-line IR array transitions cleanly before switching states.',
      'Separate fast PWM motor drive loops from sensor polling logic to eliminate jerky turns.',
      'Explicit register preservation inside assembly subroutines prevents silent hardware lockups.',
    ],
    projectSlugs: ['avr-assembly-autonomous-car', 'avr-led-assembly-control'],
  },
  {
    id: '02',
    title: 'Closed-Loop PID Motor Speed Control & Live Telemetry',
    focus: 'Raspberry Pi • Quadrature/Optical Encoder • Python GUI',
    summary:
      'Open-loop PWM duty cycles collapse under changing mechanical torque and battery sag. Closing the loop with optical rotary encoder RPM sampling and a live gain-tuning plot reveals overshoot, integral windup, and steady-state drift immediately.',
    takeaways: [
      'Clamp integral accumulation carefully (anti-windup) so startup stalls do not overshoot target RPM.',
      'Measure and filter encoder pulses at consistent sample periods before computing derivative slope.',
      'Plot live setpoint vs measured RPM curves to verify Kp, Ki, and Kd response empirically.',
    ],
    projectSlugs: ['pid-motor-control', 'pcb-digital-systems-prototyping'],
  },
  {
    id: '03',
    title: 'Dual-Core ESP32-CAM Video Streaming & Power Integrity',
    focus: 'ESP32-CAM • Embedded C • WiFi MJPEG • Edge IoT',
    summary:
      'Streaming MJPEG camera frames over WiFi while driving DC motors or running TLS encryption stresses microcontroller RAM and power rails. Clean rail decoupling and decoupled frame/control loops keep latency crisp.',
    takeaways: [
      'Isolate inductive H-bridge motor noise from 3.3V logic/RF power rails to avoid brownout resets.',
      'Separate live HTTP MJPEG frame serving from lightweight directional motor endpoints.',
      'Verify remote lock/actuation sender identity and bound buffer lifetimes during TLS alerts.',
    ],
    projectSlugs: ['esp32-cam-live-streaming-car', 'iot-smart-surveillance-system'],
  },
  {
    id: '04',
    title: 'Synchronous Digital Logic & Optical Network Foundations',
    focus: 'LFSR / PISO / FSM • Fiber Optics • Signal Integrity',
    summary:
      'Reliable embedded and robotics hardware sits on clean digital timing and physical transmission physics—from clock-synchronized shift registers up to optical fiber attenuation budgets.',
    takeaways: [
      'Align PISO serialization load pulses cleanly with system clock edges so downstream FSMs stay deterministic.',
      'Account for optical attenuation, splicing budgets, and LTI impulse response in communication links.',
      'Embed oscilloscope probe points and logic simulation checks early in hardware bring-up.',
    ],
    projectSlugs: ['fsm-sequence-detector', 'telecommunication-signal-analysis', 'pcb-digital-systems-prototyping'],
  },
]

export const freelanceFaqs = [
  {
    question: 'What freelance engineering services does Mohamed Mufassir provide?',
    answer:
      'I build end-to-end systems across Software Engineering (React, TypeScript, Electron.js desktop apps, Spring Boot APIs, PostgreSQL), IoT & Connected Edge devices (ESP32/ESP32-CAM, cloud/Telegram automation), Embedded Systems (Embedded C, AVR Assembly, PCB prototyping), and Autonomous Robotics (PID motor control, sensor fusion, FSM prototypes).',
  },
  {
    question: 'Do you take remote projects as well as clients in Sri Lanka?',
    answer:
      'Yes. I collaborate with startups, businesses, and engineering teams both across Sri Lanka and remotely worldwide, covering architecture planning, firmware/software implementation, live video testing, and deployment.',
  },
  {
    question: 'Can you deliver complete hardware + software prototypes together?',
    answer:
      'Yes. Through hands-on experience at TechTitude Labs, ZILLIT Technologies, and SLIIT engineering builds, I handle microcontroller firmware alongside custom desktop or web control dashboards.',
  },
  {
    question: 'How can I contact you directly with a project brief?',
    answer:
      'Reach me anytime via email at mufassirriswan@gmail.com or directly on phone/WhatsApp at +94 77 423 3426 or +94 71 423 3425.',
  },
]

export const resumeLink = {
  label: 'Download Technical CV',
  href: '/resume/Mufassir_CV.pdf',
}

export const contactLinks = [
  {
    label: 'Email',
    value: 'mufassirriswan@gmail.com',
    note: 'Primary channel for freelance briefs, engineering projects, and technical inquiries.',
    href: 'mailto:mufassirriswan@gmail.com',
    action: 'Send an email',
    copyable: true,
  },
  {
    label: 'Phone / WhatsApp 1',
    value: '+94 77 423 3426',
    rawValue: '+94774233426',
    note: 'Direct mobile line & WhatsApp for project discussions and urgent consultations.',
    href: 'tel:+94774233426',
    whatsapp: 'https://wa.me/94774233426',
    action: 'Call +94 77 423 3426',
    copyable: true,
  },
  {
    label: 'Phone / WhatsApp 2',
    value: '+94 71 423 3425',
    rawValue: '+94714233425',
    note: 'Alternate direct contact line for freelance collaborations and project inquiries.',
    href: 'tel:+94714233425',
    whatsapp: 'https://wa.me/94714233425',
    action: 'Call +94 71 423 3425',
    copyable: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamedmufassir',
    note: 'Connect for professional networking, industry updates, and career milestones.',
    href: 'https://www.linkedin.com/in/mohamedmufassir',
    action: 'Open LinkedIn',
  },
  {
    label: 'GitHub',
    value: 'github.com/M-Mufassir',
    note: 'Explore open-source repositories, microcontroller firmware, and codebases.',
    href: 'https://github.com/M-Mufassir/',
    action: 'Open GitHub',
  },
]
