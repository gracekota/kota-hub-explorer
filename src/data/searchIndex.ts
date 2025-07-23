import { countries } from "./countries";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'country' | 'plan' | 'faq' | 'page' | 'feature';
  country?: string;
  tags: string[];
}

// Create search index with all searchable content
export const searchIndex: SearchResult[] = [
  // Countries
  ...countries.map(country => ({
    id: `country-${country.slug}`,
    title: country.name,
    description: `Healthcare and insurance information for ${country.name}`,
    url: `/country/${country.slug}`,
    type: 'country' as const,
    tags: [country.name.toLowerCase(), country.slug, 'country', 'healthcare', 'insurance']
  })),

  // Plans from all countries
  ...countries.flatMap(country => 
    country.plans.map(plan => ({
      id: `plan-${plan.id}`,
      title: plan.name,
      description: plan.description,
      url: `/country/${country.slug}`,
      type: 'plan' as const,
      country: country.name,
      tags: [
        plan.name.toLowerCase(),
        country.name.toLowerCase(),
        'plan',
        'insurance',
        'healthcare',
        ...plan.description.toLowerCase().split(' ')
      ]
    }))
  ),

  // FAQs from all countries
  ...countries.flatMap(country => 
    country.faqs.map(faq => ({
      id: `faq-${faq.id}`,
      title: faq.question,
      description: faq.answer,
      url: `/country/${country.slug}`,
      type: 'faq' as const,
      country: country.name,
      tags: [
        ...faq.question.toLowerCase().split(' '),
        ...faq.answer.toLowerCase().split(' '),
        country.name.toLowerCase(),
        'faq',
        'question',
        'help'
      ]
    }))
  ),

  // Specific pages and features
  {
    id: 'allianz-standard',
    title: 'Allianz International Care - Standard',
    description: 'Comprehensive international health insurance with detailed benefits information',
    url: '/country/uk/allianz-standard',
    type: 'page',
    tags: ['allianz', 'standard', 'international', 'insurance', 'healthcare', 'benefits', 'coverage']
  },
  {
    id: 'deductible-info',
    title: 'Understanding Deductibles',
    description: 'Learn about deductibles and how they work in health insurance',
    url: '/country/uk/allianz-standard/deductible',
    type: 'feature',
    tags: ['deductible', 'insurance', 'costs', 'explanation', 'video', 'learning']
  },
  {
    id: 'benefits-glossary',
    title: 'Benefits Glossary',
    description: 'Comprehensive glossary of insurance benefits and terms',
    url: '/country/uk/allianz-standard/benefits-glossary',
    type: 'page',
    tags: ['benefits', 'glossary', 'terms', 'definitions', 'insurance', 'coverage']
  },
  {
    id: 'waiting-periods',
    title: 'Coverage Waiting Periods',
    description: 'Information about waiting periods for insurance coverage',
    url: '/country/uk/allianz-standard/waiting-periods',
    type: 'page',
    tags: ['waiting', 'periods', 'coverage', 'insurance', 'timeline', 'eligibility']
  },
  {
    id: 'full-plan-details',
    title: 'Full Plan Details',
    description: 'Complete plan documentation and benefit details',
    url: '/country/uk/allianz-standard/full-plan-details',
    type: 'page',
    tags: ['plan', 'details', 'benefits', 'documentation', 'pdf', 'comprehensive']
  },

  // General insurance concepts
  {
    id: 'private-insurance',
    title: 'Private Health Insurance',
    description: 'Information about private health insurance across Europe',
    url: '/',
    type: 'feature',
    tags: ['private', 'insurance', 'health', 'healthcare', 'coverage', 'premium']
  },
  {
    id: 'public-healthcare',
    title: 'Public Healthcare Systems',
    description: 'Understanding public healthcare across European countries',
    url: '/',
    type: 'feature',
    tags: ['public', 'healthcare', 'government', 'free', 'universal', 'coverage']
  },
  {
    id: 'expat-insurance',
    title: 'Expat Insurance',
    description: 'Health insurance options for expatriates living in Europe',
    url: '/',
    type: 'feature',
    tags: ['expat', 'expatriate', 'international', 'insurance', 'moving', 'abroad']
  },
  {
    id: 'cross-border',
    title: 'Cross-Border Healthcare',
    description: 'Healthcare coverage when moving between European countries',
    url: '/',
    type: 'feature',
    tags: ['cross-border', 'europe', 'travel', 'coverage', 'international', 'eu']
  }
];

// Search function
export const searchHub = (query: string, limit = 10): SearchResult[] => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerms = query.toLowerCase().trim().split(' ');
  
  return searchIndex
    .map(item => {
      let score = 0;
      
      // Title matches (highest priority)
      const titleLower = item.title.toLowerCase();
      searchTerms.forEach(term => {
        if (titleLower.includes(term)) {
          score += titleLower === term ? 100 : titleLower.startsWith(term) ? 50 : 20;
        }
      });
      
      // Description matches
      const descriptionLower = item.description.toLowerCase();
      searchTerms.forEach(term => {
        if (descriptionLower.includes(term)) {
          score += 10;
        }
      });
      
      // Tag matches
      searchTerms.forEach(term => {
        item.tags.forEach(tag => {
          if (tag.includes(term)) {
            score += tag === term ? 30 : tag.startsWith(term) ? 15 : 5;
          }
        });
      });
      
      // Country matches
      if (item.country) {
        const countryLower = item.country.toLowerCase();
        searchTerms.forEach(term => {
          if (countryLower.includes(term)) {
            score += 15;
          }
        });
      }
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};