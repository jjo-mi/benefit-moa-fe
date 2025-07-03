import { SearchInput } from "@/components/common/SearchInput";
import PopularPolicyBoard from "@/components/ui/PopularPolicyBoard";

export default function HomePage() {
  return (
    <div className="flex flex-col p-4 items-center justify-center h-[calc(100vh-4rem)]">
      <h1 className="text-2xl font-bold">혜택모아</h1>
      {/* <h2 className="text-sm text-gray-500">원하는 것을 검색 해주세요</h2> */}
      <div className="flex items-center space-x-4 my-4">
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="searchType"
            value="all"
            defaultChecked
            className="accent-green-600"
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
      <SearchInput />
      <PopularPolicyBoard />
    </div>
  );
}