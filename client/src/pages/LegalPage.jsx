import React from 'react';
import { useLocation } from 'react-router-dom';

const legalContent = {
  '/privacy-policy': {
    title: 'PRIVACY POLICY',
    subtitle: 'Last updated: 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'At Inchesnfeet Design Development LLP, we respect your personal data and privacy. We collect client contact information (name, email, phone number, physical plot location, project architectural requirements) exclusively when you submit consultation requests, inquiries, or job applications.',
      },
      {
        heading: '2. Use of Collected Data',
        body: 'Your data is utilized strictly for preparing personalized architectural blueprints, BIM coordination proposals, design consultations, and customer relationship management. We never sell, lease, or monetize client personal data to third parties.',
      },
      {
        heading: '3. Digital Security & Confidentiality',
        body: 'All architectural drawings, site surveys, 3D renderings, and client communications are stored with encrypted cloud access. Confidential commercial blueprints are protected under standard non-disclosure obligations.',
      },
      {
        heading: '4. Contact Details',
        body: 'For privacy inquiries, please contact our data grievance officer at vipan@inchesnfeet.com or visit our studio at Koramangala, Bengaluru.',
      },
    ],
  },
  '/term-condition': {
    title: 'TERMS & CONDITIONS',
    subtitle: 'Inchesnfeet Design Development LLP',
    sections: [
      {
        heading: '1. Architectural Scope & Services',
        body: 'Inches & Feet delivers professional architectural design, interior design styling, 3D rendering visualizations, and Building Information Modeling (BIM) sets as agreed upon in the signed project engagement proposal.',
      },
      {
        heading: '2. Intellectual Property & Copyright',
        body: 'All conceptual drawings, 3D architectural renders, sketches, and BIM models produced by Inches & Feet remain the intellectual property of Inchesnfeet Design Development LLP until full settlement of contractual disbursements.',
      },
      {
        heading: '3. Revisions & Modifications',
        body: 'Each design tier includes a predefined number of schematic iterations. Substantive modifications after client sign-off on the structural or municipal approval sets may incur standard drafting amendment fees.',
      },
      {
        heading: '4. Jurisdiction',
        body: 'Any legal disputes shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.',
      },
    ],
  },
  '/shipping-policy': {
    title: 'SHIPPING & DELIVERABLE DISPATCH POLICY',
    subtitle: 'Physical & Digital Drawing Sets',
    sections: [
      {
        heading: '1. Digital Blueprints Handover',
        body: 'All 2D CAD drawings, 3D photorealistic renderings, BIM Revit models, and BOQ spreadsheets are delivered electronically via encrypted cloud drives (Google Drive / Autodesk Construction Cloud) upon stage completion.',
      },
      {
        heading: '2. Physical Architectural Drawing Sets',
        body: 'When physical hard-copy blue line prints (A0/A1 sets) are requested for site execution or municipal authority filings, they are dispatched via registered courier within 3-5 business days across India.',
      },
      {
        heading: '3. International Dispatch',
        body: 'For our North American and Caribbean clients, digital CAD/Revit drawing sets are accessible instantaneously with zero shipping transit latency.',
      },
    ],
  },
  '/refund-policy': {
    title: 'CANCELLATION & REFUND POLICY',
    subtitle: 'Transparent Professional Fee Terms',
    sections: [
      {
        heading: '1. Retainer & Consultation Fees',
        body: 'Initial architectural consultation retainers and site survey mobilization expenses are non-refundable once site visits or schematic drafting has commenced.',
      },
      {
        heading: '2. Milestone-Based Disbursements',
        body: 'If a project is halted by mutual agreement between milestones, client fees for uninitiated subsequent phases will not be levied. Work completed up to the termination milestone will be handed over.',
      },
      {
        heading: '3. Grievance Resolution',
        body: 'If you have any questions or feedback regarding project execution, our managing partners will personally conduct a design audit to ensure satisfaction.',
      },
    ],
  },
};

export default function LegalPage() {
  const location = useLocation();
  const pageData = legalContent[location.pathname] || legalContent['/privacy-policy'];

  return (
    <div style={{ backgroundColor: '#0a0c10', minHeight: '80vh', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tagline">LEGAL & POLICIES</span>
          <h1 style={{ color: '#fff', fontSize: '2.8rem', marginBottom: '0.5rem' }}>{pageData.title}</h1>
          <p style={{ color: '#94a3b8' }}>{pageData.subtitle}</p>
        </div>

        <div className="luxury-card" style={{ background: '#11151e', padding: '3rem' }}>
          {pageData.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: i === pageData.sections.length - 1 ? 0 : '2.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                {sec.heading}
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '0.98rem' }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
