"use client";

import { useEffect, useState } from "react";        
import { SearchInput } from "@/components/common/SearchInput";
import PopularPolicyBoard from "@/components/ui/PopularPolicyBoard";
// import { useSession } from "next-auth/react";

export default function HomePage() {
//   const { data: session } = useSession();
//   const user = session?.user;
    const user = "홍길동";
    const [recommendations, setRecommendations] = useState(["추천", '청년 혜택', "통합",'중년 혜택', '노년 혜택']);
    const [searchType, setSearchType] = useState("all");
    const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSearchTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(e.target.value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentRecommendationIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
                setIsAnimating(false);
            }, 300); // 애니메이션 중간에 텍스트 변경
        }, 5000);
        return () => clearInterval(interval);
    }, [recommendations.length]);

  return (
    <div className="flex flex-col p-4 items-center justify-center h-[calc(100vh-4rem)]">
      <h1 className="sr-only">혜택모아</h1>
      <h1 className="text-5xl  text-blue-600 mb-3">Benefit MoA</h1>
    
    {/* 추천키워드 */}
      <h2 className="text-3xl font-black mt-4 mb-12">
        <span
          className="bg-gradient-to-r from-green-400 via-green-600 to-emerald-400 bg-clip-text text-transparent"
        >
          {user}
        </span>
        님,{" "}
        <span
          className={`inline-block transition-all duration-300 ease-in-out ${
            isAnimating 
              ? 'opacity-0 transform translate-y-2 scale-95' 
              : 'opacity-100 transform translate-y-0 scale-100'
          }`}
        >
          {recommendations[currentRecommendationIndex]}
        </span>{" "}
        어떤가요?
      </h2>

      {/* 검색 섹션 */}
      <div className="w-screen h-60 min-h-40 mb-4 px-10 bg-blue-200 flex flex-col items-center justify-center">
      {/* 라디오 버튼 */}
      <div className="flex items-center space-x-4 mb-7">
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="searchType"
            value="all"
            defaultChecked
            className="accent-green-600"
            onChange={handleSearchTypeChange}
          />
          <span className="text-gray-700 text-sm">통합검색</span>
        </label>
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="searchType"
            value="custom"
            className="accent-green-600"
          />
          <span className="text-gray-700 text-sm">맞춤검색</span>
        </label>
      </div>
      {/* 검색 입력창 */}
        <SearchInput />
      </div>
      {/* 인기 정책 게시판 */}
      <PopularPolicyBoard />
    </div>
  );
}