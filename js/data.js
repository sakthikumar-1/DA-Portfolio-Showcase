/* ─────────────────────────────────────────────────────────
   data.js — All project data for the DA Portfolio
   ───────────────────────────────────────────────────────── */

const ACCENT = {
  teal:   { hi: '#2dd4bf', lo: '#0d9488', bg: 'rgba(45,212,191,0.07)',   border: 'rgba(45,212,191,0.20)',   glow: '0 0 28px rgba(45,212,191,0.12)'   },
  amber:  { hi: '#fbbf24', lo: '#d97706', bg: 'rgba(251,191,36,0.07)',   border: 'rgba(251,191,36,0.20)',   glow: '0 0 28px rgba(251,191,36,0.12)'   },
  rose:   { hi: '#fb7185', lo: '#e11d48', bg: 'rgba(251,113,133,0.07)',  border: 'rgba(251,113,133,0.20)',  glow: '0 0 28px rgba(251,113,133,0.12)'  },
  violet: { hi: '#a78bfa', lo: '#7c3aed', bg: 'rgba(167,139,250,0.07)', border: 'rgba(167,139,250,0.20)', glow: '0 0 28px rgba(167,139,250,0.12)'  },
};

/* Dashboard images — falls back to GitHub raw URLs if local assets not found */
const IMG = {
  diabetes: 'assets/diabetes.png',
  ecommerce:'assets/ecommerce.png',
  cybercrime:'assets/cybercrime.png',
  bankloan: 'assets/bankloan.png',
};

