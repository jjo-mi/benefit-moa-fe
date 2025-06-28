import { SearchInput } from "@/component/ui/SearchInput";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">혜택모아</h1>
      <h2 className="text-sm text-gray-500">원하는 것을 검색 해주세요</h2>
      <SearchInput />
    </div>
  );
}