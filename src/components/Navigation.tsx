import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav h-20 shadow-sm' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-12 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <span className="text-accent font-display text-2xl font-bold">D</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-xl font-extrabold tracking-tighter transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>DHALI</span>
            <span className="text-[10px] tracking-[0.3em] text-accent-dark font-bold">INFRASTRUCTURE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-accent border-b-2 border-accent'
                    : scrolled ? 'text-primary' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] transition-all ${
              scrolled ? 'bg-primary text-accent hover:bg-slate-800' : 'bg-accent text-primary hover:bg-accent-dark'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs font-bold uppercase tracking-widest flex items-center gap-4 transition-all ${
                      isActive ? 'text-accent' : 'text-slate-500'
                    }`
                  }
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16 pb-16 border-b border-slate-800">
        <div className="col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm">
              <span className="text-accent font-display text-2xl font-bold">D</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tighter text-white">DHALI</span>
              <span className="text-[10px] tracking-[0.3em] text-accent font-bold">INFRASTRUCTURE</span>
            </div>
          </Link>
          <p className="text-slate-400 text-xs leading-relaxed uppercase tracking-wide italic font-medium">
            Building trust and creating premium living spaces since 1998.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-accent">Quick Links</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-accent transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-accent">Services</h4>
          <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Industrial</li>
            <li>Consultancy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-accent">Newsletter</h4>
          <p className="text-slate-400 text-xs mb-6 font-medium">Subscribe for exclusive project updates.</p>
          <div className="flex bg-white/5 border border-slate-800 rounded-sm">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent px-4 py-3 text-[10px] focus:outline-none w-full uppercase tracking-widest font-bold"
            />
            <button className="bg-accent text-primary px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-slate-500 font-bold tracking-[0.1em] uppercase italic">© 2026 Dhali Infrastructure Ltd. All Rights Reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] hover:text-accent">Privacy</a>
          <a href="#" className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] hover:text-accent">Terms</a>
          <a href="#" className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] hover:text-accent">Careers</a>
        </div>
      </div>
    </footer>
  );
}
