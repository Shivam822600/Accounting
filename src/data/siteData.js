import { siteAssets } from '../assets/siteAssets.js';

export const contact = {
  phone: '+61 1300 110 120',
  phoneHref: 'tel:+611300110120',
  email: 'admin@capitaledgeaccounting.com.au',
  emailHref: 'mailto:admin@capitaledgeaccounting.com.au',
  address: '453 Lithgow Street, Beveridge, VIC 3753',
  calendly: 'https://calendly.com/capitaledgeaccounting',
};

export const services = [
  {
    slug: 'bookkeeping-accounting',
    title: 'Unified Ledger & Bookkeeping Management',
    navLabel: 'Bookkeeping & Ledgers',
    seoTitle: 'Premium Bookkeeping & Ledger Systems Melbourne | Capital Edge',
    subtitle: 'Strategic Ledger Operations & Bookkeeping for Melbourne Businesses',
    image: siteAssets.advisory,
    summary:
      'We establish and maintain high-precision cloud ledger infrastructures using Xero, MYOB, and QuickBooks. By streamlining automated feeds, matching entries, and reconciling activity, we provide business owners with daily visibility into their capital positioning and runway.',
    intro:
      'Our operational accounting services keep your enterprise aligned with modern compliance framework obligations. We administer payroll configurations, oversee Single Touch Payroll (STP) reports, manage superannuation clearing houses, and prepare accurate records for quarterly ATO review cycles. Our team mitigates administrative lag, allowing you to direct focus toward core commercial expansion.',
    sections: [
      {
        title: 'Strategic Ledger & Filing Services',
        items: [
          'Operational Ledger Setup & Balancing',
          'Single Touch Payroll (STP) & Super Compliance',
          'Accounts Payable & Receivable Optimization',
          'Monthly Reconciliations & Performance Reporting',
          'Accounting Software Integration & Automated Feeds',
          'FBT & CGT Record Maintenance',
        ],
      },
      {
        title: 'Business Architecture & Expansion Support',
        items: [
          'Corporate Setup Advisory & ABN Registration',
          'Commercial Flow & Budgeting Forecasts',
          'Corporate Secretary Administrations & ASIC Updates',
          'Finance & Bank Funding Readiness Preparation',
          'Succession Framework Formulations',
        ],
      },
    ],
  },
  {
    slug: 'taxation',
    title: 'Tactical Tax Architecture & ATO Lodgements',
    navLabel: 'Tax Architecture',
    seoTitle: 'Boutique Tax Return Advisory Melbourne | Capital Edge',
    subtitle: 'Advanced Tax Architecture & Return Lodgements in Melbourne',
    image: siteAssets.tax,
    summary:
      'Maximize cash retention through proactive tax positioning. We design legal tax minimization structures and file tax returns for individuals, sole traders, and corporate entities, ensuring full compliance with ATO regulations.',
    intro:
      'As Registered Tax Agents, we represent your interest directly in interactions with the Australian Taxation Office. We file returns for companies, trusts, and individuals, utilizing legal deductions and concessions to safeguard your hard-earned assets.',
    sections: [
      {
        title: 'Taxation & ATO Compliance Areas',
        items: [
          'Corporate & Trust Tax Return Preparation',
          'Individual & Family Group Return Optimization',
          'Business Activity Statements (BAS) Lodgement',
          'Capital Gains Tax (CGT) Advisory & Property Calculations',
          'ATO Audit Preparation & Strategic Representation',
          'Custom ATO Private Ruling Applications',
        ],
      },
    ],
  },
  {
    slug: 'smsf-accountants',
    title: 'Private SMSF Administration & Compliance Services',
    navLabel: 'SMSF Administration',
    seoTitle: 'SMSF Accounting & Compliance Advisors Melbourne | Capital Edge',
    subtitle: 'Self-Managed Super Fund Setup, Auditing & Annual Compliance',
    image: siteAssets.smsf,
    summary:
      'Take control of your retirement capital with our SMSF services. We coordinate fund establishment, annual accounts preparation, and independent auditing in alignment with ATO regulations.',
    intro:
      'Managing a Self-Managed Super Fund provides flexibility but involves complex regulatory compliance. Our specialist advisors handle annual returns, coordinate compliance audits, and manage contribution caps to safeguard your retirement portfolio.',
    sections: [
      {
        title: 'SMSF Setup & Annual Governance',
        items: [
          'SMSF Trust Deed Configuration & Corporate Trustee Setup',
          'Fund TFN, ABN, and Clearing House Registrations',
          'Annual Financial Statement & Member Benefit Statements',
          'SMSF Annual Return (SAR) Filing with the ATO',
          'Coordination with Registered Independent Auditors',
          'LRBA Investment Structure Compliance Reviews',
        ],
      },
    ],
  },
];

