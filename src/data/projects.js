export const ACCENTS = {
  blue: {
    text: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  teal: {
    text: '#0d9488',
    bg: '#f0fdfa',
    border: '#99f6e4',
  },
  rose: {
    text: '#e11d48',
    bg: '#fff1f2',
    border: '#fecdd3',
  },
  violet: {
    text: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
};

export const TOOL_CHIPS = [
  'Python',
  'Power BI',
  'Pandas',
  'Scikit-learn',
  'DAX',
  'Matplotlib',
  'Seaborn',
  'Excel',
];

export const FILTER_MULTIPLIERS = [1, 0.81, 0.93, 0.74];

export const projects = [
  {
    id: 'diabetes-prediction',
    color: 'blue',
    icon: '⚕',
    domain: 'Healthcare',
    title: 'Diabetes Prediction',
    subtitle: 'Healthcare · Clinical Analytics',
    description:
      'ML-powered risk scoring from clinical parameters to flag high-risk diabetes patients before complications arise.',
    img: 'https://raw.githubusercontent.com/sakthikumar-1/diabetes-prediction-DA-and-ML-/main/Dashboard_SS.png',
    github: 'https://github.com/sakthikumar-1/diabetes-prediction-DA-and-ML-',
    stats: [
      { value: '768', label: 'Records' },
      { value: '82%', label: 'Accuracy' },
      { value: '8', label: 'Features' },
    ],
    tools: ['Python', 'Power BI', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    filters: ['All Patients', 'High Risk', 'Age 30–50', 'BMI > 30'],
    kpis: [
      { value: '79%', label: 'Precision', delta: 'vs 76% baseline' },
      { value: '76%', label: 'Recall', delta: 'high-risk sensitivity' },
      { value: '0.77', label: 'F1 Score', delta: 'balanced metric' },
    ],
    workflow: [
      'Data Cleaning',
      'EDA',
      'Feature Engineering',
      'Model Training',
      'Dashboard Design',
      'Insight Extraction',
    ],
    problem:
      'Most diabetes cases go undetected until serious complications appear. Hospitals need a way to flag high-risk patients early using routine clinical parameters.',
    why: 'The PIMA Indians dataset is a recognised ML benchmark demonstrating full-stack DA skills from cleaning and EDA through feature engineering, model comparison, and Power BI storytelling.',
    insights: [
      {
        metric: '3×',
        tag: 'Risk',
        description:
          'Glucose > 140 mg/dL correlates with 3× higher diabetes risk across all age groups',
      },
      {
        metric: '28%',
        tag: 'Cluster',
        description:
          'BMI > 30 combined with age > 35 identifies a high-risk cluster in 28% of patients',
      },
      {
        metric: '+4%',
        tag: 'Model',
        description:
          'Random Forest (82%) outperformed Logistic Regression (78%) after hyperparameter tuning',
      },
      {
        metric: '+4%',
        tag: 'Quality',
        description:
          'Imputing zero insulin readings improved model accuracy by 4 percentage points',
      },
      {
        metric: '45%',
        tag: 'Pattern',
        description:
          '3+ pregnancies shows 45% higher diabetes incidence in the 30–40 age cohort',
      },
    ],
    recs: [
      'Prioritise glucose monitoring for patients aged 35+ with BMI > 30',
      'Automate insulin data collection to eliminate null-value imputation at source',
      'Deploy Random Forest as a clinical triage tool in outpatient OPDs',
    ],
    chart: {
      type: 'bar',
      label: 'Feature Importance',
      data: [
        { name: 'Glucose', value: 28 },
        { name: 'BMI', value: 18 },
        { name: 'Age', value: 15 },
        { name: 'Insulin', value: 13 },
        { name: 'Pregnancies', value: 10 },
        { name: 'BP', value: 9 },
      ],
    },
  },
  {
    id: 'ecommerce-fashion',
    color: 'teal',
    icon: '◈',
    domain: 'E-Commerce',
    title: 'E-Commerce Fashion Sales',
    subtitle: 'Retail · Sales Performance Analytics',
    description:
      'Multi-channel sales analytics revealing revenue drivers, return patterns, and regional demand across B2B and B2C.',
    img: 'https://raw.githubusercontent.com/sakthikumar-1/r-E-commerce-Fashion-Sales-Analysis/main/Dashboard_SS.png',
    github: 'https://github.com/sakthikumar-1/r-E-commerce-Fashion-Sales-Analysis',
    stats: [
      { value: '50K+', label: 'Transactions' },
      { value: 'B2B+B2C', label: 'Channels' },
      { value: 'Pan-India', label: 'Coverage' },
    ],
    tools: ['Python', 'Power BI', 'Pandas', 'Excel', 'DAX'],
    filters: ['All Orders', 'B2B', 'B2C', 'Amazon', 'Merchant'],
    kpis: [
      { value: '₹1,840', label: 'Avg Order Value', delta: 'B2C higher than B2B' },
      { value: '8.3%', label: 'Return Rate', delta: 'Merchant channel' },
      { value: 'West', label: 'Top Region', delta: '38% of revenue' },
    ],
    workflow: [
      'CSV Ingestion',
      'Data Cleaning',
      'EDA',
      'Revenue Segmentation',
      'Dashboard Design',
      'Business Insights',
    ],
    problem:
      'Fashion brands cannot identify which regions or channels drive real revenue, causing misallocated warehouse resources and margin lost to invisible inefficiencies.',
    why: 'Retail analytics ranks among the top skills in BA job descriptions. Fashion e-commerce requires strong EDA and DAX skills to extract value from multi-dimensional data.',
    insights: [
      {
        metric: '↓ATV',
        tag: 'Channel',
        description:
          'B2B holds major order share but lower average transaction value vs B2C',
      },
      {
        metric: '2×',
        tag: 'Geo',
        description:
          'Specific postal clusters show 2× shipping volume — warehouse placement opportunity',
      },
      {
        metric: 'FX',
        tag: 'Revenue',
        description:
          'Multi-currency transactions reveal international demand going unmonitored',
      },
      {
        metric: '-12%',
        tag: 'Ops',
        description:
          'Amazon fulfilment shows lower return rates than Merchant channel',
      },
      {
        metric: '⚠',
        tag: 'Margin',
        description:
          "Quantity spikes don't align with revenue peaks — discounts eroding margin",
      },
    ],
    recs: [
      'Shift B2B pricing to increase average transaction value through SKU bundling',
      'Open micro-warehouses in top 3 high-volume postal clusters to cut last-mile cost',
      'Implement multi-currency tracking for accurate international revenue reporting',
    ],
    chart: {
      type: 'line',
      label: 'Monthly Revenue (₹L)',
      data: [
        { name: 'Jan', value: 4.2 },
        { name: 'Feb', value: 3.8 },
        { name: 'Mar', value: 5.1 },
        { name: 'Apr', value: 6.3 },
        { name: 'May', value: 5.7 },
        { name: 'Jun', value: 7.2 },
        { name: 'Jul', value: 8.1 },
        { name: 'Aug', value: 9.4 },
        { name: 'Sep', value: 7.8 },
        { name: 'Oct', value: 10.2 },
        { name: 'Nov', value: 12.6 },
        { name: 'Dec', value: 11.3 },
      ],
    },
  },
  {
    id: 'cybercrime-fraud',
    color: 'rose',
    icon: '⬡',
    domain: 'Cybersecurity',
    title: 'Cybercrime & Online Fraud',
    subtitle: 'Cybersecurity · Risk Analytics',
    description:
      'Large-scale fraud pattern analysis across 101K+ cases — mapping hotspots, device risk, and seasonal crime spikes.',
    img: 'https://raw.githubusercontent.com/sakthikumar-1/Cybercrime-and-OnlineFraud-Risk-Analysis/main/Dashboard_SS.png',
    github: 'https://github.com/sakthikumar-1/Cybercrime-and-OnlineFraud-Risk-Analysis',
    stats: [
      { value: '101K+', label: 'Case Records' },
      { value: '6.0%', label: 'Fraud Rate' },
      { value: '₹161.5M', label: 'Volume' },
    ],
    tools: ['Python', 'Power BI', 'Excel', 'Pandas'],
    filters: ['All Cases', 'Mobile', 'Desktop', 'Financial', 'Identity'],
    kpis: [
      { value: '₹9.7M', label: 'Fraud Detected', delta: '6% of total volume' },
      { value: '2.3×', label: 'Mobile Risk', delta: 'vs desktop baseline' },
      { value: 'June', label: 'Peak Month', delta: '+22% above average' },
    ],
    workflow: [
      'Data Ingestion',
      'Crime Classification',
      'Geo Mapping',
      'Temporal Analysis',
      'Risk Scoring',
      'Dashboard Design',
    ],
    problem:
      'India recorded 1.5M+ cybercrime incidents recently. Institutions need visibility into fraud hotspots and device vulnerabilities to allocate prevention resources efficiently.',
    why: '101K+ records with multi-dimensional risk classification proves large-scale data capability — directly relevant to BFSI sector hiring.',
    insights: [
      {
        metric: '₹9.7M',
        tag: 'Financial',
        description:
          '₹9.69M fraud from ₹161.53M total — 6% fraud rate with significant monetary impact',
      },
      {
        metric: 'June↑',
        tag: 'Seasonal',
        description:
          'June is peak cybercrime month tied to tax season and transaction volume spikes',
      },
      {
        metric: '38%',
        tag: 'Geo',
        description:
          'Mumbai, Bengaluru, Hyderabad account for 38% of all cases nationally',
      },
      {
        metric: '2.3×',
        tag: 'Device',
        description:
          'Mobile shows 2.3× higher fraud rate than desktop — app vulnerabilities key',
      },
      {
        metric: '60%+',
        tag: 'Category',
        description:
          'Identity theft + phishing account for 60%+ of all crime types recorded',
      },
    ],
    recs: [
      'Deploy anomaly detection targeting mobile app transaction patterns specifically',
      'Increase fraud response in top 3 cities during May–June',
      'Partner with banks to flag phishing domains before customer exposure',
    ],
    chart: {
      type: 'donut',
      label: 'Crime Category Distribution',
      data: [
        { name: 'Phishing', value: 34, fill: '#e11d48' },
        { name: 'Identity', value: 27, fill: '#f97316' },
        { name: 'Card Fraud', value: 18, fill: '#fbbf24' },
        { name: 'Ransomware', value: 12, fill: '#7c3aed' },
        { name: 'Other', value: 9, fill: '#94a3b8' },
      ],
    },
  },
  {
    id: 'bank-loan-risk',
    color: 'violet',
    icon: '◇',
    domain: 'Finance',
    title: 'Bank Loan Risk Analysis',
    subtitle: 'Finance · Credit Risk Analytics',
    description:
      'Credit risk segmentation across 30K+ loan applications to identify NPA thresholds and approval predictors.',
    img: 'https://raw.githubusercontent.com/sakthikumar-1/Bank-loan-risk-Analysis/main/BankRisk_Dashboard.png',
    github: 'https://github.com/sakthikumar-1/Bank-loan-risk-Analysis',
    stats: [
      { value: '30K+', label: 'Applications' },
      { value: '~68%', label: 'Approval Rate' },
      { value: '3', label: 'Risk Tiers' },
    ],
    tools: ['Python', 'Power BI', 'Pandas', 'Matplotlib', 'Seaborn'],
    filters: ['All Applications', 'Approved', 'Rejected', 'High Risk', 'Prime'],
    kpis: [
      { value: '14.2%', label: 'NPA Risk Rate', delta: 'high-risk segment' },
      { value: '650+', label: 'Safe Threshold', delta: 'credit score cutoff' },
      { value: '₹3.8L', label: 'Avg Loan', delta: 'approved applications' },
    ],
    workflow: [
      'Data Cleaning',
      'Credit Score EDA',
      'Risk Tier Segmentation',
      'Threshold Analysis',
      'Dashboard Design',
      'Lending Insights',
    ],
    problem:
      'Banks face rising NPA pressure from flawed loan risk assessment. This project analyses 30K+ applications to identify precise thresholds that predict default probability.',
    why: 'Finance has the highest demand for data analysts in India. Bank loan analysis requires credit scoring intuition, segmentation, and visual communication — directly applicable to BFSI analytics roles.',
    insights: [
      {
        metric: '73%',
        tag: 'Credit',
        description:
          'Credit score below 600 in 73% of rejected applications — single strongest predictor',
      },
      {
        metric: '2.1×',
        tag: 'Income',
        description:
          'Income above ₹500K improves approval odds 2.1× regardless of other parameters',
      },
      {
        metric: '+40%',
        tag: 'History',
        description:
          'Bankruptcy history increases rejection 40% even when credit score exceeds 650',
      },
      {
        metric: '35%',
        tag: 'DTI',
        description:
          'Debt-to-income ratio above 35% causes sharp approval drop-off across all income bands',
      },
      {
        metric: '3 Tiers',
        tag: 'Profile',
        description:
          'Home ownership type (Own/Rent/Mortgage) creates measurable distinct risk tiers',
      },
    ],
    recs: [
      'Set automated rejection threshold at credit score < 580 to reduce NPA exposure',
      'Build secondary scoring model for borderline cases (credit score 580–650)',
      'Introduce financial literacy programmes for applicants with high DTI ratios',
    ],
    chart: {
      type: 'bar',
      label: 'Approval Factor Weights',
      data: [
        { name: 'Credit Score', value: 73 },
        { name: 'Income', value: 58 },
        { name: 'DTI', value: 45 },
        { name: 'Bankruptcy', value: 40 },
        { name: 'Home Type', value: 32 },
        { name: 'Employment', value: 24 },
      ],
    },
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
