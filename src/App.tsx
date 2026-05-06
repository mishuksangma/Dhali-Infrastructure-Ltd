import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar, Footer } from './components/Navigation';
import { ProjectCard, ServiceCard } from './components/Cards';
import { PROJECTS, SERVICES, CORE_VALUES, CONTACT_INFO } from './constants';
import { ArrowRight, ChevronRight, Phone, Mail, MapPin, Building2, Quote, Globe, Target, Eye, ShieldCheck, Headphones } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

const HomePage = () => (
  <main>
    {/* Hero Section */}
    <section className="relative h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-[55%] bg-primary p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 -mr-32 -mt-32 rounded-full"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-8 block">
            Premium Real Estate
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-white leading-[1.1] mb-8">
            Building Trust,<br/>
            <span className="italic text-accent">Creating Future</span><br/>
            Living Spaces
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-md">
            Redefining architectural excellence through sustainable innovation and unwavering quality standards across Bangladesh.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="btn-premium">
              View Projects
            </button>
            <button className="px-8 py-4 border border-slate-700 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-colors">
              Our Legacy
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-[45%] bg-slate-200 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-primary opacity-20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop" 
          alt="Luxury Architecture"
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md p-8 border-l-4 border-accent max-w-xs z-20 hidden lg:block">
          <p className="text-white font-display italic text-lg leading-relaxed mb-2">
            "Modernity meets timeless craftsmanship in every square foot."
          </p>
          <p className="text-accent text-[10px] uppercase font-bold tracking-[0.2em]">Architectural Vision 2026</p>
        </div>
      </div>
    </section>

    {/* Featured Projects Grid */}
    <section className="section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
        <div>
          <span className="text-accent-dark font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Selection</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary">Signature Landmarks</h2>
        </div>
        <button className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-accent py-1 mt-6 md:mt-0 hover:text-accent transition-colors">
          View All Projects
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.slice(0, 3).map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>

    {/* Professional Highlight Row */}
    <section className="h-[250px] bg-white border-y border-slate-200 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 mb-24">
      <div className="p-10 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-accent-dark font-bold text-[10px] uppercase tracking-widest">Residential</span>
          <h3 className="text-xl font-bold font-display text-primary">Emerald Heights</h3>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide italic">Banani, Dhaka</p>
        </div>
        <span className="text-[10px] font-bold uppercase text-accent tracking-[0.2em] border-b border-accent w-fit cursor-pointer">Ongoing</span>
      </div>
      <div className="p-10 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-accent-dark font-bold text-[10px] uppercase tracking-widest">Commercial</span>
          <h3 className="text-xl font-bold font-display text-primary">Skyline Hub</h3>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide italic">Gulshan, Dhaka</p>
        </div>
        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em]">Upcoming</span>
      </div>
      <div className="p-10 flex flex-col justify-between bg-slate-50">
        <div className="space-y-2">
          <span className="text-accent-dark font-bold text-[10px] uppercase tracking-widest">Corporate</span>
          <h3 className="text-xl font-bold font-display text-primary">Quality Assets</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">End-to-end management and construction consultancy.</p>
        </div>
        <a href="#" className="text-[10px] font-bold underline text-primary tracking-widest uppercase">Explore Service</a>
      </div>
      <div className="p-10 flex flex-col justify-center bg-primary text-white">
        <div className="text-center">
          <div className="text-4xl font-display text-accent mb-1 italic font-bold">25+</div>
          <div className="text-[9px] uppercase font-bold tracking-[0.3em] text-slate-400">Years of Growth</div>
          <div className="h-[1px] w-12 bg-slate-700 mx-auto my-4"></div>
          <div className="text-4xl font-display text-accent mb-1 italic font-bold">150+</div>
          <div className="text-[9px] uppercase font-bold tracking-[0.3em] text-slate-400">Projects Done</div>
        </div>
      </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="pt-24">
    <section className="bg-slate-100 py-20">
      <div className="section-padding">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-8">Legacy of Innovation</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Dhali Infrastructure Ltd was established with a singular vision: to create landmarks that withstand the test of time while elevating the lifestyle of our community.
          </p>
        </div>
      </div>
    </section>

    <div className="section-padding">
      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
            <Target className="w-20 h-20 text-slate-50 opacity-10 group-hover:scale-110 transition-transform" />
          </div>
          <h2 className="font-display text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent inline-block" /> Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            To deliver world-class infrastructure and housing solutions by integrating advanced technology, sustainable practices, and creative architectural thinking.
          </p>
        </div>
        <div className="bg-primary p-12 rounded-[2rem] shadow-xl text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
            <Eye className="w-20 h-20 text-white/5 opacity-10 group-hover:scale-110 transition-transform" />
          </div>
          <h2 className="font-display text-3xl font-bold text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent inline-block" /> Our Vision
          </h2>
          <p className="text-white/80 leading-relaxed text-lg">
            To be the leader in the real estate industry, known for our integrity, innovation, and for creating vibrant spaces that inspire people.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {CORE_VALUES.map((value, idx) => (
            <ServiceCard key={value.title} service={value} index={idx} />
          ))}
        </div>
      </div>
    </div>
  </main>
);

const ProjectsPage = () => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <main className="pt-32 pb-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Our Legacy Projects</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Explore our diverse portfolio of residential, commercial, and industrial landmarks across the nation.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                filter === cat ? 'bg-accent text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </main>
  );
};

const ContactPage = () => (
  <main className="pt-32 pb-24 bg-slate-50">
    <div className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">Let's Build <br /> Something Together</h1>
          <p className="text-slate-600 mb-12 text-lg">Have a project in mind or want to know more about our current developments? Our team is ready to assist you.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Corporate Office</h3>
                <p className="text-slate-500 text-sm">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Call Us</h3>
                <p className="text-slate-500 text-sm">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Email Us</h3>
                <p className="text-slate-500 text-sm">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-accent transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-accent transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Phone Number</label>
              <input type="tel" placeholder="+880 123456789" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-accent transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Your Message</label>
              <textarea placeholder="Tell us about your requirements..." rows={5} className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-accent transition-all resize-none" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-lg ring-offset-2 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Send Message <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  </main>
);

const ServicesPage = () => (
  <main className="pt-32 pb-24">
    <div className="section-padding">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
        <p className="text-slate-500">Comprehensive real estate solutions designed for modern living and institutional growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SERVICES.map((service, idx) => (
          <div key={service.title} className="flex gap-8 group p-8 rounded-3xl hover:bg-slate-50 transition-colors">
            <div className="shrink-0 w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <service.icon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <button className="text-sm font-bold text-accent flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

const GalleryPage = () => {
  const images = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="section-padding">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Visual Gallery</h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img src={img} alt="Project" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border border-white/40 px-6 py-2 rounded-full backdrop-blur-sm">Enlarge View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50">
        <ProgressBar />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
