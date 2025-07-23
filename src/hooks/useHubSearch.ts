import { useState, useMemo } from 'react';
import { searchHub, SearchResult } from '@/data/searchIndex';

export const useHubSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.trim().length < 2) {
      return [];
    }
    
    setIsSearching(true);
    const results = searchHub(searchTerm, 15);
    setIsSearching(false);
    
    return results;
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    isSearching,
    clearSearch,
    hasResults: searchResults.length > 0,
    hasSearchTerm: searchTerm.trim().length >= 2
  };
};