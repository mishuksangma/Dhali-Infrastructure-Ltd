import { Home, Info, Building2, Briefcase, Image as ImageIcon, Phone, Mail, MapPin, CheckCircle2, Trophy, Star, Users } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: Info },
  { name: 'Projects', path: '/projects', icon: Building2 },
  { name: 'Services', path: '/services', icon: Briefcase },
  { name: 'Gallery', path: '/gallery', icon: ImageIcon },
  { name: 'Contact', path: '/contact', icon: Phone },
];

export const CORE_VALUES = [
  {
    title: 'Quality',
    description: 'We never compromise on the standards of our construction and materials.',
    icon: Star,
  },
  {
    title: 'Safety',
    description: 'Ensuring the safety of our workforce and future residents is our top priority.',
    icon: CheckCircle2,
  },
  {
    title: 'Innovation',
    description: 'Adopting modern technologies and sustainable practices in every project.',
    icon: Trophy,
  },
  {
    title: 'Reliability',
    description: 'Building trust through transparency and timely project delivery.',
    icon: Users,
  },
];

export const PROJECTS = [
  {
    id: 1,
    category: 'Residential',
    name: 'Azure Heights',
    location: 'Gulshan, Dhaka',
    description: 'Ultra-luxury residential complex with 360-degree city views.',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Commercial',
    name: 'Dhali Corporate Plaza',
    location: 'Banani, Dhaka',
    description: 'Modern office spaces equipped with world-class facilities.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Industrial',
    name: 'Eco-Fab Logistics Hub',
    location: 'Gazipur',
    description: 'Sustainable warehousing and logistics solutions.',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Residential',
    name: 'Golden Meadows',
    location: 'Purbachal',
    description: 'Premium gated community with lush greenery and modern amenities.',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
  },
];

export const SERVICES = [
  {
    title: 'Real Estate Development',
    description: 'End-to-end development of premium residential, commercial, and industrial properties.',
    icon: Building2,
  },
  {
    title: 'Construction Management',
    description: 'Overseeing projects with precision, ensuring quality, safety, and efficiency.',
    icon: Briefcase,
  },
  {
    title: 'Property Sales',
    description: 'Transparent and hassle-free property acquisition and sales processes.',
    icon: Users,
  },
  {
    title: 'Design & Planning',
    description: 'Innovative architectural design and master planning for sustainable living.',
    icon: ImageIcon,
  },
];

export const CONTACT_INFO = {
  address: 'Level 12, Crystal Tower, Gulshan-2, Dhaka 1212',
  phone: '+880 1234-567890',
  email: 'info@dhaliinfra.com',
  social: [
    { name: 'Facebook', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Instagram', url: '#' },
  ]
};