export const locations = [
  {
    slug: 'epping',
    legacy: 'apping.html',
    title: 'Boutique Accounting & Tax Advisors in Epping, VIC',
    subtitle:
      'Bespoke CPA advisory and registered tax representation for businesses and families in Melbourne’s northern growth corridor.',
    audience: ['Small Business Owners', 'Medical Practices', 'Sole Traders & Tradies', 'SMSF Trustees', 'Property Investors'],
    services: ['Strategic Tax returns', 'Ledger Bookkeeping', 'BAS Filings', 'Corporate Advisory', 'SMSF Audit Setup'],
    intro:
      'Operating from Gateway Boulevard in Epping, our team delivers high-end tax and accounting services backed by CPA qualifications. We implement fixed-fee arrangements to guarantee budgeting certainty for local clients.',
  },
  {
    slug: 'bundoora',
    legacy: 'bundoora.html',
    title: 'Strategic Tax Advisory Services in Bundoora',
    subtitle: 'Premium accounting partnerships serving professionals and research operators.',
    audience: ['Academics & Researchers', 'Healthcare Practitioners', 'Consultancy Corporations', 'Investors'],
    services: ['Tax Return Structuring', 'Dual-Income Optimization', 'BAS Management', 'SMSF Annual Compliance'],
    intro:
      'We support Bundoora-based professionals managing salary packaging, consultancy structures, and research grants. We focus on providing personalized, jargon-free tax strategies.',
  },
  {
    slug: 'lalor',
    legacy: 'layor.html',
    title: 'Bespoke Accounting Services serving Lalor',
    subtitle: 'Practical tax compliance and bookkeeping systems for sole traders and family enterprises.',
    audience: ['Tradies & Builders', 'Family Businesses', 'ABN Sole Traders', 'Property Owners'],
    services: ['Sole Trader Returns', 'BAS & GST Setup', 'Operational Bookkeeping', 'Late Tax Lodgements'],
    intro:
      'We help clients in Lalor simplify their tax obligations and organize their accounts. We provide clear advice in plain English, starting with a free discovery call.',
  },
  {
    slug: 'mill-park',
    legacy: 'milkPark.html',
    title: 'Boutique Tax Agents & Advisory serving Mill Park',
    subtitle: 'Comprehensive financial governance and tax optimization for local owners.',
    audience: ['Family Businesses', 'Tradies', 'Healthcare Workers', 'SMSF Operators'],
    services: ['Company Tax returns', 'Quarterly BAS Reconciliations', 'Payroll System Setup', 'SMSF Setup'],
    intro:
      'We partner with family-run enterprises and individuals in Mill Park to manage compliance, optimize deductions, and build financial security.',
  },
  {
    slug: 'south-morang',
    legacy: 'morang.html',
    title: 'Professional Tax Advisors serving South Morang',
    subtitle: 'Responsive accounting partnerships for growing families and property investors.',
    audience: ['Property Investors', 'Subcontractors', 'Healthcare Staff', 'Startups'],
    services: ['Tax Optimization Plans', 'Rental Property Depreciations', 'BAS Lodgement', 'Xero Setup'],
    intro:
      'Our advisors help South Morang residents navigate investment property deductions, structure business assets, and stay fully ATO-compliant.',
  },
  {
    slug: 'thomastown',
    legacy: 'thomastown.html',
    title: 'Commercial Tax & Accounting serving Thomastown',
    subtitle: 'Specialist compliance, bookkeeping, and payroll setup for commercial operators.',
    audience: ['Manufacturers', 'Trade Contractors', 'Logistics Companies', 'Industrial Operators'],
    services: ['Corporate Filings', 'Payroll & STP Integrations', 'BAS Reconciliations', 'Depreciation Scheduling'],
    intro:
      'We deliver robust accounting and compliance support tailored to the manufacturing and trades sectors in Thomastown, keeping your operational ledgers audit-ready.',
  },
  {
    slug: 'whittlesea',
    legacy: 'whithleasea.html',
    title: 'Bespoke Regional Tax Advisory serving Whittlesea',
    subtitle: 'Specialized regional business and family tax compliance services.',
    audience: ['Regional Operators', 'Family Businesses', 'Subcontractors', 'Property Owners'],
    services: ['Business Tax Planning', 'BAS Filings', 'SMSF Compliance', 'Succession Strategy'],
    intro:
      'We combine agricultural and regional business knowledge with professional CPA standards to deliver tailored tax strategies for clients across Whittlesea.',
  },
];

export const reviews = [
  {
    quote:
      'Ravi streamlined our company accounts and set up our Xero payroll systems perfectly. The fixed-fee model gives us absolute pricing certainty.',
    author: 'Corporate Advisory Client',
  },
  {
    quote:
      'Excellent tax planning advice. They helped us restructure our medical practice and set up our service trust compliance correctly.',
    author: 'Medical Practice Director',
  },
  {
    quote:
      'Proactive and direct. They helped me clean up three years of overdue returns and put together a clear strategy for my sole trader deductions.',
    author: 'Tradie Business Owner',
  },
];

export const blogPosts = [
  {
    title: 'Tax minimization frameworks for growing businesses',
    image: siteAssets.tax,
    excerpt: 'How to use legal concessions, asset write-offs, and trust structures to protect your margins.',
  },
  {
    title: 'Audit-proofing your business activities statements',
    image: siteAssets.audit,
    excerpt: 'A checklist for keeping your ledgers compliant and audit-ready throughout the financial year.',
  },
  {
    title: 'Preparing a clean individual return for review',
    image: siteAssets.ato,
    excerpt: 'Key tax deductions, vehicle claim methodologies, and home-office records required for ATO filings.',
  },
];
