import React, { useState, useRef } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "원하는 것을 검색 해주세요",
  onSearch,
  className = ""
}) => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(searchValue);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <div className={`relative w-full ${className} boder`}>
      {/* 검색 아이콘 */}
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
        <img 
          src="/assets/icons/search-icon.svg" 
          alt="검색" 
          className="w-5 h-5" 
        />
      </div>

      {/* 입력 필드 */}
      <input
        ref={inputRef}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="w-full px-4 py-3 pl-12 pr-12 border-4 rounded-full focus:outline-none placeholder-gray-600 bg-white transition-all duration-300 hover:shadow-lg focus:shadow-xl"
        style={{
          borderImage: "linear-gradient(90deg, #16A34A, #2563EB) 1",
          borderRadius: "9999px",
        }}
      />

      {/* 검색 버튼 */}
      {onSearch && searchValue && (
        <button 
          onClick={handleSearch}
          className="absolute inset-y-0 right-12 flex items-center px-2 hover:bg-gray-100 rounded-r-full transition-all duration-200 hover:shadow-md z-10"
          title="검색"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      )}

      {/* 클리어 버튼 */}
      {searchValue && (
        <button 
          onClick={handleClear}
          className="absolute inset-y-0 right-2 flex items-center px-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:shadow-md z-10"
          title="지우기"
        >
          <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};