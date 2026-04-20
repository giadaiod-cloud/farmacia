/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  Download, 
  LayoutDashboard, 
  Microscope, 
  BrainCircuit, 
  Globe, 
  ArrowRight,
  User,
  Menu,
  X,
  MessageSquare,
  Play,
  FileText,
  AlertCircle,
  Star,
  TrendingUp,
  Activity,
  Smartphone,
  DoorOpen,
  CircleDot
} from 'lucide-react';

// --- Shared Components ---

const Navbar = ({ activeScreen, setActiveScreen }: { activeScreen: string, setActiveScreen: (s: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Research' },
    { id: 'sentiment', label: 'Sentiment' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'archive', label: 'Archive' },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-16 z-50 transition-all duration-500 rounded-full flex items-center justify-between px-8 ${
      scrolled ? 'bg-white/70 backdrop-blur-xl shadow-2xl shadow-slate-200/50' : 'bg-slate-100/30 backdrop-blur-sm'
    }`}>
      <div 
        className="font-display text-[18px] font-black tracking-tighter text-slate-900 cursor-pointer"
        onClick={() => setActiveScreen('home')}
      >
        PharmaVision Hub
      </div>
      
      <div className="hidden md:flex gap-8 items-center h-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id)}
            className={`font-display tracking-tight text-sm font-semibold uppercase relative transition-all duration-300 h-full flex items-center ${
              activeScreen === item.id ? 'text-primary' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {item.label}
            {activeScreen === item.id && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" 
              />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors">
          <Search size={18} />
        </button>
        <button className="bg-primary text-white px-6 py-2 rounded-full font-display text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
          Connect
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer">
          <img 
            alt="User avatar"
            src="https://picsum.photos/seed/user123/100/100" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="w-full bg-white border-t border-slate-100 py-12 px-8 mt-24">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-display font-semibold text-slate-600">
        PharmaVision Hub
      </div>
      <div className="text-slate-400 text-xs font-sans tracking-wide">
        © 2024 Digital Atelier Pharmacy Innovation. All rights reserved.
      </div>
      <div className="flex gap-8 text-xs font-sans text-slate-500">
        <a href="#" className="hover:text-primary transition-colors">Privacy Protocol</a>
        <a href="#" className="hover:text-primary transition-colors">Compliance</a>
        <a href="#" className="hover:text-primary transition-colors">Service Terms</a>
        <a href="#" className="hover:text-primary transition-colors">Contact Hub</a>
      </div>
    </div>
  </footer>
);

// --- Page Views ---

const HomeView = ({ setActiveScreen }: { setActiveScreen: (s: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.98 }}
    className="min-h-screen pt-32"
  >
    {/* Hero Section */}
    <section className="relative h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-on-surface leading-[1.05] mb-8">
          The Future of Care.<br/>
          <span className="text-primary">Engineered Today.</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant font-sans font-light max-w-2xl mx-auto mb-12">
          A digital atelier where scientific precision meets human-centric design. Experience the next generation of pharmaceutical environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => setActiveScreen('innovation')}
            className="bg-primary text-white px-10 py-5 rounded-full font-display font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Explore the Research
          </button>
          <button 
            onClick={() => setActiveScreen('sentiment')}
            className="bg-surface-container-low text-on-surface px-10 py-5 rounded-full font-display font-bold hover:bg-surface-container-high transition-all"
          >
            View Sentiment Data
          </button>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute inset-0 z-0 opacity-10 blur-3xl pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full" />
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="w-full lg:w-1/2 relative group">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              referrerPolicy="no-referrer"
              src="https://picsum.photos/seed/lab/800/1000" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Lab environment"
            />
          </div>
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-1000" />
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-6 block">Our Mission</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-8 leading-tight">
            Redefining the<br/>clinical experience.
          </h2>
          <p className="text-lg text-on-surface-variant font-sans leading-relaxed mb-10 font-light">
            We believe that the environment dictates the outcome. By merging rigorous scientific research with elevated architectural principles, we create spaces that foster healing, trust, and unparalleled operational efficiency.
          </p>
          <div className="border-l-4 border-primary/20 pl-8 italic text-xl text-on-surface font-display font-medium py-2">
            "Innovation isn't just about the molecule; it's about the entire ecosystem of care."
          </div>
        </div>
      </div>
    </section>

    {/* Innovation Pillars Section */}
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Innovation Pillars</h2>
          <p className="text-on-surface-variant text-lg">The foundational elements that drive our approach to pharmaceutical design.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[28rem]">
          {/* Pillar 1 */}
          <div className="md:col-span-2 rounded-[2.5rem] bg-white p-12 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img 
              referrerPolicy="no-referrer" 
              src="https://picsum.photos/seed/arch/1200/800" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              alt="Architecture"
            />
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-lg">
                <Microscope size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Architectural Precision</h3>
              <p className="text-white/80 max-w-md">Data-driven spatial planning that optimizes workflow and reduces cognitive load for clinical staff.</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-[2.5rem] bg-primary p-12 flex flex-col justify-between text-white group">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 backdrop-blur-md">
              <BrainCircuit size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">Patient Sentiment</h3>
              <p className="text-white/80">Environments engineered to lower anxiety and build trust through ambient design cues.</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-[2.5rem] bg-white p-12 flex flex-col justify-between border border-slate-200 hover:border-primary transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Activity size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Bio-Integration</h3>
              <p className="text-on-surface-variant text-sm">Seamless incorporation of diagnostic tech within the architectural fabric.</p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="md:col-span-2 rounded-[2.5rem] bg-slate-900 p-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative group">
            <div className="relative z-10 w-full md:w-1/2">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-white/60 mb-8">Utilizing AI to forecast patient flow and inventory needs before they occur.</p>
              <button className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                Learn more <ArrowRight size={18} />
              </button>
            </div>
            <div className="w-full md:w-1/2 h-full absolute right-0 top-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
               <img 
                 referrerPolicy="no-referrer" 
                 src="https://picsum.photos/seed/data/800/800" 
                 className="w-full h-full object-cover" 
                 alt="Data"
               />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section CTA */}
    <section className="py-48 px-8 text-center bg-white">
      <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">Ready to shape the future?</h2>
      <p className="text-xl text-on-surface-variant font-sans font-light mb-16">Join the vanguard of clinical design and research.</p>
      <button className="bg-primary text-white p-6 px-12 rounded-full font-display font-bold shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
        Explore the Research
      </button>
    </section>
  </motion.div>
);

const SentimentView = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-32 pb-24 px-8 bg-surface-container-low flex flex-col md:flex-row gap-12 overflow-hidden"
  >
    {/* Sidebar Navigation */}
    <aside className="hidden lg:flex flex-col w-64 gap-2 h-fit sticky top-40">
      <div className="mb-10 px-4">
        <h3 className="font-display font-bold text-slate-800">Innovation Suite</h3>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">V2.4 Active</p>
      </div>
      <button className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white text-primary shadow-sm font-bold transition-all">
         <LayoutDashboard size={20} /> Netnography
      </button>
      <button className="flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:bg-white/50 transition-all group">
         <Microscope size={20} className="group-hover:text-primary transition-colors" /> Research Data
      </button>
      <button className="flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:bg-white/50 transition-all group">
         <BrainCircuit size={20} className="group-hover:text-primary transition-colors" /> Sentiment
      </button>
      <button className="flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:bg-white/50 transition-all group">
         <Globe size={20} className="group-hover:text-primary transition-colors" /> Global Trends
      </button>

      <div className="mt-20 px-4 border-t border-slate-200 pt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200" />
          <div>
            <p className="text-sm font-bold text-slate-700">Lab Director</p>
            <p className="text-[10px] text-emerald-500 font-bold">Connected</p>
          </div>
        </div>
      </div>
    </aside>

    {/* Main Dashboard */}
    <div className="flex-1 space-y-10 max-w-6xl mx-auto w-full">
      <header className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live Analysis
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-on-surface">Consumer Signals</h2>
          <p className="text-lg text-on-surface-variant font-sans mt-2">Real-time netnography mapping patient discourse across digital ecosystems.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-white min-w-[160px] text-right">
            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Total Signals</p>
            <p className="text-3xl font-display font-bold text-primary">124.8K</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-white min-w-[160px] text-right">
            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Sentiment Shift</p>
            <p className="text-3xl font-display font-bold text-emerald-600">+4.2%</p>
          </div>
        </div>
      </header>

      {/* Grid Charts */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-fit">
        <div className="md:col-span-8 bg-white rounded-[2.5rem] p-12 shadow-sm border border-white flex flex-col justify-between min-h-[450px]">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">Global Sentiment Resonance</h3>
            <p className="text-on-surface-variant text-sm font-sans">Aggregated 30-day view from specialized forums and mass social.</p>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 mt-8">
            {[40, 60, 35, 90, 55, 75, 45, 80].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1, duration: 1 }}
                  className={`w-full rounded-2xl transition-all duration-500 ${i === 3 ? 'bg-primary' : 'bg-slate-100 group-hover:bg-slate-200'}`} 
                />
                {i === 3 && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                    Peak Volume
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-4 bg-slate-900 rounded-[2.5rem] p-12 text-white flex flex-col shadow-xl">
          <h3 className="text-xl font-display font-bold mb-10">Discourse Channels</h3>
          <div className="space-y-8 flex-1 flex flex-col justify-center">
            {[
              { label: 'Reddit / Forums', val: '45%', icon: MessageSquare },
              { label: 'TikTok / Video', val: '32%', icon: Play },
              { label: 'Blogs / Reviews', val: '23%', icon: FileText }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center justify-between font-bold text-sm">
                  <div className="flex items-center gap-3">
                    <item.icon size={16} className="text-primary-container" />
                    {item.label}
                  </div>
                  <span>{item.val}</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: item.val }}
                     className="h-full bg-primary" 
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pains and Gains */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-white">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
               <AlertCircle size={20} />
             </div>
             <h3 className="text-2xl font-display font-bold">Consumer Pains</h3>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Long Wait Times', tag: 'High Frequency', text: 'Patients consistently report frustration regarding fulfillment delays, particularly for specialty medications.' },
              { title: 'Privacy Anxiety', tag: 'Emerging', text: 'Significant discourse around data transparency and clinical-commercial boundary crossing.' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 transition-colors cursor-default">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-slate-800">{item.title}</h4>
                   <span className="text-[10px] font-bold bg-white px-2 py-1 rounded-md text-slate-400">{item.tag}</span>
                 </div>
                 <p className="text-sm text-slate-500 leading-relaxed font-sans">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-white">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
               <Star size={20} />
             </div>
             <h3 className="text-2xl font-display font-bold">Consumer Gains</h3>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Digital Integration', tag: 'Trending Up', text: 'Users highly value auto-refill ecosystems and integration with wearable health tech for reminders.' },
              { title: 'Expert Access', tag: 'Core Value', text: 'Sentiment peaks when discussing direct messaging access to clinical pharmacists for advice.' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors cursor-default">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-slate-800">{item.title}</h4>
                   <span className="text-[10px] font-bold bg-white px-2 py-1 rounded-md text-slate-400">{item.tag}</span>
                 </div>
                 <p className="text-sm text-slate-500 leading-relaxed font-sans">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const InnovationView = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-32 pb-24 px-8 bg-white"
  >
    <div className="max-w-7xl mx-auto">
      {/* Editorial Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
        <div className="lg:col-span-5 relative z-10">
          <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-6 block">Innovation Spotlight</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-on-surface mb-8 tracking-tighter leading-[1.1]">
            The Phygital<br/>Concierge.
          </h1>
          <p className="text-xl text-on-surface-variant font-sans font-light leading-relaxed mb-12 max-w-md">
            Bridging the gap between digital convenience and human empathy. A seamless integration of our mobile app ecosystem with in-person health advisory spaces.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-white p-6 px-10 rounded-full font-display font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">Explore Blueprint</button>
            <button className="bg-slate-100 text-on-surface p-6 px-10 rounded-full font-display font-bold hover:bg-slate-200 transition-all">View Data</button>
          </div>
        </div>
        <div className="lg:col-span-7 relative">
          <div className="aspect-[16/10] bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl relative">
             <img 
               referrerPolicy="no-referrer" 
               src="https://picsum.photos/seed/pharmacy/1200/800" 
               className="w-full h-full object-cover" 
               alt="Modern pharmacy"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
          </div>
          
          {/* Floating Metric */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-12 bottom-12 bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/50 z-20 max-w-xs"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-display font-bold text-slate-800">Trust Index</h4>
            </div>
            <p className="text-slate-500 text-sm font-sans mb-2">Consumer confidence in "phygital" retail touchpoints is surge-trending.</p>
            <div className="text-3xl font-display font-black text-primary">+42% <span className="text-xs text-slate-400 font-bold uppercase tracking-widest pl-2">Q3 Surge</span></div>
          </motion.div>
        </div>
      </section>

      {/* Grid of details */}
      <section className="mb-40">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">A Unified Ecosystem</h2>
          <p className="text-on-surface-variant text-lg font-sans max-w-2xl mx-auto">The architecture of care reimagined. Where pixels meet physical space to deliver unparalleled patient support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-between min-h-[350px] group cursor-default">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-10 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Companion App</h3>
              <p className="text-slate-500 font-sans leading-relaxed">Direct messaging, health tracking, and predictive refills in a fluid interface.</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-between min-h-[350px] group cursor-default">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-10 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <DoorOpen size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Private Suites</h3>
              <p className="text-slate-500 font-sans leading-relaxed">Acoustically treated spaces designed for discreet, expert health reviews.</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-between min-h-[350px] group cursor-default">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-10 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <CircleDot size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Biometric Kiosks</h3>
              <p className="text-slate-500 font-sans leading-relaxed">Seamless self-service stations that sync vitals directly to clinical profiles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-surface-container-low rounded-[4rem] p-16 md:p-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">The Concierge Profile</h2>
          <p className="text-xl text-on-surface-variant font-sans font-light leading-relaxed mb-12">
            Our pharmacists transition from transactional dispensers to longitudinal care partners, equipped with comprehensive patient dashboards.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Holistic View', 'AI Insights', 'Direct Comms'].map((tag, i) => (
              <span key={i} className="px-6 py-2 bg-white rounded-full text-sm font-bold text-slate-500 shadow-sm">{tag}</span>
            ))}
          </div>
        </div>
        <div className="w-64 h-64 md:w-96 md:h-96 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
             <img 
               referrerPolicy="no-referrer" 
               src="https://picsum.photos/seed/doc/600/600" 
               className="w-full h-full object-cover" 
               alt="Pharmacist"
             />
          </div>
        </div>
      </section>
    </div>
  </motion.div>
);

const ArchiveView = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-32 pb-24 px-8 bg-white"
  >
    <div className="max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 pb-12 border-b border-slate-100">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6">Research &<br/>Archive</h1>
          <p className="text-xl text-on-surface-variant font-sans font-light leading-relaxed">
            A curated repository of foundational studies, observational data, and strategic insights driving our pharmacy innovation initiatives.
          </p>
        </div>
        <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
          <button className="px-6 py-3 bg-white rounded-xl shadow-sm font-bold text-slate-800 text-sm">All Archives</button>
          <button className="px-6 py-3 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-400 text-sm">Recent</button>
          <button className="px-6 py-3 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-400 text-sm">Saved</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { title: 'Global Trends Analysis', tag: 'Macro Study', date: 'Q3 2023', desc: 'Comprehensive analysis of shifting consumer expectations in retail pharmacy environments across North America and Europe.' },
          { title: 'In-Pharmacy Observations', tag: 'Field Research', date: 'Nov 2023', desc: 'Ethnographic studies conducted across 15 high-volume urban pharmacies. Details foot traffic patterns and wait-time friction.' },
          { title: 'Customer Interviews', tag: 'Qualitative', date: 'Jan 2024', desc: 'Thematic synthesis of 50+ in-depth interviews with chronic medication users regarding trust and adherence challenges.' },
          { title: 'Pharmacist Insights', tag: 'Expert Panel', date: 'Mar 2024', desc: 'Key takeaways from roundtable discussions with lead pharmacists focusing on workflow inefficiencies and software pain points.' }
        ].map((item, i) => (
          <div key={i} className="group bg-slate-50 rounded-[2.5rem] p-12 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 border border-transparent hover:border-slate-100 flex flex-col justify-between h-[450px]">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-primary/10">{item.tag}</span>
                <span className="text-xs font-bold text-slate-400 tracking-wider font-display uppercase">{item.date}</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-slate-500 font-sans leading-relaxed text-lg line-clamp-3">{item.desc}</p>
            </div>
            
            <div className="pt-8 border-t border-slate-200/50 flex items-center justify-between">
              <div className="flex -space-x-3">
                 {[1, 2, 3].map(j => (
                   <div key={j} className="w-10 h-10 rounded-full bg-slate-200 border-4 border-slate-50 group-hover:border-white transition-all overflow-hidden">
                      <img referrerPolicy="no-referrer" src={`https://picsum.photos/seed/user${i}${j}/100/100`} />
                   </div>
                 ))}
              </div>
              <button className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-sm">
                Download Report <Download size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// --- Root Component ---

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  // Handle scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeScreen]);

  return (
    <div className="font-sans antialiased bg-surface selection:bg-primary-container selection:text-white">
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      
      <main className="relative min-h-screen">
        <AnimatePresence mode="wait">
          {activeScreen === 'home' && (
            <motion.div key="home">
              <HomeView setActiveScreen={setActiveScreen} />
            </motion.div>
          )}
          {activeScreen === 'sentiment' && (
            <motion.div key="sentiment">
              <SentimentView />
            </motion.div>
          )}
          {activeScreen === 'innovation' && (
            <motion.div key="innovation">
              <InnovationView />
            </motion.div>
          )}
          {activeScreen === 'archive' && (
            <motion.div key="archive">
              <ArchiveView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
