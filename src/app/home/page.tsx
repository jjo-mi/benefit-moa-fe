import { SearchInput } from "@/components/common/SearchInput";
import PopularPolicyBoard from "@/components/ui/PopularPolicyBoard";

export default function HomePage() {
  return (
    <div className="flex flex-col p-4 items-center justify-center h-[calc(100vh-4rem)]">
      <h1 className="text-2xl font-bold">혜택모아</h1>
      <h2 className="text-sm text-gray-500">원하는 것을 검색 해주세요</h2>
      <SearchInput />
      <PopularPolicyBoard />
    </div>
  );
}