import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { getSearchItems, type SearchItem } from '../../data/searchIndex';

interface SearchBarProps {
  placeholder?: string;
}

function normalizeSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

export default function SearchBar({
  placeholder = 'Tim kiem noi dung...',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce truy van tim kiem
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const items = useMemo(() => getSearchItems(), []);

  const results = useMemo(() => {
    if (debouncedQuery.trim().length < 2) {
      return [];
    }
    const normalizedQuery = normalizeSearchText(debouncedQuery.trim());
    return items
      .filter((item) => {
        const haystack = [
          item.title,
          item.description,
          ...(item.keywords ?? []),
        ]
          .join(' ')
          .normalize('NFD');
        const normalizedHaystack = normalizeSearchText(haystack);
        return normalizedHaystack.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [debouncedQuery, items]);

  const isOpen = isFocused && results.length > 0;

  // Dong dropdown khi click ben ngoai
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleResultClick = (item: SearchItem) => {
    setIsFocused(false);
    setQuery('');
    setDebouncedQuery('');
    const el = document.getElementById(item.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-sub"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="
            w-full
            pl-10 pr-4 py-2.5
            text-sm text-ink
            bg-white
            border border-gray-border
            rounded-full
            outline-none
            transition-colors duration-200
            focus:bg-lotus-pale/30
            focus:border-lotus-pink
            placeholder:text-gray-sub
          "
        />
      </div>

      {/* Dropdown ket qua */}
      {isOpen && (
        <div
          className="
            absolute top-full left-0 right-0
            mt-2 py-2
            bg-white
            border border-gray-border
            rounded-xl
            shadow-lg
            z-40
            max-h-80 overflow-y-auto
          "
        >
          {results.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleResultClick(item)}
              className="
                w-full text-left
                px-4 py-3
                hover:bg-lotus-pale/50
                transition-colors duration-150
                cursor-pointer
              "
            >
              <p className="text-sm font-medium text-ink leading-snug">
                {item.title}
              </p>
              {item.description && (
                <p className="text-xs text-gray-sub mt-0.5 line-clamp-1">
                  {item.description}
                </p>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
