import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X, Cpu, Zap, Code } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "MS in ECE with hands-on expertise in RTL-to-GDSII physical design, STA/MCMM timing closure, IR-drop/crosstalk mitigation, and ML-based silicon characterization targeting DL/AI workloads. 2+ years of Python automation and data analysis experience.";

  const experience = [
    {
      company: "San Francisco State University",
      role: "Graduate Research Assistant",
      location: "California, USA",
      dates: "Jan. 2026 – Present",
      highlights: [
        "Engineered a timing optimization framework to reduce IR-drop and coupling-noise impact on critical paths, automating HSPICE characterization in Python across voltage, load, resistance, and PVT corners while maintaining <1% delay impact.",
        "Integrated the framework into PrimeTime ECO to automate timing closure through critical-path victim identification, aggressor ranking, and ECO generation, reducing manual optimization cycles and improving closure efficiency.",
        "Collaborated with research stakeholders to build an ML-assisted aggressor classification pipeline using SVM and Random Forest, achieving 95%+ classification accuracy across 1%-5% delay cutoff ranges through feature engineering, correlation analysis, and statistical preprocessing."
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Associate Software Engineer",
      location: "Bengaluru, India",
      dates: "Feb. 2021 – Jul. 2023",
      highlights: [
        "Automated large-scale data validation workflows using Python and SQL, building end-to-end pipeline checks that eliminated repetitive manual review, improved data reliability, and strengthened production support across enterprise services.",
        "Partnered with cross-functional engineering and support teams to build Python-based monitoring, log analysis, and RCA tools that parsed JMX and application performance metrics, generated dashboards, and surfaced anomaly patterns, accelerating issue diagnosis and improving team response efficiency."
      ]
    }
  ];

  const projects = [
    {
      title: "Implementation of J-Bus Interface (JBI) Block",
      subtitle: "14nm | Synopsys DC, ICC2, PrimeTime",
      category: "ASIC Physical Design",
      introduction: "Implemented timing-driven logical and physical synthesis for a 14nm JBI block with 86 macros and 38K+ standard cells, targeting 1 GHz operation using Synopsys Design Compiler and ICC2.",
      problem: "High-performance interface blocks require careful timing optimization across multiple macros and standard cells while meeting aggressive frequency targets in advanced process nodes.",
      objective: "Achieve timing closure for a complex JBI block with 86 macros and 38K+ standard cells at 1 GHz operation in 14nm technology.",
      methodology: [
        "Performed timing-driven logical and physical synthesis using Synopsys Design Compiler.",
        "Implemented physical design using ICC2 with focus on timing optimization.",
        "Executed slack-aware Clock Tree Synthesis (CTS) for balanced clock distribution.",
        "Conducted MCMM STA across 6-8 corners and operating modes in PrimeTime.",
        "Developed and validated SDC constraints for clocks, generated clocks, false paths, and path exceptions."
      ],
      results: [
        "Successfully implemented 14nm JBI block with 86 macros and 38K+ standard cells.",
        "Achieved target 1 GHz operation frequency.",
        "Improved setup margin through optimized constraint development.",
        "Accelerated timing convergence through comprehensive corner analysis."
      ],
      conclusion: "Demonstrated expertise in complex ASIC implementation, achieving timing closure for a high-performance interface block through systematic physical design and STA methodologies."
    },
    {
      title: "ASIC Implementation of AI Accelerator (NVDLA)",
      subtitle: "7nm FinFET Process | RISC-V SoC Integration",
      category: "AI Hardware Design",
      introduction: "Launched a 7nm NVDLA-based AI accelerator integrated into a RISC-V SoC, achieving 1.2 GHz operation at under 350 milliwatts through clock gating and threshold-voltage optimization for PPA improvement.",
      problem: "AI accelerators require aggressive power-performance-area optimization while maintaining high throughput for deep learning workloads, especially when integrated into larger SoC designs.",
      objective: "Implement a power-efficient AI accelerator in 7nm FinFET achieving 1.2 GHz operation under 350mW while validating YOLOv3 inference capabilities.",
      methodology: [
        "Executed backend implementation across synthesis, physical design, timing closure, and verification.",
        "Implemented clock gating strategies for dynamic power reduction.",
        "Applied threshold-voltage optimization for leakage power management.",
        "Integrated NVDLA accelerator into RISC-V SoC architecture.",
        "Validated YOLOv3 inference performance against FPGA baseline."
      ],
      results: [
        "Achieved 1.2 GHz operation at under 350 milliwatts power consumption.",
        "Improved throughput and energy efficiency versus FPGA-based deployment.",
        "Successfully validated YOLOv3 inference on the implemented accelerator.",
        "Demonstrated effective PPA optimization through advanced low-power techniques."
      ],
      conclusion: "Successfully delivered a production-quality AI accelerator demonstrating expertise in advanced-node implementation, low-power optimization, and DL workload validation."
    },
    {
      title: "Full-Chip Physical Design: Out-of-Order RISC-V Processor",
      subtitle: "14nm | Synopsys DC/ICC2/PrimeTime",
      category: "Processor Physical Design",
      introduction: "Implemented physical design for a 14nm out-of-order RISC-V processor core using Synopsys DC, ICC2, and PrimeTime, driving design planning, CTS, placement and routing, and MCMM timing closure across ROB, Issue Queue, LSQ, ALUs, branch predictor, and memory subsystems.",
      problem: "Out-of-order processors present complex physical design challenges due to multiple interacting subsystems, aggressive timing requirements, and power constraints in advanced process nodes.",
      objective: "Achieve timing closure and power optimization for a complex out-of-order RISC-V processor while maintaining performance targets across all subsystems.",
      methodology: [
        "Drove design planning and floorplanning for optimal area utilization.",
        "Implemented Clock Tree Synthesis with power-aware optimization.",
        "Executed placement and routing with timing-driven optimization.",
        "Performed MCMM timing closure across multiple process corners and modes.",
        "Applied clock gating and Multi-Bit Flip-Flop (MBFF) techniques for power reduction.",
        "Refined design through extraction-driven ECOs."
      ],
      results: [
        "Reduced clock-network power by approximately 15% through optimization techniques.",
        "Achieved multi-mode, multi-corner timing closure on the 14nm design.",
        "Successfully implemented all processor subsystems including ROB, Issue Queue, LSQ, ALUs.",
        "Demonstrated effective power-performance trade-off optimization."
      ],
      conclusion: "Showcased comprehensive physical design expertise for complex processor architectures, delivering significant power savings while achieving full timing closure."
    },
    {
      title: "ASIC RTL-to-GDSII: FFT Processor Implementation",
      subtitle: "14nm | Design Compiler, Innovus, PrimeTime, Voltus",
      category: "Signal Processing ASIC",
      introduction: "Designed a parameterized radix-2 DIF FFT architecture in Verilog with butterfly units and twiddle-factor ROM to support low-latency radar and communication workloads.",
      problem: "FFT processors for radar and communication applications require low-latency operation, efficient power delivery, and robust timing closure in physical implementation.",
      objective: "Achieve full RTL-to-GDSII implementation of a radix-2 DIF FFT processor with optimized power delivery and automated analysis workflows.",
      methodology: [
        "Designed parameterized radix-2 DIF FFT architecture in Verilog.",
        "Implemented butterfly units and twiddle-factor ROM for efficient computation.",
        "Achieved full RTL-to-GDSII implementation using Design Compiler, Innovus, PrimeTime, and Voltus.",
        "Mitigated IR-drop through power-grid reinforcement and route widening.",
        "Automated timing analysis, regression runs, and dashboard generation with Python/TCL."
      ],
      results: [
        "Completed full RTL-to-GDSII implementation on 14nm process.",
        "Achieved MCMM timing closure with IR-drop mitigation.",
        "Enabled low-latency operation for radar and communication workloads.",
        "Established automated analysis workflows improving productivity."
      ],
      conclusion: "Demonstrated end-to-end ASIC implementation capabilities for signal processing applications, combining architectural design with advanced physical design techniques."
    },
    {
      title: "ASIC Implementation of Motion Estimator",
      subtitle: "14nm CMOS | Verilog | Synopsys ICC2",
      category: "Video Processing ASIC",
      introduction: "Delivered 260 MHz operation, 15 FPS throughput, 3.14 nanoseconds of setup slack, and 70.82% utilization for a 14nm Motion Estimator ASIC featuring a 16×16 reference block, 31×31 search window, and 16 parallel processing elements.",
      problem: "Motion estimation for video processing requires high throughput, efficient parallel processing, and optimal area utilization while meeting aggressive timing constraints.",
      objective: "Implement a high-performance Motion Estimator ASIC achieving 260 MHz operation with efficient resource utilization and timing closure.",
      methodology: [
        "Designed architecture with 16 parallel processing elements for throughput.",
        "Implemented 16×16 reference block and 31×31 search window support.",
        "Completed full RTL-to-GDSII implementation using Synopsys Design Compiler, ICC2, and PrimeTime.",
        "Optimized across area, power, and performance dimensions.",
        "Achieved final timing closure through systematic refinement."
      ],
      results: [
        "Achieved 260 MHz operation frequency.",
        "Delivered 15 FPS throughput for video processing.",
        "Achieved 3.14 nanoseconds of setup slack margin.",
        "Reached 70.82% area utilization efficiency.",
        "Successfully implemented 16 parallel processing elements."
      ],
      conclusion: "Successfully delivered a high-performance video processing ASIC demonstrating expertise in parallel architecture implementation and aggressive timing closure."
    }
  ];

  const skillCategories = [
    {
      icon: Cpu,
      title: 'Physical Design & STA',
      skills: ['RTL-to-GDSII', 'Floorplanning', 'Design Planning', 'CTS', 'Placement & Routing', 'STA', 'MCMM Timing Closure', 'ECO', 'RC Extraction', 'DRC/LVS', 'PPA Optimization']
    },
    {
      icon: Zap,
      title: 'Low Power / Signoff',
      skills: ['Clock Gating', 'Power Gating', 'Multi-Vt Optimization', 'MBFF', 'IR-Drop Mitigation', 'Decap Insertion', 'IR/EM Analysis', 'PVT Analysis']
    },
    {
      icon: Target,
      title: 'EDA Tools',
      skills: ['Synopsys DC', 'ICC2', 'PrimeTime', 'VCS', 'Cadence Innovus', 'Voltus', 'HSPICE', 'Vivado', 'LTspice']
    },
    {
      icon: Code,
      title: 'Programming & ML',
      skills: ['Verilog', 'SystemVerilog', 'Python', 'TCL', 'Shell', 'C/C++', 'SVM', 'Random Forest', 'Statistical Analysis', 'Feature Engineering', 'Streamlit']
    }
  ];

  const education = [
    {
      school: "San Francisco State University",
      degree: "M.S. in Electrical & Computer Engineering",
      location: "California, USA",
      dates: "Aug. 2023 – Dec. 2025",
      details: "Focus on VLSI design, physical design, and ASIC implementation. Research in ML-based timing optimization and silicon characterization."
    },
    {
      school: "Adichunchanagiri Institute of Technology",
      degree: "B.E. in Electronics & Communication Engineering",
      location: "India",
      dates: "Aug. 2016 – Aug. 2020",
      details: "Foundation in digital design, signal processing, and semiconductor devices."
    }
  ];

  const papers: any[] = [
    // Add your published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications: any[] = [
    // Add certifications here
    // { title: "Certification Name", platform: "Platform", description: "Description", link: "https://..." }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              SAHANA VIJAYAKUMAR
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificates' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificates' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Sahana Vijayakumar"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              SAHANA VIJAYAKUMAR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Physical Design & STA Engineer | ASIC Implementation | RTL-to-GDSII
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              SAN FRANCISCO, CA, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'ML CLASSIFICATION ACCURACY', value: '95%+', detail: 'Aggressor Classification Pipeline' },
              { label: 'CLOCK POWER REDUCTION', value: '15%', detail: 'RISC-V Processor Optimization' },
              { label: 'DELAY IMPACT MAINTAINED', value: '<1%', detail: 'IR-Drop Optimization Framework' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Physical Design & STA Engineer specializing in RTL-to-GDSII implementation, timing closure, and power optimization for AI/ML and processor designs. Combining deep EDA tool expertise with ML-based optimization techniques.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Cpu,
                title: 'Physical Design',
                detail: 'Expertise in complete RTL-to-GDSII flow including floorplanning, CTS, placement & routing, and MCMM timing closure. Successfully implemented designs from AI accelerators to complex RISC-V processors in 7nm and 14nm nodes.'
              },
              {
                icon: Zap,
                title: 'Timing & Power',
                detail: 'Specialized in STA, MCMM timing closure, and low-power optimization techniques. Achieved 15% clock power reduction and <1% delay impact through IR-drop mitigation, clock gating, and multi-Vt optimization.'
              },
              {
                icon: Lightbulb,
                title: 'ML & Automation',
                detail: 'Built ML-assisted classification pipelines achieving 95%+ accuracy for aggressor classification. Automated HSPICE characterization and timing analysis workflows using Python, improving productivity and closure efficiency.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Research and industry experience in physical design, timing optimization, and automation across academic and enterprise environments.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              ASIC implementation projects spanning AI accelerators, processors, and signal processing designs in advanced process nodes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed implementation details or methodology?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project documentation.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Physical design, timing analysis, EDA tools, and automation expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research publications in VLSI design, physical design automation, and ML for EDA.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                  View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss physical design, STA, ASIC implementation, or timing closure opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+14159098970"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (415) 909-8970
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/sahana-vijayakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:sahanavkumar256@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                sahanavkumar256@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Sahana Vijayakumar · Physical Design & STA Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;