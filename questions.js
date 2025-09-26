const QUESTIONS = [
  {
    question: "What does PDPA stand for in Singapore?",
    options: [
      "Personal Data Privacy Act",
      "Personal Data Protection Act",
      "Private Data Protection Act",
      "Public Data Protection Act"
    ],
    answer: 1
  },
  {
    question: "Which government body enforces the PDPA?",
    options: ["PDPC", "MAS", "IMDA", "CSA"],
    answer: 0
  },
  {
    question: "True or False: PDPA applies only to digital personal data, not paper records.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "When was the PDPA first enacted in Singapore?",
    options: ["2010", "2012", "2014", "2016"],
    answer: 1
  },
  {
    question: "What is considered \"personal data\" under the PDPA?",
    options: ["Only NRIC numbers", "Any data that identifies an individual", "Only digital data", "Only sensitive data"],
    answer: 1
  },
  {
    question: "Which of the following is NOT personal data?",
    options: ["NRIC number", "Email address", "Company registration number", "Phone number"],
    answer: 2
  },
  {
    question: "True or False: Personal data must always be anonymised before sharing internally.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "What is the maximum penalty for a serious PDPA breach (2022 amendments)?",
    options: ["S$500,000", "S$1 million or 5% turnover", "S$1 million or 10% turnover", "S$2 million"],
    answer: 2
  },
  {
    question: "Which obligation requires organisations to notify individuals of purpose for data collection?",
    options: ["Consent Obligation", "Purpose Limitation Obligation", "Notification Obligation", "Access Obligation"],
    answer: 1
  },
  {
    question: "Which obligation requires organisations to protect personal data from unauthorised access?",
    options: ["Security Obligation", "Protection Obligation", "Access Obligation", "Privacy Obligation"],
    answer: 1
  },
  {
    question: "What is the difference between \"consent\" and \"deemed consent\"?",
    options: ["No difference", "Consent is written, deemed is verbal", "Consent is explicit, deemed is implied", "Deemed consent is stronger"],
    answer: 2
  },
  {
    question: "Under PDPA, individuals have right to request access to their data. What is this obligation?",
    options: ["Data Access Obligation", "Access & Correction Obligation", "Information Obligation", "Transparency Obligation"],
    answer: 1
  },
  {
    question: "Which obligation requires organisations to ensure data is accurate and complete?",
    options: ["Quality Obligation", "Accuracy Obligation", "Completeness Obligation", "Verification Obligation"],
    answer: 1
  },
  {
    question: "If data is outsourced to a vendor, who remains responsible under PDPA?",
    options: ["The vendor", "Both equally", "The original organisation", "Neither party"],
    answer: 2
  },
  {
    question: "True or False: Organisations must notify PDPC & individuals of a breach likely to cause significant harm.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "What does the Do Not Call (DNC) Registry regulate?",
    options: ["All communications", "Telemarketing messages", "Government notices", "Emergency alerts"],
    answer: 1
  },
  {
    question: "A database backup with NRICs is left unsecured in the cloud. Which obligation is breached?",
    options: ["Consent Obligation", "Access Obligation", "Protection Obligation", "Purpose Obligation"],
    answer: 2
  },
  {
    question: "Employee emails client data to wrong recipient. What should the company do first?",
    options: ["Fire the employee", "Assess & report the breach", "Delete all records", "Ignore if no harm done"],
    answer: 1
  },
  {
    question: "A system stores user IP addresses in logs. Is this personal data under PDPA?",
    options: ["Never", "Always", "Only if combined with other identifying info", "Only for Singapore IPs"],
    answer: 2
  },
  {
    question: "Company wants to use billing data for promotions. What must it do first?",
    options: ["Anonymise the data", "Obtain fresh consent", "Notify customers", "Update privacy policy"],
    answer: 1
  },
  {
    question: "Customer requests deletion of their account data. Which obligation is triggered?",
    options: ["Access Obligation", "Retention Limitation", "Deletion Obligation", "Privacy Obligation"],
    answer: 1
  },
  {
    question: "What is the minimum age for valid consent under PDPA?",
    options: ["16 years", "18 years", "21 years", "No minimum specified"],
    answer: 3
  }
];
