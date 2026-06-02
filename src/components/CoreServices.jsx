// import React from 'react';
import { Briefcase, Building2, Landmark, FileText, CheckCircle2 } from 'lucide-react';
import './CoreServices.css';

const ServiceCard = ({ icon: Icon, title, description, timeline, extraTimeline }) => (
  <div className="service-card">
    <div className="card-icon-wrapper">
      <Icon size={20} className="card-icon" />
    </div>
    <h4 className="card-title">{title}</h4>
    <p className="card-description">{description}</p>
    <div className="card-footer">
      <span className="timeline-label">Timeline</span>
      <div className="timeline-value">
        {timeline}
        {extraTimeline && <span className="timeline-extra">{extraTimeline}</span>}
      </div>
    </div>
  </div>
);

const CoreServices = () => {
  return (
    <section id="services" className="core-services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Legal Services</h2>
          <p className="section-subtitle">Streamlined processes for modern enterprises.</p>
        </div>

        {/* Business Registration Category */}
        <div className="service-category">
          <h3 className="category-title">
            <Building2 size={24} className="cyan-text" /> Business Registration
          </h3>
          <div className="services-grid cols-3">
            <ServiceCard 
              icon={Briefcase}
              title="Partnership Firm Registration"
              description="Includes drafting Partnership Deed, notarization, Form 1 filing with RoF Karnataka, GST, Salary Certificate delivery, and PAN card assistance."
              timeline="10-14 Days"
            />
            <ServiceCard 
              icon={Landmark}
              title="LLP Registration"
              description="Includes DPIN/DSC, name approval via MCA, LLP Agreement drafting, MCA filing. Deliverables: Incorporation Certificate, LLPIN, PAN, and TAN."
              timeline="15-20 Days"
            />
            <ServiceCard 
              icon={Building2}
              title="MSME / Udyam Registrations"
              description="Online Udyam registration for proprietorship, partnerships, and LLPs."
              timeline="1-2 Days"
            />
          </div>
        </div>

        {/* Taxation & IP Category */}
        <div className="service-category">
          <h3 className="category-title">
            <FileText size={24} className="cyan-text" /> Taxation & Intellectual Property
          </h3>
          <div className="services-grid cols-2">
            <ServiceCard 
              icon={FileText}
              title="GST Registration"
              description="Applicable for inter-state ecommerce business delivery and certificate delivery."
              timeline="5-7 Days"
            />
            <ServiceCard 
              icon={CheckCircle2}
              title="Trademark Filing"
              description="Search, class selection, IP consulting, TM number issuance, and monitoring."
              timeline="3 Days (Filing)"
              extraTimeline="12+ Months Avg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreServices;
