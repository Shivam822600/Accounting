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
    subtitle: 'Melbourne Bookkeeping & Accounting Services for Small Business',
    image: siteAssets.advisory,
    summary:
      'A key part of running a business is managing bookkeeping and accounting processes so you can understand your numbers and predict the future course of the business. Additionally, we make use of the latest bookkeeping and accounting software (like Xero, MYOB, and QuickBooks) to ensure the most precise and accurate results.',
    intro:
      'Our bookkeeping and accounting services help Australian companies meet ongoing compliance requirements while maintaining accurate financial records. We oversee daily bookkeeping, reconciliations, payroll, Single Touch Payroll (STP) reporting, superannuation obligations, and related ATO filings. We reduce administrative burden, minimize errors, and ensure companies confidently fulfill their employer obligations.',
    sections: [
      {
        title: 'Tax & ATO Compliance Services Offered',
        items: [
          'Income Tax (BAS, IAS & PAYG)',
          'Goods and Services Tax (GST) & GST Consulting',
          'Fringe Benefits Tax (FBT)',
          'Capital Gains Tax (CGT)',
          'International Tax Matters',
          'Small Business Tax Concessions',
          'Tax Planning and Minimisation',
          'Obtaining ATO Rulings',
          'Managing and Preparing for Tax Audits',
        ],
      },
      {
        title: 'Business Advisory & Growth',
        items: [
          'Business Start-Up Advice',
          'Strategic Business Planning',
          'Business Restructuring',
          'Business Sales and Acquisitions',
          'Succession Planning',
          'Finance Applications and Submissions',
        ],
      },
      {
        title: 'Superannuation & Wealth Planning',
        items: [
          'Superannuation Planning',
          'Self-Managed Superannuation Funds (SMSF) Setup & Compliance',
          'SMSF Establishment & Salary Packaging',
          'Financial and Retirement Planning',
          'Estate Planning',
        ],
      },
      {
        title: 'Accounting & Financial Reporting',
        items: [
          'Management and Financial Accounting',
          'Budgeting and Forecasting',
          'Accounting Software Selection and Training',
        ],
      },
    ],
  },
  {
    slug: 'taxation',
    title: 'Taxation Service',
    navLabel: 'Taxation Service',
    seoTitle: 'Tax Returns & Taxation Services Melbourne | RPS Accountants',
    subtitle: 'Professional Taxation & Tax Return Services in Melbourne',
    image: siteAssets.tax,
    summary:
      'We add value by providing expert tax advice and sound business ideas to help you create and protect your wealth. Your tax obligations alter over time, and getting the appropriate advice at the right moment is essential to ensure you achieve compliance requirements while taking advantage of superior tax planning options.',
    intro:
      'RPS Accountants is a registered tax agent, meaning we are fully qualified to represent you in dealings with the ATO. We handle tax return preparation and lodgement for individuals, sole traders, partnerships, companies, and trusts across Melbourne. From simple salary-and-wage returns to complex corporate structures, we ensure every deduction is maximized legally.',
    sections: [
      {
        title: 'Taxation & Compliance Core Areas',
        items: [
          'Income Tax Return Preparation & Lodgement',
          'Business Activity Statements (BAS) & Installment Activity Statements (IAS)',
          'Goods and Services Tax (GST) setup & lodgements',
          'Fringe Benefits Tax (FBT) compliance & salary packaging',
          'Capital Gains Tax (CGT) advice for property & shares',
          'Small business tax concessions & structural review',
          'Managing and preparing for ATO audits & reviews',
          'Obtaining custom ATO private rulings & amendments',
        ],
      },
      {
        title: 'Individual & Investor Tax Services',
        items: [
          'Personal tax returns with maximized work-related deductions',
          'Rental property depreciation & negative gearing advice',
          'Sole trader ABN tax returns',
          'Late or multi-year overdue tax lodgements',
        ],
      },
    ],
  },
  {
    slug: 'business-advisory',
    title: 'Business Advisory Service',
    navLabel: 'Business Advisory',
    seoTitle: 'Business Advisory Services Melbourne | RPS Accountants',
    subtitle: 'Strategic Business Advisory for Melbourne SMEs and Startups',
    image: siteAssets.audit,
    summary:
      'From business structuring to GST strategy and growth planning — RPS Accountants delivers practical business advisory services for Melbourne entrepreneurs and growing companies. We help clients overcome business challenges, clarify reporting obligations, and make confident decisions.',
    intro:
      'We believe accounting should look forward, not just backward. Our business advisory services provide you with clear reporting, regular performance reviews, cash flow projections, and structure optimization. Whether you are launching a startup or looking to scale up, we provide structured support aligned with your goals.',
    sections: [
      {
        title: 'Business Startup & Structuring',
        items: [
          'ABN, TFN, GST, and PAYG registration setup',
          'Company, Trust, Partnership, or Sole Trader structural advice',
          'Business plan creation and budgeting setup',
          'Corporate secretarial services & ASIC compliance',
        ],
      },
      {
        title: 'Growth & Strategy Services',
        items: [
          'Regular cash flow forecasting and management',
          'Key Performance Indicator (KPI) tracking & reporting',
          'Break-even and profitability analysis',
          'Succession planning and business sale preparation',
          'Finance applications & bank submission preparation',
        ],
      },
    ],
  },
  {
    slug: 'smsf-accountants',
    title: 'SMSF Accountants',
    navLabel: 'SMSF',
    seoTitle: 'SMSF Accountant & Super Fund Services Melbourne | RPS',
    subtitle: 'Self-Managed Super Fund (SMSF) Accounting & Administration',
    image: siteAssets.smsf,
    summary:
      'Thinking about a self-managed super fund? RPS Accountants provides SMSF setup, annual compliance, and ongoing administration for Melbourne clients. We work closely with you to support fund compliance, employer obligations, and accurate reporting.',
    intro:
      'SMSFs offer incredible flexibility and control over your retirement wealth, but they come with strict ATO regulations and auditing requirements. Our SMSF team handles all the heavy lifting — from the initial fund setup and deed registration to annual tax returns and coordinating the independent audit.',
    sections: [
      {
        title: 'SMSF Setup & Administration',
        items: [
          'Trust deed preparation & Corporate Trustee setup',
          'TFN, ABN, and bank account registrations for the fund',
          'Rollover facilitation from industry/retail funds',
          'Annual financial statement & member statement preparation',
          'SMSF annual return preparation and lodgement with the ATO',
          'Coordination of mandatory annual independent SMSF audit',
        ],
      },
      {
        title: 'Strategic Superannuation Support',
        items: [
          'Contribution limits monitoring (concessional & non-concessional)',
          'Pension phase transition planning & administration',
          'Limited Recourse Borrowing Arrangements (LRBA) review for property',
          'SMSF compliance advice & ATO audit representation',
        ],
      },
    ],
  },
  {
    slug: 'medical-accountants',
    title: 'Medical Accountants',
    navLabel: 'Medical Accountants',
    seoTitle: 'Medical Accountants in Melbourne | Health Professionals Tax | RPS',
    subtitle: 'Specialist Medical Accountants for Melbourne Health Professionals',
    image: siteAssets.medical,
    summary:
      'Handling and running a medical practice is already challenging; its accounting and company tax returns shouldn’t add to the stress. We support healthcare professionals with GST, BAS, payroll, structuring, cash flow planning, and ATO compliance.',
    intro:
      'From managing GST, BAS, and payroll obligations to assisting with business structuring, cash flow planning, and ATO compliance, we offer practical and proactive support aligned with the needs of the healthcare sector. Whether you are operating as a sole practitioner, part of a partnership, or running a growing medical practice, our experienced advisors deliver personalized solutions designed to protect your interests and support sustainable growth.',
    sections: [
      {
        title: 'Healthcare Specialty Services',
        items: [
          'Bookkeeping and payroll processing for medical practices',
          'Tax return preparation and lodgement for doctors, dentists, and allied health',
          'Service trust structures and income-splitting strategy',
          'Equipment finance and practice fit-out tax deductions',
          'Cash flow planning & medical sector tax consulting',
          'Dedicated accountant support for medical practitioners',
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
