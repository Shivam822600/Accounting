import { siteAssets } from '../assets/siteAssets.js';

export const contact = {
  phone: '+61 1300 110 120',
  phoneHref: 'tel:+611300110120',
  email: 'admin@rpsaccountants.com.au',
  emailHref: 'mailto:admin@rpsaccountants.com.au',
  address: '136 Gateway Boulevard, Epping, VIC, 3076',
  calendly: 'https://calendly.com/ravi-rpsaccountants',
};

export const services = [
  {
    slug: 'bookkeeping-accounting',
    title: 'Bookkeeping and Accounting Service',
    navLabel: 'Bookkeeping and Accounting',
    seoTitle: 'Bookkeeping & Accounting Melbourne | RPS Accountants',
    subtitle: 'Melbourne bookkeeping and accounting services for small business.',
    image: siteAssets.advisory,
    summary:
      'A key part of running a business is managing bookkeeping and accounting processes so you can understand your numbers and predict the future course of the business.',
    sections: [
      {
        title: 'Bookkeeping and Accounting Service in Melbourne',
        body:
          'Our bookkeeping and accounting services help Australian companies meet ongoing compliance requirements while maintaining accurate financial records. We oversee daily bookkeeping, reconciliations, payroll, Single Touch Payroll reporting, superannuation obligations and related ATO filings.',
      },
      {
        title: 'What We Cover',
        items: [
          'Management and financial accounting',
          'Budgeting and forecasting',
          'Accounting software selection and training',
          'Payroll, STP and superannuation compliance',
          'ATO reporting and reconciliations',
        ],
      },
    ],
  },
  {
    slug: 'taxation',
    title: 'Taxation Service',
    navLabel: 'Taxation Service',
    seoTitle: 'Tax Returns & Taxation Services Melbourne | RPS Accountants',
    subtitle: 'Professional taxation and tax return services in Melbourne.',
    image: siteAssets.tax,
    summary:
      'We add value by providing expert tax advice and sound business ideas to help you create and protect your wealth.',
    sections: [
      {
        title: 'Taxation Service in Melbourne',
        body:
          'Your business and personal circumstances change over time, and changing tax regulations bring new responsibilities. Our tax experience helps you meet compliance requirements while taking advantage of practical tax planning opportunities.',
      },
      {
        title: 'Tax and ATO Compliance',
        items: [
          'Income tax, BAS, IAS and PAYG',
          'GST consulting and lodgement',
          'Fringe Benefits Tax and Capital Gains Tax',
          'Small business tax concessions',
          'ATO rulings and audit support',
        ],
      },
    ],
  },
  {
    slug: 'business-advisory',
    title: 'Business Advisory Service',
    navLabel: 'Business Advisory',
    seoTitle: 'Business Advisory Services Melbourne | RPS Accountants',
    subtitle: 'Strategic business advisory for Melbourne SMEs and startups.',
    image: siteAssets.audit,
    summary:
      'Our advisory team creates practical, personalised solutions for client business needs and supports GST, BAS and compliance obligations.',
    sections: [
      {
        title: 'Business Advisory Service in Australia',
        body:
          'We provide a comprehensive set of services to help clients overcome business challenges, clarify reporting obligations and make confident decisions about growth, compliance and structure.',
      },
      {
        title: 'GST and BAS Services',
        items: [
          'GST registration and reporting guidance',
          'Business Activity Statement preparation and lodgement',
          'GST transaction review and reconciliation',
          'Deadline monitoring and ATO query support',
          'BAS amendments and corrections when required',
        ],
      },
    ],
  },
  {
    slug: 'smsf-accountants',
    title: 'SMSF Accountants',
    navLabel: 'SMSF',
    seoTitle: 'SMSF Accountant & Super Fund Services Melbourne | RPS',
    subtitle: 'SMSF accounting and administration services for Melbourne investors.',
    image: siteAssets.smsf,
    summary:
      'RPS Accountants supports clients with self-managed super fund compliance, accurate reporting and practical superannuation guidance.',
    sections: [
      {
        title: 'Superannuation and SMSF Services in Melbourne',
        body:
          'Self-managed super funds can be powerful, but complying with superannuation laws can be challenging. We work closely with clients to support fund compliance, employer obligations and accurate reporting aligned with financial objectives.',
      },
      {
        title: 'SMSF Support',
        items: [
          'SMSF establishment guidance',
          'Annual compliance and administration',
          'Superannuation planning',
          'Employer superannuation obligations',
          'Retirement and estate planning coordination',
        ],
      },
    ],
  },
  {
    slug: 'medical-accountants',
    title: 'Medical Accountants',
    navLabel: 'Medical Accountants',
    seoTitle: 'Medical Accountants in Melbourne | Health Professionals Tax | RPS',
    subtitle: 'Specialist medical accountants for Melbourne health professionals.',
    image: siteAssets.medical,
    summary:
      'We support healthcare professionals with GST, BAS, payroll, structuring, cash flow planning and ATO compliance.',
    sections: [
      {
        title: 'Accounting Services for Healthcare Firms',
        body:
          'Whether you operate as a sole practitioner, partnership or growing medical practice, our advisors provide practical accounting support designed to protect your interests and support sustainable growth.',
      },
      {
        title: 'Professional and Reliable Accounting Services',
        items: [
          'Bookkeeping for medical practices',
          'Tax return preparation and lodgement',
          'Medical sector tax consulting',
          'Cash flow planning',
          'Dedicated accountant support',
        ],
      },
    ],
  },
];

