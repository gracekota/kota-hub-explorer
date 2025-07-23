// Import country images
import belgiumImage from "@/assets/belgium-new.jpg";
import franceImage from "@/assets/france-new.jpg";
import germanyImage from "@/assets/germany-neuschwanstein.jpg";
import irelandImage from "@/assets/ireland-new.jpg";
import italyImage from "@/assets/italy-colosseum.jpg";
import luxembourgImage from "@/assets/luxembourg-new.jpg";
import netherlandsImage from "@/assets/netherlands-amsterdam-canals.jpg";
import portugalImage from "@/assets/portugal-azulejo-tiles.jpg";
import spainImage from "@/assets/spain-sagrada-familia.jpg";
import ukImage from "@/assets/uk-big-ben.jpg";

export interface Country {
  name: string;
  slug: string;
  flag: string;
  image: string;
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
    name: "Belgium",
    slug: "belgium",
    flag: "🇧🇪",
    image: belgiumImage,
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
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    image: franceImage,
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
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    image: germanyImage,
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
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    image: irelandImage,
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
    name: "Italy",
    slug: "italy",
    flag: "🇮🇹",
    image: italyImage,
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
    name: "Luxembourg",
    slug: "luxembourg",
    flag: "🇱🇺",
    image: luxembourgImage,
    plans: [
      {
        id: "lu-plan-1",
        name: "CNS Insurance",
        logo: "🏥",
        description: "National Health Fund mandatory coverage",
        quoteUrl: "https://quote.kota.io/lu/cns"
      },
      {
        id: "lu-plan-2",
        name: "Complementary Insurance",
        logo: "➕",
        description: "Additional coverage for enhanced benefits",
        quoteUrl: "https://quote.kota.io/lu/complementary"
      }
    ],
    faqs: [
      {
        id: "lu-faq-1",
        question: "How does Luxembourg's healthcare system work?",
        answer: "Luxembourg has a public health insurance system (CNS) that covers all residents. It's funded by contributions from employees, employers, and the state."
      },
      {
        id: "lu-faq-2",
        question: "Do I need private insurance in Luxembourg?",
        answer: "The CNS provides comprehensive coverage, but many residents choose complementary insurance for additional benefits like private rooms and alternative treatments."
      }
    ],
    onboardingLinks: [
      {
        id: "lu-onboard-1",
        title: "CNS Registration Guide",
        description: "How to register with Luxembourg's health system",
        url: "/resources/luxembourg-cns-registration"
      },
      {
        id: "lu-onboard-2",
        title: "Healthcare for Cross-Border Workers",
        description: "Special provisions for cross-border employees",
        url: "/resources/luxembourg-cross-border-healthcare"
      }
    ]
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    flag: "🇳🇱",
    image: netherlandsImage,
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
    name: "Portugal",
    slug: "portugal",
    flag: "🇵🇹",
    image: portugalImage,
    plans: [
      {
        id: "pt-plan-1",
        name: "SNS Plus",
        logo: "🏥",
        description: "Private insurance to complement public healthcare",
        quoteUrl: "https://quote.kota.io/pt/private"
      },
      {
        id: "pt-plan-2",
        name: "Seguro de Saúde",
        logo: "💼",
        description: "Comprehensive private health insurance",
        quoteUrl: "https://quote.kota.io/pt/comprehensive"
      }
    ],
    faqs: [
      {
        id: "pt-faq-1",
        question: "How does Portugal's healthcare system work?",
        answer: "Portugal has a public healthcare system (SNS) that provides free or low-cost healthcare to residents. Private insurance provides faster access and additional services."
      },
      {
        id: "pt-faq-2",
        question: "Can I use public healthcare as an expat?",
        answer: "EU citizens can access emergency care immediately. For full access, you need to register with local health center and get a health user number (número de utente)."
      }
    ],
    onboardingLinks: [
      {
        id: "pt-onboard-1",
        title: "SNS Registration Guide",
        description: "How to register with Portuguese healthcare",
        url: "/resources/portugal-sns-registration"
      },
      {
        id: "pt-onboard-2",
        title: "Private Insurance Options",
        description: "Understanding private healthcare in Portugal",
        url: "/resources/portugal-private-insurance"
      }
    ]
  },
  {
    name: "Spain",
    slug: "spain",
    flag: "🇪🇸",
    image: spainImage,
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
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    image: ukImage,
    plans: [
      {
        id: "uk-allianz-standard",
        name: "Allianz International Care - Standard",
        logo: "🏥",
        description: "Comprehensive international health insurance with global coverage",
        quoteUrl: "https://quote.kota.io/uk/allianz-standard"
      },
      {
        id: "uk-allianz-premium",
        name: "Allianz International Care - Premium",
        logo: "🏥",
        description: "Enhanced coverage with additional benefits and higher limits",
        quoteUrl: "https://quote.kota.io/uk/allianz-premium"
      },
      {
        id: "uk-vitality-core",
        name: "Vitality - Core",
        logo: "💚",
        description: "Essential health insurance with wellness rewards",
        quoteUrl: "https://quote.kota.io/uk/vitality-core"
      },
      {
        id: "uk-vitality-plus",
        name: "Vitality - Plus",
        logo: "💚",
        description: "Enhanced coverage with additional benefits and higher wellness rewards",
        quoteUrl: "https://quote.kota.io/uk/vitality-plus"
      },
      {
        id: "uk-vitality-premier",
        name: "Vitality - Premier",
        logo: "💚",
        description: "Premium health insurance with maximum coverage and exclusive benefits",
        quoteUrl: "https://quote.kota.io/uk/vitality-premier"
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
  }
];