const PROJECTS = [
  {
    id: 1,
    title: 'Diabetes Prediction',
    meta: 'Healthcare · Clinical Analytics',
    color: 'teal',
    sector: 'Healthcare',
    icon: '⚕',
    img: IMG.diabetes,
    gh: 'https://github.com/sakthikumar-1/diabetes-prediction-DA-and-ML-',

    stats: [
      ['768',  'Patient Records'],
      ['82%',  'ML Accuracy'],
      ['8',    'Features'],
    ],
    tools: ['Python', 'Power BI', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    filters: ['All Patients', 'High Risk', 'Age 30–50', 'BMI > 30'],

    kpis: [
      ['79%',  'Precision',  'vs 76% baseline'],
      ['76%',  'Recall',     'high-risk sensitivity'],
      ['0.77', 'F1 Score',   'balanced metric'],
    ],

    workflow: ['Data Cleaning', 'EDA', 'Feature Engineering', 'Model Training', 'Dashboard Design', 'Insight Extraction'],

    problem: 'Most diabetes cases go undetected until serious complications appear. Hospitals need a way to flag high-risk patients early using routine clinical parameters.',
    why: 'The PIMA Indians dataset is a recognised ML benchmark. It demonstrates full-stack DA skills — from cleaning and EDA through feature engineering, model comparison, and Power BI storytelling.',

    insights: [
      ['3×',   'Risk',    'Glucose > 140 mg/dL correlates with 3× higher diabetes risk across all age groups'],
      ['28%',  'Cluster', 'BMI > 30 combined with age > 35 identifies a high-risk cluster in 28% of patients'],
      ['+4%',  'Model',   'Random Forest (82%) outperformed Logistic Regression (78%) after hyperparameter tuning'],
      ['+4%',  'Quality', 'Imputing zero insulin readings improved model accuracy by 4 percentage points'],
      ['45%',  'Pattern', '3+ pregnancies shows 45% higher diabetes incidence in the 30–40 age cohort'],
    ],

    recs: [
      'Prioritise glucose monitoring for patients aged 35+ with BMI > 30',
      'Automate insulin data collection to eliminate null-value imputation at source',
      'Deploy Random Forest as a clinical triage tool in outpatient OPDs',
    ],

    chartType: 'bar',
    chartLabel: 'Feature importance scores',
    chartData: [
      {n:'Glucose',v:28},{n:'BMI',v:18},{n:'Age',v:15},
      {n:'Insulin',v:13},{n:'Preg.',v:10},{n:'BP',v:9},
    ],
  },

  {
    id: 2,
    title: 'E-Commerce Fashion Sales',
    meta: 'Retail · Sales Performance Analytics',
    color: 'amber',
    sector: 'E-Commerce',
    icon: '◈',
    img: IMG.ecommerce,
    gh: 'https://github.com/sakthikumar-1/r-E-commerce-Fashion-Sales-Analysis',

    stats: [
      ['50K+',     'Transactions'],
      ['B2B+B2C',  'Channels'],
      ['Pan-India','Coverage'],
    ],
    tools: ['Python', 'Power BI', 'Pandas', 'Excel', 'DAX'],
    filters: ['All Orders', 'B2B', 'B2C', 'Amazon', 'Merchant'],

    kpis: [
      ['₹1,840', 'Avg Order Value', 'B2C higher than B2B'],
      ['8.3%',   'Return Rate',     'Merchant channel'],
      ['West',   'Top Region',      '38% of revenue'],
    ],

    workflow: ['CSV Ingestion', 'Data Cleaning', 'EDA', 'Revenue Segmentation', 'Dashboard Design', 'Business Insights'],

    problem: 'Fashion brands cannot identify which regions or channels drive real revenue, leading to misallocated warehouse resources and margin lost to invisible inefficiencies.',
    why: 'Retail analytics ranks among the top skills in Business Analyst job descriptions. Fashion e-commerce generates multi-dimensional data requiring strong EDA and DAX skills to extract value.',

    insights: [
      ['↓ATV',  'Channel', 'B2B holds major order share but lower average transaction value compared to B2C'],
      ['2×',    'Geo',     'Specific postal clusters show 2× shipping volume — a clear warehouse placement opportunity'],
      ['FX',    'Revenue', 'Multi-currency transactions reveal significant international demand that goes unmonitored'],
      ['-12%',  'Ops',     'Amazon fulfilment shows lower return rates than Merchant channel — a measurable cost driver'],
      ['⚠',     'Margin',  'Quantity spikes do not align with revenue peaks, indicating discounts are eroding margin'],
    ],

    recs: [
      'Shift B2B pricing strategy to increase average transaction value through SKU bundling',
      'Open micro-warehouses in top 3 high-volume postal clusters to reduce last-mile delivery cost',
      'Implement multi-currency tracking to unlock accurate international revenue reporting',
    ],

    chartType: 'line',
    chartLabel: 'Monthly revenue trend (₹M)',
    chartData: [
      {n:'Jan',v:4.2},{n:'Feb',v:3.8},{n:'Mar',v:5.1},{n:'Apr',v:6.3},
      {n:'May',v:5.7},{n:'Jun',v:7.2},{n:'Jul',v:8.1},{n:'Aug',v:9.4},
      {n:'Sep',v:7.8},{n:'Oct',v:10.2},{n:'Nov',v:12.6},{n:'Dec',v:11.3},
    ],
  },

  {
    id: 3,
    title: 'Cybercrime & Online Fraud',
    meta: 'Cybersecurity · Risk Analytics',
    color: 'rose',
    sector: 'Cybersecurity',
    icon: '⬡',
    img: IMG.cybercrime,
    gh: 'https://github.com/sakthikumar-1/Cybercrime-and-OnlineFraud-Risk-Analysis',

    stats: [
      ['101K+',   'Case Records'],
      ['6.0%',    'Fraud Rate'],
      ['₹161.5M', 'Txn Volume'],
    ],
    tools: ['Python', 'Power BI', 'Excel', 'Pandas'],
    filters: ['All Cases', 'Mobile', 'Desktop', 'Financial', 'Identity'],

    kpis: [
      ['₹9.7M', 'Fraud Detected', '6% of total volume'],
      ['2.3×',  'Mobile Risk',    'vs desktop baseline'],
      ['June',  'Peak Month',     '+22% above average'],
    ],

    workflow: ['Data Ingestion', 'Crime Classification', 'Geo Mapping', 'Temporal Analysis', 'Risk Scoring', 'Dashboard Design'],

    problem: 'India recorded over 1.5 million cybercrime incidents in recent years. Institutions need visibility into fraud hotspots and device-level vulnerabilities to allocate prevention resources efficiently.',
    why: 'Cybercrime data is one of the most complex analytics domains. 101K+ records with multi-dimensional risk classification proves large-scale data capability — directly relevant to BFSI sector hiring.',

    insights: [
      ['₹9.7M',  'Financial', '₹9.69M in fraud identified from ₹161.53M total — a 6% fraud rate with significant monetary impact'],
      ['June↑',  'Seasonal',  'June is the peak cybercrime month, likely tied to tax season and digital transaction volume spikes'],
      ['38%',    'Geo',       'Mumbai, Bengaluru, and Hyderabad account for 38% of all cybercrime cases nationally'],
      ['2.3×',   'Device',    'Mobile devices show 2.3× higher fraud rate than desktops — app vulnerabilities are the weakest link'],
      ['60%+',   'Category',  'Identity theft and phishing combined account for over 60% of all crime types recorded'],
    ],

    recs: [
      'Deploy anomaly detection models specifically targeting mobile app transaction patterns',
      'Increase fraud response resources in Mumbai, Bengaluru, and Hyderabad during May–June',
      'Partner with financial institutions to flag and block phishing domains before customer exposure',
    ],

    chartType: 'pie',
    chartLabel: 'Crime type distribution',
    chartData: [
      {n:'Phishing',  v:34, c:'#fb7185'},
      {n:'Identity',  v:27, c:'#f97316'},
      {n:'Card Fraud',v:18, c:'#fbbf24'},
      {n:'Ransomware',v:12, c:'#a78bfa'},
      {n:'Other',     v:9,  c:'#4b5a6e'},
    ],
  },

  {
    id: 4,
    title: 'Bank Loan Risk Analysis',
    meta: 'Finance · Credit Risk Analytics',
    color: 'violet',
    sector: 'Finance',
    icon: '◇',
    img: IMG.bankloan,
    gh: 'https://github.com/sakthikumar-1/Bank-loan-risk-Analysis',

    stats: [
      ['30K+', 'Applications'],
      ['~68%', 'Approval Rate'],
      ['3',    'Risk Tiers'],
    ],
    tools: ['Python', 'Power BI', 'Pandas', 'Matplotlib', 'Seaborn'],
    filters: ['All Applications', 'Approved', 'Rejected', 'High Risk', 'Prime'],

    kpis: [
      ['14.2%', 'NPA Risk Rate',  'high-risk segment'],
      ['650+',  'Safe Threshold', 'credit score cutoff'],
      ['₹3.8L', 'Avg Loan',      'approved applications'],
    ],

    workflow: ['Data Cleaning', 'Credit Score EDA', 'Risk Tier Segmentation', 'Threshold Analysis', 'Dashboard Design', 'Lending Insights'],

    problem: 'Banks face rising NPA pressure due to flawed loan risk assessment. This project analyses 30,000+ applications to identify precise thresholds that predict default probability.',
    why: 'Finance has the highest demand for data analysts in India. Bank loan analysis requires credit scoring intuition, segmentation skill, and clear visual communication — skills directly applicable to BFSI analytics roles.',

    insights: [
      ['73%',    'Credit',  'Credit score below 600 appears in 73% of rejected applications — the single strongest predictor'],
      ['2.1×',   'Income',  'Annual income above ₹500K improves approval odds 2.1× regardless of other parameters'],
      ['+40%',   'History', 'Bankruptcy history increases rejection by 40% even when credit score exceeds 650'],
      ['35%',    'DTI',     'Debt-to-income ratio above 35% shows a sharp approval drop-off across all income bands'],
      ['3 Tiers','Profile', 'Home ownership type (Own / Rent / Mortgage) creates measurable distinct risk tiers'],
    ],

    recs: [
      'Set automated rejection threshold at credit score < 580 to reduce NPA exposure systematically',
      'Build a secondary scoring model for borderline cases with credit score between 580 and 650',
      'Introduce targeted financial literacy programmes for applicants with high DTI ratios',
    ],

    chartType: 'bar',
    chartLabel: 'Risk factor weights (%)',
    chartData: [
      {n:'Credit',v:73},{n:'Income',v:58},{n:'DTI',v:45},
      {n:'Bankrupt.',v:40},{n:'Home',v:32},{n:'Employ.',v:24},
    ],
  },
];