export const locations = [
  {
    slug: 'epping',
    legacy: 'apping.html',
    title: 'Trusted Tax Accountants in Epping, VIC',
    subtitle:
      'A CPA-led practice and registered tax agent serving individuals, sole traders and growing businesses across Melbourne northern growth corridor.',
    audience: ['Individuals and families', 'Sole traders', 'Tradies', 'Property investors', 'Healthcare workers', 'Small businesses'],
    services: ['Personal tax returns', 'Business tax', 'BAS lodgement', 'Bookkeeping', 'SMSF', 'Business advisory'],
    intro:
      'From our office at 136 Gateway Boulevard, every return is reviewed by a CPA-qualified registered tax agent. Fees are fixed and quoted before we start, and we stay available year-round for questions between July and June.',
  },
  {
    slug: 'bundoora',
    legacy: 'bundoora.html',
    title: 'Tax Accountant Bundoora',
    subtitle: 'RPS Accountants serving Melbourne north near La Trobe University.',
    audience: ['Academics', 'Researchers', 'Healthcare workers', 'Consultants', 'Property investors'],
    services: ['Individual returns', 'Multiple income stream returns', 'Research stipend guidance', 'SMSF compliance', 'Business tax'],
    intro:
      'Bundoora clients often have salary packaging, research grants, consulting income or healthcare sector structures. Our Epping office is a short drive via Plenty Road.',
  },
  {
    slug: 'lalor',
    legacy: 'layor.html',
    title: 'Tax Accountant in Lalor',
    subtitle: 'Tax support for individuals, tradies and small businesses.',
    audience: ['Working families', 'Tradies', 'ABN sole traders', 'Small business owners', 'Late lodgement clients'],
    services: ['Individual tax returns', 'ABN lodgements', 'Company tax', 'BAS', 'Bookkeeping'],
    intro:
      'We help Lalor clients keep returns accurate, lodged on time and explained in plain English. The first 30-minute consult is free.',
  },
  {
    slug: 'mill-park',
    legacy: 'milkPark.html',
    title: 'Tax Agents and Accountants in Mill Park',
    subtitle: 'Local tax returns, BAS lodgement, bookkeeping and business advisory for Mill Park families and owner-operators.',
    audience: ['Families', 'Tradies', 'Owner-operators', 'Healthcare professionals', 'Family businesses'],
    services: ['Personal tax', 'Quarterly BAS', 'Bookkeeping', 'SMSF setup', 'Business restructuring'],
    intro:
      'From our Epping office, about ten minutes up Plenty Road, we support Mill Park individuals and businesses with fixed fees and practical advice.',
  },
  {
    slug: 'south-morang',
    legacy: 'morang.html',
    title: 'Tax Accountant South Morang',
    subtitle: 'Accounting support for South Morang residents, investors and small businesses.',
    audience: ['Families', 'Property investors', 'Sole traders', 'Construction businesses', 'Healthcare workers'],
    services: ['Tax returns', 'Business tax', 'BAS and GST', 'Payroll', 'Bookkeeping'],
    intro:
      'South Morang clients rely on us for responsive northern Melbourne accounting advice without call-centre handoffs or confusing fees.',
  },
  {
    slug: 'thomastown',
    legacy: 'thomastown.html',
    title: 'Tax and Accounting Specialists Serving Thomastown',
    subtitle: 'Accounting, tax and advisory services for Thomastown residents and local businesses.',
    audience: ['Manufacturers', 'Trades', 'Construction businesses', 'Service businesses', 'Residents'],
    services: ['Individual tax returns', 'Company tax', 'Payroll setup', 'STP reporting', 'Depreciation schedules'],
    intro:
      'Our Epping office is minutes from Thomastown via the Metropolitan Ring Road, with experience across manufacturing, trades and construction.',
  },
  {
    slug: 'whittlesea',
    legacy: 'whithleasea.html',
    title: 'Tax Accountant Whittlesea',
    subtitle: 'RPS Accountants serving rural, regional and farm businesses across Whittlesea.',
    audience: ['Farm operators', 'Rural workers', 'Tradies', 'Property investors', 'Family businesses'],
    services: ['Farm business tax', 'Livestock valuation', 'FMD strategy', 'BAS and GST', 'Succession planning'],
    intro:
      'Whittlesea clients receive local knowledge, remote service options and registered tax agent representation for rural and business tax matters.',
  },
];

export const reviews = [
  {
    quote:
      'Ravi made the process for my tax return so easy and even gave me a few tips that I could implement in my business.',
    author: 'Sole trader client',
  },
  {
    quote:
      'Very efficient and ideal location. I was very happy with the helpful and quick experience.',
    author: 'Tax return client',
  },
  {
    quote:
      'Ravi has been monumental in making our accounting super easy and streamlined.',
    author: 'Business client',
  },
];

export const blogPosts = [
  {
    title: 'Tax strategy for growing Australian businesses',
    image: siteAssets.tax,
    excerpt: 'Practical ways to keep tax planning aligned with growth, cash flow and compliance.',
  },
  {
    title: 'Audit readiness without the stress',
    image: siteAssets.audit,
    excerpt: 'How clean records, reconciliations and timely reporting reduce audit risk.',
  },
  {
    title: 'ATO lodgement basics for individuals',
    image: siteAssets.ato,
    excerpt: 'A simple checklist for preparing a clean personal tax return.',
  },
];
