export interface Country {
  name: string;
  slug: string;
  flag: string;
  plans: InsurancePlan[];
  faqs: FAQ[];
  onboardingLinks: OnboardingLink[];
}

export interface InsurancePlan {
  id: string;
  name: string;
  logo: string;
  description: string;
  quoteUrl: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface OnboardingLink {
  id: string;
  title: string;
  description: string;
  url: string;
}

export const countries: Country[] = [
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    plans: [
      {
        id: "uk-plan-1",
        name: "NHS Plus Coverage",
        logo: "🏥",
        description: "Comprehensive private health insurance to complement NHS services",
        quoteUrl: "https://quote.kota.io/uk/nhs-plus"
      },
      {
        id: "uk-plan-2",
        name: "Executive Health Plan",
        logo: "⭐",
        description: "Premium health coverage for executives and professionals",
        quoteUrl: "https://quote.kota.io/uk/executive"
      }
    ],
    faqs: [
      {
        id: "uk-faq-1",
        question: "How does private insurance work with NHS?",
        answer: "Private insurance complements NHS services by providing faster access to specialists, private rooms, and elective procedures while keeping NHS as your primary healthcare provider."
      },
      {
        id: "uk-faq-2",
        question: "What's typically covered in UK private health insurance?",
        answer: "Most plans cover specialist consultations, diagnostic tests, surgery, cancer treatment, and mental health services. NHS emergency care remains free regardless."
      }
    ],
    onboardingLinks: [
      {
        id: "uk-onboard-1",
        title: "Understanding UK Healthcare System",
        description: "Learn how private insurance works alongside NHS",
        url: "/resources/uk-healthcare-guide"
      },
      {
        id: "uk-onboard-2",
        title: "Tax Benefits Guide",
        description: "Understand tax implications of health insurance in the UK",
        url: "/resources/uk-tax-benefits"
      }
    ]
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    plans: [
      {
        id: "de-plan-1",
        name: "Private Krankenversicherung",
        logo: "🏥",
        description: "Private health insurance for high earners and self-employed",
        quoteUrl: "https://quote.kota.io/de/private"
      },
      {
        id: "de-plan-2",
        name: "Zusatzversicherung",
        logo: "➕",
        description: "Supplementary insurance to enhance statutory coverage",
        quoteUrl: "https://quote.kota.io/de/supplementary"
      }
    ],
    faqs: [
      {
        id: "de-faq-1",
        question: "Who can get private health insurance in Germany?",
        answer: "Employees earning above €69,300 (2024), self-employed individuals, civil servants, and students can opt for private health insurance."
      },
      {
        id: "de-faq-2",
        question: "Can I switch back to statutory insurance?",
        answer: "Switching back is possible but restricted. Generally only possible if your income drops below the threshold or you become employed and earn less than the limit."
      }
    ],
    onboardingLinks: [
      {
        id: "de-onboard-1",
        title: "German Healthcare System Guide",
        description: "Navigate the German healthcare system as an expat",
        url: "/resources/germany-healthcare-guide"
      },
      {
        id: "de-onboard-2",
        title: "Private vs Statutory Insurance",
        description: "Compare your options in the German system",
        url: "/resources/germany-insurance-comparison"
      }
    ]
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    plans: [
      {
        id: "fr-plan-1",
        name: "Mutuelle Santé",
        logo: "🏥",
        description: "Complementary health insurance to enhance Sécurité Sociale",
        quoteUrl: "https://quote.kota.io/fr/mutuelle"
      },
      {
        id: "fr-plan-2",
        name: "International Expat Plan",
        logo: "🌍",
        description: "Comprehensive coverage for international residents",
        quoteUrl: "https://quote.kota.io/fr/expat"
      }
    ],
    faqs: [
      {
        id: "fr-faq-1",
        question: "Is complementary insurance mandatory in France?",
        answer: "While not legally mandatory for all, most employers must provide complementary health insurance (mutuelle) to employees since 2016."
      },
      {
        id: "fr-faq-2",
        question: "How does reimbursement work in France?",
        answer: "Sécurité Sociale covers 70% of most medical costs, and your mutuelle typically covers the remaining 30% plus additional benefits."
      }
    ],
    onboardingLinks: [
      {
        id: "fr-onboard-1",
        title: "French Healthcare Registration",
        description: "How to register for Sécurité Sociale",
        url: "/resources/france-healthcare-registration"
      },
      {
        id: "fr-onboard-2",
        title: "Choosing a Mutuelle",
        description: "Guide to selecting complementary insurance",
        url: "/resources/france-mutuelle-guide"
      }
    ]
  },
  {
    name: "Spain",
    slug: "spain",
    flag: "🇪🇸",
    plans: [
      {
        id: "es-plan-1",
        name: "Seguro Médico Privado",
        logo: "🏥",
        description: "Private health insurance for faster access and choice",
        quoteUrl: "https://quote.kota.io/es/private"
      },
      {
        id: "es-plan-2",
        name: "Seguro Dental",
        logo: "🦷",
        description: "Specialized dental coverage to complement public system",
        quoteUrl: "https://quote.kota.io/es/dental"
      }
    ],
    faqs: [
      {
        id: "es-faq-1",
        question: "Do I need private insurance in Spain?",
        answer: "No, public healthcare is excellent and free for residents. Private insurance provides faster access, private rooms, and choice of specialists."
      },
      {
        id: "es-faq-2",
        question: "How do I access public healthcare as an expat?",
        answer: "EU citizens can use EHIC initially, then register for Tarjeta Sanitaria. Non-EU residents need to register with Social Security first."
      }
    ],
    onboardingLinks: [
      {
        id: "es-onboard-1",
        title: "Spanish Healthcare Registration",
        description: "How to register for public healthcare",
        url: "/resources/spain-healthcare-registration"
      },
      {
        id: "es-onboard-2",
        title: "Private vs Public Healthcare",
        description: "Understanding your options in Spain",
        url: "/resources/spain-healthcare-comparison"
      }
    ]
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    flag: "🇳🇱",
    plans: [
      {
        id: "nl-plan-1",
        name: "Basisverzekering",
        logo: "🏥",
        description: "Mandatory basic health insurance for all residents",
        quoteUrl: "https://quote.kota.io/nl/basic"
      },
      {
        id: "nl-plan-2",
        name: "Aanvullende Verzekering",
        logo: "➕",
        description: "Supplementary insurance for dental, physio, and extras",
        quoteUrl: "https://quote.kota.io/nl/supplementary"
      }
    ],
    faqs: [
      {
        id: "nl-faq-1",
        question: "Is health insurance mandatory in the Netherlands?",
        answer: "Yes, all residents must have basic health insurance (basisverzekering). You have 4 months to arrange this after becoming a resident."
      },
      {
        id: "nl-faq-2",
        question: "What's the difference between basic and supplementary insurance?",
        answer: "Basic insurance covers essential medical care. Supplementary covers extras like dental care, physiotherapy, alternative medicine, and abroad coverage."
      }
    ],
    onboardingLinks: [
      {
        id: "nl-onboard-1",
        title: "Dutch Healthcare System Guide",
        description: "Understanding mandatory health insurance",
        url: "/resources/netherlands-healthcare-guide"
      },
      {
        id: "nl-onboard-2",
        title: "Choosing an Insurer",
        description: "Compare Dutch health insurance providers",
        url: "/resources/netherlands-insurer-comparison"
      }
    ]
  },
  {
    name: "Belgium",
    slug: "belgium",
    flag: "🇧🇪",
    plans: [
      {
        id: "be-plan-1",
        name: "Mutualité/Ziekenfonds",
        logo: "🏥",
        description: "Mandatory health insurance through mutual societies",
        quoteUrl: "https://quote.kota.io/be/mutual"
      },
      {
        id: "be-plan-2",
        name: "Hospitalization Insurance",
        logo: "🏨",
        description: "Private insurance for hospital costs and private rooms",
        quoteUrl: "https://quote.kota.io/be/hospital"
      }
    ],
    faqs: [
      {
        id: "be-faq-1",
        question: "How does Belgian health insurance work?",
        answer: "You must join a mutual society (mutualité/ziekenfonds) which provides mandatory health insurance. The government sets reimbursement rates."
      },
      {
        id: "be-faq-2",
        question: "Do I need additional private insurance?",
        answer: "While not mandatory, many Belgians get hospitalization insurance to cover private room costs and better hospital accommodation."
      }
    ],
    onboardingLinks: [
      {
        id: "be-onboard-1",
        title: "Belgian Healthcare Registration",
        description: "How to join a mutual society",
        url: "/resources/belgium-healthcare-registration"
      },
      {
        id: "be-onboard-2",
        title: "Understanding Mutualités",
        description: "Guide to Belgian mutual societies",
        url: "/resources/belgium-mutualites-guide"
      }
    ]
  },
  {
    name: "Italy",
    slug: "italy",
    flag: "🇮🇹",
    plans: [
      {
        id: "it-plan-1",
        name: "Assicurazione Sanitaria",
        logo: "🏥",
        description: "Private health insurance to complement SSN",
        quoteUrl: "https://quote.kota.io/it/private"
      },
      {
        id: "it-plan-2",
        name: "Fondo Sanitario",
        logo: "💼",
        description: "Corporate health funds for employees",
        quoteUrl: "https://quote.kota.io/it/corporate"
      }
    ],
    faqs: [
      {
        id: "it-faq-1",
        question: "Is private health insurance necessary in Italy?",
        answer: "No, the SSN (Servizio Sanitario Nazionale) provides universal healthcare. Private insurance offers faster access and private facilities."
      },
      {
        id: "it-faq-2",
        question: "How do I register for Italian healthcare?",
        answer: "Register with your local ASL (Azienda Sanitaria Locale) to get a tessera sanitaria (health card) for access to public healthcare."
      }
    ],
    onboardingLinks: [
      {
        id: "it-onboard-1",
        title: "Italian Healthcare Registration",
        description: "How to register with SSN",
        url: "/resources/italy-healthcare-registration"
      },
      {
        id: "it-onboard-2",
        title: "Understanding ASL Services",
        description: "Navigate local health authorities",
        url: "/resources/italy-asl-guide"
      }
    ]
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    plans: [
      {
        id: "ie-plan-1",
        name: "Private Health Insurance",
        logo: "🏥",
        description: "Private insurance for faster access and choice",
        quoteUrl: "https://quote.kota.io/ie/private"
      },
      {
        id: "ie-plan-2",
        name: "Hospital Cash Plan",
        logo: "💰",
        description: "Cash benefits for hospital stays and treatments",
        quoteUrl: "https://quote.kota.io/ie/cash"
      }
    ],
    faqs: [
      {
        id: "ie-faq-1",
        question: "Do I need private health insurance in Ireland?",
        answer: "No, public healthcare is available to all. Private insurance provides faster access to consultants and private hospital rooms."
      },
      {
        id: "ie-faq-2",
        question: "How does the Irish healthcare system work?",
        answer: "Public healthcare is means-tested. Medical card holders get free care, others pay for GP visits but hospital care is heavily subsidized."
      }
    ],
    onboardingLinks: [
      {
        id: "ie-onboard-1",
        title: "Irish Healthcare Entitlements",
        description: "Understanding medical cards and GP visit cards",
        url: "/resources/ireland-healthcare-entitlements"
      },
      {
        id: "ie-onboard-2",
        title: "Private Insurance Comparison",
        description: "Compare Irish health insurance providers",
        url: "/resources/ireland-insurance-comparison"
      }
    ]
  },
  {
    name: "Denmark",
    slug: "denmark",
    flag: "🇩🇰",
    plans: [
      {
        id: "dk-plan-1",
        name: "Sundhedsforsikring",
        logo: "🏥",
        description: "Private health insurance for faster treatment",
        quoteUrl: "https://quote.kota.io/dk/private"
      },
      {
        id: "dk-plan-2",
        name: "Tandlægeforsikring",
        logo: "🦷",
        description: "Dental insurance for comprehensive coverage",
        quoteUrl: "https://quote.kota.io/dk/dental"
      }
    ],
    faqs: [
      {
        id: "dk-faq-1",
        question: "Is healthcare free in Denmark?",
        answer: "Yes, healthcare is free for residents through the tax-funded system. Private insurance provides faster access and choice of specialists."
      },
      {
        id: "dk-faq-2",
        question: "How do I register for Danish healthcare?",
        answer: "Register with your municipality to get a yellow health card (sygesikringsbevis) and choose a GP (læge)."
      }
    ],
    onboardingLinks: [
      {
        id: "dk-onboard-1",
        title: "Danish Healthcare Registration",
        description: "How to register and choose a GP",
        url: "/resources/denmark-healthcare-registration"
      },
      {
        id: "dk-onboard-2",
        title: "Understanding Healthcare Groups",
        description: "Group 1 vs Group 2 patients explained",
        url: "/resources/denmark-healthcare-groups"
      }
    ]
  },
  {
    name: "Sweden",
    slug: "sweden",
    flag: "🇸🇪",
    plans: [
      {
        id: "se-plan-1",
        name: "Privat Sjukförsäkring",
        logo: "🏥",
        description: "Private health insurance for quicker access",
        quoteUrl: "https://quote.kota.io/se/private"
      },
      {
        id: "se-plan-2",
        name: "Företagshälsovård",
        logo: "💼",
        description: "Occupational healthcare services",
        quoteUrl: "https://quote.kota.io/se/occupational"
      }
    ],
    faqs: [
      {
        id: "se-faq-1",
        question: "How does Swedish healthcare work?",
        answer: "Healthcare is tax-funded and largely free. You pay small fees for GP visits and prescriptions, with annual caps on out-of-pocket costs."
      },
      {
        id: "se-faq-2",
        question: "Why get private insurance in Sweden?",
        answer: "Private insurance provides faster access to specialists, choice of doctors, and can include services not covered by public system."
      }
    ],
    onboardingLinks: [
      {
        id: "se-onboard-1",
        title: "Swedish Healthcare Registration",
        description: "Getting your personnummer and healthcare access",
        url: "/resources/sweden-healthcare-registration"
      },
      {
        id: "se-onboard-2",
        title: "Understanding Vårdcentralen",
        description: "How to use Swedish healthcare centers",
        url: "/resources/sweden-vardcentralen-guide"
      }
    ]
  },
  {
    name: "Norway",
    slug: "norway",
    flag: "🇳🇴",
    plans: [
      {
        id: "no-plan-1",
        name: "Privat Helseforsikring",
        logo: "🏥",
        description: "Private health insurance for faster treatment",
        quoteUrl: "https://quote.kota.io/no/private"
      },
      {
        id: "no-plan-2",
        name: "Tannhelseforsikring",
        logo: "🦷",
        description: "Dental insurance for adults",
        quoteUrl: "https://quote.kota.io/no/dental"
      }
    ],
    faqs: [
      {
        id: "no-faq-1",
        question: "Is Norwegian healthcare free?",
        answer: "Healthcare is largely free but with small co-payments. You have an annual deductible (egenandel) of around 2,000 NOK, after which most care is free."
      },
      {
        id: "no-faq-2",
        question: "Do I need private insurance in Norway?",
        answer: "No, but private insurance can provide faster access to specialists and avoid waiting times for non-urgent procedures."
      }
    ],
    onboardingLinks: [
      {
        id: "no-onboard-1",
        title: "Norwegian Healthcare Registration",
        description: "Getting your national ID and healthcare rights",
        url: "/resources/norway-healthcare-registration"
      },
      {
        id: "no-onboard-2",
        title: "Understanding Fastlege",
        description: "The Norwegian GP system explained",
        url: "/resources/norway-fastlege-system"
      }
    ]
  },
  {
    name: "Finland",
    slug: "finland",
    flag: "🇫🇮",
    plans: [
      {
        id: "fi-plan-1",
        name: "Yksityinen Sairausvakuutus",
        logo: "🏥",
        description: "Private health insurance for enhanced coverage",
        quoteUrl: "https://quote.kota.io/fi/private"
      },
      {
        id: "fi-plan-2",
        name: "Työterveyshuolto",
        logo: "💼",
        description: "Occupational healthcare coverage",
        quoteUrl: "https://quote.kota.io/fi/occupational"
      }
    ],
    faqs: [
      {
        id: "fi-faq-1",
        question: "How does Finnish healthcare work?",
        answer: "Finland has universal healthcare through Kela and municipal health centers. Private insurance provides faster access and additional services."
      },
      {
        id: "fi-faq-2",
        question: "What is Kela and how do I register?",
        answer: "Kela is the Social Insurance Institution that provides health insurance. Register when you get your Finnish personal identity code."
      }
    ],
    onboardingLinks: [
      {
        id: "fi-onboard-1",
        title: "Finnish Healthcare Registration",
        description: "Registering with Kela and municipalities",
        url: "/resources/finland-healthcare-registration"
      },
      {
        id: "fi-onboard-2",
        title: "Understanding Terveyskeskus",
        description: "How to use Finnish health centers",
        url: "/resources/finland-health-centers"
      }
    ]
  }
];