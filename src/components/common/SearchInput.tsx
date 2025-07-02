import React from "react";

export const SearchInput = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="원하는 것을 검색 해주세요"
        className="w-full px-4 py-3 pl-4 pr-12 border-4 rounded-lg focus:outline-none placeholder-gray-600 border-transparent bg-white focus:border-transparent focus:ring-0"
        style={{
          borderImage: "linear-gradient(90deg, #16A34A, #2563EB) 1",
          borderRadius: "10000px",
        }}
      />
      <button className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <img src="/assets/icons/search-icon.svg" alt="검색" className="w-6 h-6" />
      </button>
    </div>
  );
};