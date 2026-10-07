const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.join(__dirname, '../.env') });

const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');
const Inquiry = require('../models/Inquiry');
const Application = require('../models/Application');
const Quotation = require('../models/Quotation');

// Read extracted projects
const extractedPath = path.join(__dirname, '../../extracted_projects.json');
let rawProjects = [];
if (fs.existsSync(extractedPath)) {
  rawProjects = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));
}

const seedProjects = rawProjects.map((p, idx) => {
  const parts = p.title.split('|');
  const title = parts[0] ? parts[0].trim() : p.title;
  const location = parts[1] ? parts[1].trim() : 'International';

  return {
    title: title,
    location: location,
    category: p.category,
    image: '/' + p.image, // e.g. /images/1.jpg
    description: `High-precision architectural and interior design project delivered by Inches & Feet in ${location}. Features sustainable materials, BIM structural coordination, and bespoke spatial ergonomics.`,
    year: '2023-2024',
    area: `${1800 + (idx * 150 % 8000)} sq.ft`,
    featured: idx < 8,
  };
});

const initialTestimonials = [
  {
    author: 'Rajesh & Shweta Nair',
    role: 'Villa Owners',
    location: 'Bangalore, India',
    rating: 5,
    content: 'Inches & Feet completely transformed our 4,200 sq.ft villa in Airport City. Their 3D visualization and BIM modeling made construction seamless with zero rework. Exceptional design sensitivity!',
    projectType: 'Luxury Residential Villa',
    avatar: '/images/Men.png',
  },
  {
    author: 'David & Catherine Miller',
    role: 'Real Estate Developer',
    location: 'North Carolina, USA',
    rating: 5,
    content: 'We partnered with Inchesnfeet for our multi-family townhomes in Charlotte. Their Revit drafting and LGSF steel framing coordination saved us 35% in construction turnaround time. Outstanding remote architecture team.',
    projectType: 'Townhomes & Commercial',
    avatar: '/images/Men.png',
  },
  {
    author: 'Ananya Deshmukh',
    role: 'Hospitality Entrepreneur',
    location: 'Bangalore, India',
    rating: 5,
    content: 'Creating a high-footfall artisan cafe requires both aesthetic panache and tight workflow ergonomics. The Inches & Feet team balanced ambient lighting, acoustic textures, and seating flow brilliantly.',
    projectType: 'Artisan Cafe & Bistro',
    avatar: '/images/Women.png',
  },
  {
    author: 'Marcus Vance',
    role: 'Resort Director',
    location: 'Exuma, The Bahamas',
    rating: 5,
    content: 'The tropical luxury and climate-resilient architecture created for our beachfront boutique condos in Exuma exceeded all investor benchmarks. True world-class craftsmanship.',
    projectType: 'Boutique Beachfront Condos',
    avatar: '/images/Men.png',
  },
];

const sampleInquiries = [
  {
    name: 'Siddharth Roy',
    email: 'siddharth.roy@example.com',
    phone: '+91 98450 12345',
    service: 'Luxury House Plans',
    projectLocation: 'Sarjapur Road, Bengaluru',
    budget: '₹40 - 60 Lakhs',
    message: 'Looking for turnkey interior architecture and elevation design for our new 3,800 sq.ft duplex villa.',
    status: 'In Review',
  },
  {
    name: 'Emily Watson',
    email: 'emily.w@archventures.us',
    phone: '+1 704 555 0192',
    service: 'Building Information Modeling (BIM)',
    projectLocation: 'Raleigh, North Carolina, USA',
    budget: '$25,000 - $50,000',
    message: 'Seeking remote Revit drafting and MEP BIM coordination for a 24-unit residential townhome project.',
    status: 'Scheduled',
  },
];

const sampleApplications = [
  {
    fullName: 'Kavya Sundaram',
    email: 'kavya.arch@example.com',
    phone: '+91 99160 88231',
    position: 'BIM Specialist / Revit Modeler',
    experienceYears: '3-5 years',
    portfolioUrl: 'https://behance.net/kavyadesign',
    resumeLink: 'https://linkedin.com/in/kavyasundaram',
    coverNote: 'Experienced in Autodesk Revit, Navisworks clash detection, and LGSF light steel framing detailing for US and Middle East projects.',
    status: 'Shortlisted',
  },
];

const sampleQuotations = [
  {
    clientName: 'Vikramaditya Rao',
    clientEmail: 'vikram.rao@enterprise.in',
    clientPhone: '+91 98200 44321',
    projectType: 'Commercial Office',
    areaSqFt: 5500,
    scope: ['Architecture Design', 'Interior Design', 'Building Information Modeling (BIM)'],
    packageTier: 'Turnkey Bespoke',
    estimatedCostMin: 720000,
    estimatedCostMax: 920000,
    notes: 'Modern open-plan tech workspace with acoustic pods and collaboration lounges.',
    status: 'Quote Prepared',
  },
];

async function seed() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/inchesnfeet';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for seeding...');

    await Project.deleteMany({});
    await Testimonial.deleteMany({});
    await Inquiry.deleteMany({});
    await Application.deleteMany({});
    await Quotation.deleteMany({});

    if (seedProjects.length > 0) {
      await Project.insertMany(seedProjects);
      console.log(`✅ Seeded ${seedProjects.length} Projects`);
    }

    await Testimonial.insertMany(initialTestimonials);
    console.log(`✅ Seeded ${initialTestimonials.length} Testimonials`);

    await Inquiry.insertMany(sampleInquiries);
    console.log(`✅ Seeded ${sampleInquiries.length} Sample Inquiries`);

    await Application.insertMany(sampleApplications);
    console.log(`✅ Seeded ${sampleApplications.length} Sample Applications`);

    await Quotation.insertMany(sampleQuotations);
    console.log(`✅ Seeded ${sampleQuotations.length} Sample Quotations`);

    console.log('🎉 Database seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
